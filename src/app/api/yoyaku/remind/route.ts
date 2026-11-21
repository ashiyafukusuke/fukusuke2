import { NextResponse } from "next/server";
import { addDays, ensureTables, jstNow, sql } from "@/lib/yoyaku";
import { sendReminder } from "@/lib/notify";

export const dynamic = "force-dynamic";

// 毎日夕方に Vercel の定期実行から呼ばれ、翌日のご予約の方へリマインドメールを送る（1件につき1回だけ）
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
    for (const r of rows) await sendReminder(r.id);
    return NextResponse.json({ ok: true, sent: rows.length });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
