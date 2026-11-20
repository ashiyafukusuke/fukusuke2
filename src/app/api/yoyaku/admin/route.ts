import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { addDays, defaultKind, ensureTables, HORIZON, jstNow, kindsFor, sql } from "@/lib/yoyaku";

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
    return NextResponse.json({ today: now.date, days, bookings });
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
    if (typeof b.cancel === "string" && /^[A-Za-z0-9_-]{6,30}$/.test(b.cancel)) {
      await sql(`UPDATE bookings SET status = 'cancelled' WHERE id = $1`, [b.cancel]);
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "内容が正しくありません。" }, { status: 400 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "保存できませんでした。" }, { status: 500 });
  }
}
