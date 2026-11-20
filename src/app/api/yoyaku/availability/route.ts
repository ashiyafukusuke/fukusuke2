import { NextResponse } from "next/server";
import { addDays, bookedFor, ensureTables, HORIZON, jstNow, kindsFor } from "@/lib/yoyaku";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await ensureTables();
    const now = jstNow();
    const to = addDays(now.date, HORIZON);
    const kindOf = await kindsFor(now.date, to);
    const days: Record<string, string> = {};
    for (let i = 0; i <= HORIZON; i++) {
      const d = addDays(now.date, i);
      const k = kindOf(d);
      if (k !== "closed") days[d] = k;
    }
    const booked = await bookedFor(now.date, to);
    return NextResponse.json({ today: now.date, nowMin: now.min, days, booked });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "空き状況を読み込めませんでした。" }, { status: 500 });
  }
}
