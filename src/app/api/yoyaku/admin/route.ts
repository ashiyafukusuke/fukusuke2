import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { getSetting, notifyChange, notifyConfirmed, push, setSetting } from "@/lib/notify";
import { ACTIVE, COURSES, REBOOKED, addDays, daysBetween, price, defaultKind, ensureTables, fmtDate, hm, HORIZON, jstNow, kindsFor, sql, stripe } from "@/lib/yoyaku";

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

// パスワードの総当たり対策：同じ接続元から15分に5回まちがえたら、しばらく受け付けない
async function guard(req: Request): Promise<string | null> {
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  await sql(`CREATE TABLE IF NOT EXISTS admin_fails (ip text NOT NULL, at timestamptz NOT NULL DEFAULT now())`);
  const recent = await sql<{ n: string }>(`SELECT count(*) AS n FROM admin_fails WHERE ip = $1 AND at > now() - interval '15 minutes'`, [ip]);
  if (Number(recent[0]?.n || 0) >= 5) return "パスワードを何度もまちがえたため、15分ほど受け付けを止めています。時間をおいてお試しください。";
  const bad = check(req);
  if (bad) {
    if (bad === "パスワードが違います。") await sql(`INSERT INTO admin_fails (ip) VALUES ($1)`, [ip]);
    return bad;
  }
  await sql(`DELETE FROM admin_fails WHERE ip = $1 OR at < now() - interval '1 day'`, [ip]);
  return null;
}

const courseLabel = (c: unknown) => (c === "c90" ? "90分" : c === "c40" ? "40分" : "60分");

