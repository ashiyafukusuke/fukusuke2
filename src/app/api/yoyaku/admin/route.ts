import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { getSetting, notifyChange, push, setSetting } from "@/lib/notify";
import { REBOOKED, addDays, defaultKind, ensureTables, fmtDate, hm, HORIZON, jstNow, kindsFor, sql, stripe } from "@/lib/yoyaku";

export const dynamic = "force-dynamic";

// 管理画面用。Vercel の環境変数 YOYAKU_ADMIN_PASSWORD と一致したときだけ使える
function check(req: Request): string | null {
  const want = (process.env.YOYAKU_ADMIN_PASSWORD || "").trim();
  if (!want) return "管理用パスワードがサーバーにまだ届いていません（設定の反映待ち）。";
  if (want.length < 8) return "管理用パスワードが8文字未満です。Vercelで8文字以上に設定し直してください。";
  const got = (req.headers.get("x-admin-pass") || "").trim();
  const a = crypto.createHash("sha256").update(want).digest();
  const b = crypto.createHash("sha256").update(got).digest();
  return crypto.timingSafeEqual(a, b) ? null : "パスワードが違います。";
}
const deny = (msg: string) => NextResponse.json({ error: msg }, { status: 401 });

export async function GET(req: Request) {
  const ng = check(req);
  if (ng) return deny(ng);
  try {
    await ensureTables();
    const now = jstNow();
    const to = addDays(now.date, HORIZON);
    const kindOf = await kindsFor(now.date, to);
    const days: { date: string; kind: string; custom: boolean }[] = [];
    for (let i = 0; i <= HORIZON; i++) {
      const d = addDays(now.date, i);
      const k = kindOf(d);
      days.push({ date: d, kind: k, custom: k !== defaultKind(d) });
    }
    const bookings = await sql(
      `SELECT id, created_at, date, start_min, end_min, course, visit, pay, total, name, tel, mail, memo, answers, status, paid_at
       FROM bookings WHERE date >= $1 AND status IN ('confirmed','pending') ORDER BY date, start_min`,
      [addDays(now.date, -7)],
    );
    const ntfy = await getSetting("ntfy_topic");
    const published = await getSetting("published_until");
    const blocked = await sql(`SELECT id, tel, mail, name, created_at FROM blocked ORDER BY id DESC`);
    // お客様ごとの、これまでのキャンセル回数（電話番号かメールが一致）
    const stats = await sql<{ id: string; cancels: string }>(
      `SELECT b.id, (SELECT count(*) FROM bookings c WHERE c.status = 'cancelled' AND c.cancelled_by IN ('customer','admin') AND c.id <> b.id
         AND ((b.tel IS NOT NULL AND c.tel = b.tel) OR (b.mail IS NOT NULL AND lower(c.mail) = lower(b.mail)))
         AND NOT (c.cancelled_by = 'customer' AND ${REBOOKED("c", "(c.tel IS NOT NULL AND x.tel = c.tel) OR (c.mail IS NOT NULL AND lower(x.mail) = lower(c.mail))")})) AS cancels
       FROM bookings b WHERE b.date >= $1 AND b.status IN ('confirmed','pending')`,
      [addDays(now.date, -7)],
    );
    const cmap = Object.fromEntries(stats.map((s) => [s.id, Number(s.cancels)]));
    for (const b of bookings) (b as Record<string, unknown>).cancels = cmap[b.id as string] || 0;
    const blocks = await sql(`SELECT id, date, start_min, end_min, note FROM time_blocks WHERE date >= $1 ORDER BY date, start_min`, [now.date]);
    return NextResponse.json({ today: now.date, days, bookings, ntfy, published, blocked, blocks });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "読み込めませんでした。" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const ng = check(req);
  if (ng) return deny(ng);
  try {
    await ensureTables();
    const b = await req.json();
    if (typeof b.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(b.date) && ["full", "night", "closed"].includes(b.kind)) {
      if (b.kind === defaultKind(b.date)) await sql(`DELETE FROM open_days WHERE date = $1`, [b.date]);
      else await sql(`INSERT INTO open_days (date, kind) VALUES ($1, $2) ON CONFLICT (date) DO UPDATE SET kind = EXCLUDED.kind`, [b.date, b.kind]);
      return NextResponse.json({ ok: true });
    }
    if (typeof b.ntfy === "string") {
      const t = b.ntfy.trim();
      if (t && !/^[A-Za-z0-9_-]{8,64}$/.test(t)) return NextResponse.json({ error: "合言葉は半角英数字8文字以上にしてください。" }, { status: 400 });
      await setSetting("ntfy_topic", t);
      return NextResponse.json({ ok: true });
    }
    if (typeof b.publish === "string" && (b.publish === "" || /^\d{4}-\d{2}-\d{2}$/.test(b.publish))) {
      await setSetting("published_until", b.publish);
      return NextResponse.json({ ok: true });
    }
    if (b.testPush === true) {
      const t = await getSetting("ntfy_topic");
      if (!t) return NextResponse.json({ error: "先に合言葉を保存してください。" }, { status: 400 });
      const ok = await push(t, "イタキモ 通知テスト", "予約が入ると、このように届きます。");
      return ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "送れませんでした。" }, { status: 500 });
    }
    if (typeof b.block === "string" && /^[A-Za-z0-9_-]{6,30}$/.test(b.block)) {
      const r = (await sql(`SELECT tel, mail, name FROM bookings WHERE id = $1`, [b.block]))[0];
      if (!r) return NextResponse.json({ error: "予約が見つかりません。" }, { status: 404 });
      await sql(`INSERT INTO blocked (tel, mail, name) VALUES ($1, $2, $3)`, [r.tel, r.mail, r.name]);
      return NextResponse.json({ ok: true });
    }
    if (b.addBlock && typeof b.addBlock === "object") {
      const x = b.addBlock as Record<string, unknown>;
      const s = Number(x.s), e = Number(x.e);
      if (typeof x.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(x.date) || !Number.isInteger(s) || !Number.isInteger(e) || s < 0 || e > 24 * 60 || e <= s) {
        return NextResponse.json({ error: "日付と時間を確認してください（終わりは始まりより後に）。" }, { status: 400 });
      }
      await sql(`INSERT INTO time_blocks (date, start_min, end_min, note) VALUES ($1, $2, $3, $4)`, [x.date, s, e, typeof x.note === "string" ? x.note.slice(0, 40) : null]);
      return NextResponse.json({ ok: true });
    }
    if (Number.isInteger(b.delBlock)) {
      await sql(`DELETE FROM time_blocks WHERE id = $1`, [b.delBlock]);
      return NextResponse.json({ ok: true });
    }
    if (Number.isInteger(b.unblock)) {
      await sql(`DELETE FROM blocked WHERE id = $1`, [b.unblock]);
      return NextResponse.json({ ok: true });
    }
    if (typeof b.cancel === "string" && /^[A-Za-z0-9_-]{6,30}$/.test(b.cancel)) {
      // mode = "request"：お客様の依頼で取り消す（メールでお知らせ・事前決済は全額返金）
      // mode = "noshow"：来店なしなどで取り消す（連絡も返金もしない）
      const request = b.mode === "request";
      const rows = await sql<Record<string, string | null>>(
        `UPDATE bookings SET status = 'cancelled', cancelled_by = 'admin', cancelled_at = now() WHERE id = $1 AND status = 'confirmed' RETURNING *`,
        [b.cancel],
      );
      const r = rows[0];
      if (!r) return NextResponse.json({ error: "この予約はすでに取り消されています。" }, { status: 409 });
      if (!request) return NextResponse.json({ ok: true });
      let refunded = 0;
      let refundFailed = false;
      if (r.pay === "card" && r.paid_at && r.stripe_session) {
        try {
          const s = await stripe("checkout/sessions/" + r.stripe_session, "GET");
          if (s.payment_intent) {
            await stripe("refunds", "POST", { payment_intent: String(s.payment_intent), amount: String(r.total), "metadata[booking_id]": String(r.id) });
            refunded = Number(r.total);
          } else refundFailed = true;
        } catch (e) { console.error("admin refund failed", e); refundFailed = true; }
      }
      const when = `${fmtDate(r.date!)} ${hm(Number(r.start_min))}〜${hm(Number(r.end_min))}`;
      await notifyChange(r.id!, new URL(req.url).origin, "cancel", when, refunded, "shop");
      return NextResponse.json({ ok: true, refunded, refundFailed, mailed: !!r.mail });
    }
    return NextResponse.json({ error: "内容が正しくありません。" }, { status: 400 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "保存できませんでした。" }, { status: 500 });
  }
}
