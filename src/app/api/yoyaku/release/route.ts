import { NextResponse } from "next/server";
import { ensureTables, sql } from "@/lib/yoyaku";

export const dynamic = "force-dynamic";

// 決済画面で「戻る」を押した人の仮押さえを外す
export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    if (typeof id !== "string" || !/^[A-Za-z0-9_-]{6,30}$/.test(id)) return NextResponse.json({ ok: false }, { status: 400 });
    await ensureTables();
    await sql(`UPDATE bookings SET status = 'cancelled' WHERE id = $1 AND status = 'pending'`, [id]);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
