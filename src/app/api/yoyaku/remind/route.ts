import { NextResponse } from "next/server";
import { addDays, ensureTables, jstNow, sql } from "@/lib/yoyaku";
import { sendReminder, sendThanks } from "@/lib/notify";

export const dynamic = "force-dynamic";

// 毎日夕方に Vercel の定期実行から呼ばれ、翌日のご予約の方へリマインドメールを送る（1件につき1回だけ）
// あわせて、前日に初めてご来店いただいた方へ、お礼のメールを一度だけ送る
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = req.headers.get("authorization") || "";
  const ua = req.headers.get("user-agent") || "";
  if (secret ? auth !== `Bearer ${secret}` : !ua.startsWith("vercel-cron")) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  try {
    await ensureTables();
    await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS reminded_at timestamptz`);
    const tomorrow = addDays(jstNow().date, 1);
    const rows = await sql<{ id: string }>(
      `UPDATE bookings SET reminded_at = now() WHERE date = $1 AND status = 'confirmed' AND mail IS NOT NULL AND reminded_at IS NULL RETURNING id`,
      [tomorrow],
    );
    const origin = new URL(req.url).origin;
    for (const r of rows) await sendReminder(r.id, origin);

    await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS thanked_at timestamptz`);
    const yesterday = addDays(jstNow().date, -1);
    const visited = await sql<{ id: string }>(
      `UPDATE bookings SET thanked_at = now() WHERE date = $1 AND status = 'confirmed' AND visit = 'first' AND mail IS NOT NULL AND thanked_at IS NULL RETURNING id`,
      [yesterday],
    );
    for (const r of visited) await sendThanks(r.id);
    // 2年より前のご予約は、電話番号だけを残して、お名前・メールアドレス・記入内容を消す
    // （電話番号は、2回目以降のご来店かどうかの確認のために残す）
    const old = await sql<{ id: string }>(
      `UPDATE bookings SET name = '（消去済み）', mail = NULL, memo = NULL, answers = NULL
       WHERE date < $1 AND (name <> '（消去済み）' OR mail IS NOT NULL OR memo IS NOT NULL OR answers IS NOT NULL) RETURNING id`,
      [addDays(jstNow().date, -730)],
    );
    // 2年以上ご来店のないお客様のメモも消す
    await sql(`DELETE FROM customer_notes n WHERE NOT EXISTS (SELECT 1 FROM bookings b WHERE b.tel = n.tel AND b.date >= $1)`, [addDays(jstNow().date, -730)]);
    return NextResponse.json({ ok: true, sent: rows.length, thanked: visited.length, erased: old.length });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