// 売上：その月の予約（確定済み）と、記録した会計の集計。csv のときは CSV を返す
const METHODS = ["現金", "カード", "電子マネー", "QR決済（PayPayなど）", "事前決済", "お代なし（トライアルなど）"];
async function sales(ym: string, csv: boolean) {
  const rows = await sql<Record<string, string | number | null>>(
    `SELECT id, date, start_min, end_min, course, visit, pay, base, discount, total, name, status, paid_at, source, settled_at, paid_amount, paid_method
     FROM bookings WHERE status = 'confirmed' AND date LIKE $1 ORDER BY date, start_min`,
    [ym + "-%"],
  );
  const today = jstNow().date;
  const done = rows.filter((r) => r.settled_at);
  const sum = (xs: typeof rows, f: (r: (typeof rows)[number]) => number) => xs.reduce((a, r) => a + f(r), 0);
  const group = (key: (r: (typeof rows)[number]) => string) => {
    const m: Record<string, { n: number; yen: number }> = {};
    for (const r of done) { const k = key(r); (m[k] ||= { n: 0, yen: 0 }); m[k].n++; m[k].yen += Number(r.paid_amount || 0); }
    return m;
  };
  const summary = {
    total: sum(done, (r) => Number(r.paid_amount || 0)),
    count: done.length,
    unrecorded: rows.filter((r) => !r.settled_at && String(r.date) < today).length,
    discount: sum(done, (r) => Number(r.discount || 0)),
    byMethod: group((r) => String(r.paid_method || "不明")),
    byCourse: group((r) => courseLabel(r.course)),
    byVisit: group((r) => (r.visit === "first" ? "はじめて" : "2回目以降")),
    bySource: group((r) => String(r.source || "記録なし")),
  };
  if (!csv) return NextResponse.json({ ym, rows, summary, methods: METHODS, today });
  const q = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const lines = [["日付", "開始", "予約番号", "コース", "区分", "予約時の支払い", "受け取り方法", "受け取った金額", "早割などの値引き", "経由"].map(q).join(",")];
  for (const r of done) {
    lines.push([r.date, hm(Number(r.start_min)), String(r.id).slice(0, 6).toUpperCase(), courseLabel(r.course), r.visit === "first" ? "はじめて" : "2回目以降",
      r.pay === "card" ? "事前決済" : "当日払い", r.paid_method, r.paid_amount, r.discount, r.source].map(q).join(","));
  }
  return new NextResponse("\ufeff" + lines.join("\r\n") + "\r\n", {
    headers: { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="itakimo-sales-${ym}.csv"` },
  });
}

export async function GET(req: Request) {
  const ng = await guard(req);
  if (ng) return deny(ng);
  try {
    await ensureTables();
    const q = new URL(req.url).searchParams;
    const ym = q.get("sales") || q.get("csv");
    if (ym && /^\d{4}-\d{2}$/.test(ym)) return sales(ym, q.has("csv"));
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
      `SELECT id, created_at, date, start_min, end_min, course, visit, pay, total, name, tel, mail, memo, answers, status, paid_at, source, settled_at, paid_amount, paid_method
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
    // お客様メモと、これまでの来店回数（電話番号が一致する、日付が過ぎた確定済みの予約）
    const tels = Array.from(new Set(bookings.map((b) => b.tel).filter(Boolean))) as string[];
    if (tels.length) {
      const notes = await sql<{ tel: string; note: string }>(`SELECT tel, note FROM customer_notes WHERE tel IN (SELECT jsonb_array_elements_text($1::jsonb))`, [tels]);
      const visits = await sql<{ tel: string; n: string }>(
        `SELECT tel, count(*) AS n FROM bookings WHERE tel IN (SELECT jsonb_array_elements_text($1::jsonb)) AND status = 'confirmed' AND date < $2 GROUP BY tel`, [tels, now.date]);
      const nmap = Object.fromEntries(notes.map((x) => [x.tel, x.note]));
      const vmap = Object.fromEntries(visits.map((x) => [x.tel, Number(x.n)]));
      for (const b of bookings as Record<string, unknown>[]) { if (b.tel) { b.note = nmap[b.tel as string] || ""; b.visits = vmap[b.tel as string] || 0; } }
    }
    return NextResponse.json({ today: now.date, days, bookings, ntfy, published, blocked, blocks });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "読み込めませんでした。" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const ng = await guard(req);
  if (ng) return deny(ng);
  try {
    await ensureTables();
    const b = await req.json();
    if (typeof b.settle === "string" && /^[A-Za-z0-9_-]{6,30}$/.test(b.settle)) {
      const amount = Math.round(Number(b.amount));
      if (!Number.isFinite(amount) || amount < 0 || amount > 100000) return NextResponse.json({ error: "金額をご確認ください。" }, { status: 400 });
      if (!METHODS.includes(b.method)) return NextResponse.json({ error: "受け取り方法を選んでください。" }, { status: 400 });
      await sql(`UPDATE bookings SET settled_at = now(), paid_amount = $2, paid_method = $3 WHERE id = $1 AND status = 'confirmed'`, [b.settle, amount, b.method]);
      return NextResponse.json({ ok: true });
    }
    // STORES 予約からの移行：1行に「日付|開始-終了|コース(c60/c90/c40)|初回か(first/repeat)|予約時の支払い(card/onsite)|金額|受け取り方法|お名前|電話|メール」
    // （お名前・電話・メールは省略可。すでに取り込んだ予約は、お名前・電話・メールだけ更新する）
    if (typeof b.importStores === "string") {
      let added = 0;
      for (const line of b.importStores.split(/\r?\n/)) {
        const f = line.split("|").map((x: string) => x.trim());
        // 「メモ|電話番号|内容（改行は\\n）」の行は、お客様メモとして取り込む
        if (f[0] === "メモ" && f.length >= 3) {
          const tel = f[1].replace(/[^\d+]/g, "");
          const text = f.slice(2).join("|").replace(/\\n/g, "\n").trim().slice(0, 2000);
          if (tel && text) {
            await sql(`INSERT INTO customer_notes (tel, note) VALUES ($1, $2) ON CONFLICT (tel) DO UPDATE SET note = EXCLUDED.note, updated_at = now()`, [tel, text]);
            added++;
          }
          continue;
        }
        if (f.length < 7 || !/^\d{4}-\d{2}-\d{2}$/.test(f[0]) || !/^\d{2}:\d{2}-\d{2}:\d{2}$/.test(f[1])) continue;
        const toMin = (x: string) => Number(x.slice(0, 2)) * 60 + Number(x.slice(3, 5));
        const [st, en] = f[1].split("-").map(toMin);
        const course = ["c60", "c90", "c40"].includes(f[2]) ? f[2] : "c60";
        const visit = f[3] === "repeat" ? "repeat" : "first";
        const pay = f[4] === "card" ? "card" : "onsite";
        const amount = Math.max(0, Math.round(Number(f[5]) || 0));
        const method = METHODS.includes(f[6]) ? f[6] : "現金";
        const id = `st${f[0].replace(/-/g, "")}${f[1].slice(0, 5).replace(":", "")}`;
        const nm = (f[7] || "").slice(0, 40) || "（STORESから移行）";
        const tl = (f[8] || "").replace(/[^\d+]/g, "") || null;
        const ml = (f[9] || "").slice(0, 120) || null;
        const r = await sql(
          `INSERT INTO bookings (id, date, start_min, end_min, course, visit, pay, base, discount, total, name, tel, mail, status, token, source, settled_at, paid_amount, paid_method, paid_at)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 0, $8, $11, $12, $13, 'confirmed', $9, 'STORES（移行前）', now(), $8, $10, CASE WHEN $7 = 'card' THEN now() ELSE NULL END)
           ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, tel = EXCLUDED.tel, mail = EXCLUDED.mail
             WHERE bookings.source = 'STORES（移行前）'
           RETURNING id`,
          [id, f[0], st, en, course, visit, pay, amount, crypto.randomBytes(18).toString("base64url"), method, nm, tl, ml],
        );
        added += r.length;
      }
      return NextResponse.json({ ok: true, added });
    }
    // お客様メモ：{ note: { tel, text } }（空なら消す）。{ importNotes: "電話|メモ（改行は\\n）" }
    if (b.note && typeof b.note.tel === "string") {
      const tel = b.note.tel.replace(/[^\d+]/g, "");
      const text = String(b.note.text || "").trim().slice(0, 2000);
      if (!tel) return NextResponse.json({ error: "電話番号のない予約にはメモを残せません。" }, { status: 400 });
      if (text) await sql(`INSERT INTO customer_notes (tel, note) VALUES ($1, $2) ON CONFLICT (tel) DO UPDATE SET note = EXCLUDED.note, updated_at = now()`, [tel, text]);
      else await sql(`DELETE FROM customer_notes WHERE tel = $1`, [tel]);
      return NextResponse.json({ ok: true });
    }
    if (typeof b.importNotes === "string") {
      let n = 0;
      for (const line of b.importNotes.split(/\r?\n/)) {
        const i = line.indexOf("|");
        if (i < 0) continue;
        const tel = line.slice(0, i).replace(/[^\d+]/g, "");
        const text = line.slice(i + 1).replace(/\\n/g, "\n").trim().slice(0, 2000);
        if (!tel || !text) continue;
        await sql(`INSERT INTO customer_notes (tel, note) VALUES ($1, $2) ON CONFLICT (tel) DO UPDATE SET note = EXCLUDED.note, updated_at = now()`, [tel, text]);
        n++;
      }
      return NextResponse.json({ ok: true, added: n });
    }
    // ---- 管理画面のカレンダーから：電話・店頭での予約、予約の日時変更、ブロックの編集 ----
    const isDate = (v: unknown): v is string => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
    const isMin = (v: unknown): v is number => Number.isInteger(v) && (v as number) >= 0 && (v as number) <= 24 * 60;
    // 重なる予約・ブロックの説明（なければ空）。exceptId の予約は除く
    const overlap = async (date: string, s: number, e: number, exceptId: string | null, exceptBlock: number | null, withGap: boolean) => {
      const g = withGap ? 15 : 0;
      const bk = await sql<{ name: string; start_min: string; end_min: string }>(
        `SELECT name, start_min, end_min FROM bookings WHERE date = $1 AND ${ACTIVE} AND ($4::text IS NULL OR id <> $4) AND $2::int < end_min + ${g} AND start_min < $3::int + ${g}`,
        [date, s, e, exceptId]);
      const bl = await sql<{ note: string | null; start_min: string; end_min: string }>(
        `SELECT note, start_min, end_min FROM time_blocks WHERE date = $1 AND ($4::int IS NULL OR id <> $4) AND $2::int < end_min AND start_min < $3::int`,
        [date, s, e, exceptBlock]);
      return [
        ...bk.map((x) => `${hm(Number(x.start_min))}〜${hm(Number(x.end_min))} ${x.name} 様の予約`),
        ...bl.map((x) => `${hm(Number(x.start_min))}〜${hm(Number(x.end_min))} のブロック${x.note ? `（${x.note}）` : ""}`),
      ].join("、");
    };
    if (b.adminBook && typeof b.adminBook === "object") {
      const x = b.adminBook as Record<string, unknown>;
      const c = COURSES.find((k) => k.id === x.cid);
      const visit = x.visit === "repeat" ? "repeat" : "first";
      const name = typeof x.name === "string" ? x.name.trim().slice(0, 40) : "";
      const tel = typeof x.tel === "string" ? x.tel.replace(/[０-９]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0xfee0)).replace(/[^\d+]/g, "") : "";
      const mail = typeof x.mail === "string" ? x.mail.trim().slice(0, 120) : "";
      const memo = typeof x.memo === "string" ? x.memo.trim().slice(0, 400) : "";
      if (!c || !isDate(x.date) || !isMin(x.start)) return NextResponse.json({ error: "日付・時間・コースを確認してください。" }, { status: 400 });
      if (!name) return NextResponse.json({ error: "お名前を入れてください。" }, { status: 400 });
      if (tel && !/^(\+?81|0)\d{9,10}$/.test(tel)) return NextResponse.json({ error: "電話番号を確認してください（例：09012345678）。" }, { status: 400 });
      if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return NextResponse.json({ error: "メールアドレスの形を確認してください。" }, { status: 400 });
      const start = x.start as number, end = start + c.min;
      if (!x.force) {
        const ov = await overlap(x.date, start, end, null, null, true);
        if (ov) return NextResponse.json({ error: `${ov}と重なります（施術間の余白15分を含む）。それでも入れますか？`, code: "overlap" }, { status: 409 });
      }
      const p = price(c, visit, "onsite", Math.max(0, daysBetween(jstNow().date, x.date)));
      const total = Number.isInteger(x.total) && (x.total as number) >= 0 ? (x.total as number) : p.total;
      const id = crypto.randomBytes(9).toString("base64url");
      await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS notified_at timestamptz`);
      await sql(
        `INSERT INTO bookings (id, date, start_min, end_min, course, visit, pay, base, discount, total, name, tel, mail, memo, answers, status, token, source, notified_at)
         VALUES ($1, $2, $3, $4, $5, $6, 'onsite', $7, $8, $9, $10, $11, $12, $13, '{}', 'confirmed', $14, '電話・店頭（管理画面から）', CASE WHEN $15 = 'true' THEN NULL ELSE now() END)`,
        [id, x.date, start, end, c.id, visit, p.base, Math.max(0, p.base - total), total, name, tel || null, mail || null, memo || null,
         crypto.randomBytes(18).toString("base64url"), mail && x.sendMail ? "true" : "false"],
      );
      if (mail && x.sendMail) await notifyConfirmed(id, new URL(req.url).origin, { customerOnly: true });
      return NextResponse.json({ ok: true, id, total });
    }
    if (b.adminMove && typeof b.adminMove === "object") {
      const x = b.adminMove as Record<string, unknown>;
      if (typeof x.id !== "string" || !isDate(x.date) || !isMin(x.start)) return NextResponse.json({ error: "日付と時間を確認してください。" }, { status: 400 });
      const r = (await sql(`SELECT * FROM bookings WHERE id = $1 AND status IN ('confirmed','pending')`, [x.id]))[0];
      if (!r) return NextResponse.json({ error: "予約が見つかりません。" }, { status: 404 });
      const paidCard = r.pay === "card";
      const c = COURSES.find((k) => k.id === (x.cid || r.course)) || COURSES[0];
      if (paidCard && c.id !== r.course) return NextResponse.json({ error: "事前決済の予約はコースを変えられません。いったんキャンセル（返金）してから入れ直してください。" }, { status: 400 });
      const visit = paidCard ? r.visit : x.visit === "repeat" || x.visit === "first" ? x.visit : r.visit;
      const start = x.start as number, end = start + c.min;
      if (!x.force) {
        const ov = await overlap(x.date, start, end, r.id, null, true);
        if (ov) return NextResponse.json({ error: `${ov}と重なります（施術間の余白15分を含む）。それでも変更しますか？`, code: "overlap" }, { status: 409 });
      }
      const total = paidCard ? Number(r.total) : Number.isInteger(x.total) && (x.total as number) >= 0 ? (x.total as number) : Number(r.total);
      const before = `${fmtDate(r.date!)} ${hm(Number(r.start_min))}〜${hm(Number(r.end_min))}`;
      const moved = r.date !== x.date || Number(r.start_min) !== start || Number(r.end_min) !== end;
      await sql(
        `UPDATE bookings SET date = $2, start_min = $3, end_min = $4, course = $5, visit = $6, total = $7, discount = GREATEST(0, base - $7),
           reminded_at = CASE WHEN $8 = 'true' THEN NULL ELSE reminded_at END WHERE id = $1`,
        [r.id, x.date, start, end, c.id, visit, total, moved ? "true" : "false"]);
      if (moved && r.mail && x.sendMail) await notifyChange(r.id!, new URL(req.url).origin, "change", before, 0, "shop");
      return NextResponse.json({ ok: true, mailed: !!(moved && r.mail && x.sendMail) });
    }
    if (b.editBlock && typeof b.editBlock === "object") {
      const x = b.editBlock as Record<string, unknown>;
      const s = Number(x.s), e = Number(x.e);
      if (!Number.isInteger(x.id) || !isDate(x.date) || !isMin(s) || !isMin(e) || e <= s) return NextResponse.json({ error: "日付と時間を確認してください（終わりは始まりより後に）。" }, { status: 400 });
      await sql(`UPDATE time_blocks SET date = $2, start_min = $3, end_min = $4, note = $5 WHERE id = $1`, [x.id, x.date, s, e, typeof x.note === "string" ? x.note.slice(0, 40) : null]);
      return NextResponse.json({ ok: true });
    }
    if (typeof b.unsettle === "string" && /^[A-Za-z0-9_-]{6,30}$/.test(b.unsettle)) {
      await sql(`UPDATE bookings SET settled_at = NULL, paid_amount = NULL, paid_method = NULL WHERE id = $1`, [b.unsettle]);
      return NextResponse.json({ ok: true });
    }
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
