import { NextResponse } from "next/server";
import { notifyConfirmed } from "@/lib/notify";
import { ensureTables, fmtDate, hm, sql, stripe } from "@/lib/yoyaku";

export const dynamic = "force-dynamic";

// 決済画面から戻ってきたときに、Stripe に支払い状況を問い合わせて予約を確定する
export async function GET(req: Request) {
  const sid = new URL(req.url).searchParams.get("session_id") || "";
  if (!/^cs_[A-Za-z0-9_]+$/.test(sid)) return NextResponse.json({ error: "決済の情報が見つかりません。" }, { status: 400 });
  try {
    await ensureTables();
    const s = await stripe("checkout/sessions/" + sid, "GET");
    const id = s?.metadata?.booking_id;
    if (!id) return NextResponse.json({ error: "決済の情報が見つかりません。" }, { status: 404 });
    if (s.payment_status === "paid") {
      await sql(`UPDATE bookings SET status = 'confirmed', paid_at = COALESCE(paid_at, now()), hold_until = NULL WHERE id = $1 AND stripe_session = $2 AND status IN ('pending','confirmed')`, [id, sid]);
      await notifyConfirmed(id, new URL(req.url).origin);
    }
    const rows = await sql(`SELECT * FROM bookings WHERE id = $1 AND stripe_session = $2`, [id, sid]);
    const r = rows[0];
    if (!r) return NextResponse.json({ error: "ご予約が見つかりません。" }, { status: 404 });
    const min = r.course === "c90" ? 90 : 60;
    return NextResponse.json({
      ok: r.status === "confirmed",
      status: r.status,
      booking: {
        id: r.id,
        name: r.name,
        when: `${fmtDate(r.date!)} ${hm(Number(r.start_min))}〜${hm(Number(r.end_min))}`,
        course: `${min}分（${r.visit === "first" ? "はじめて" : "2回目以降"}）`,
        pay: "事前決済",
        paid: r.status === "confirmed",
        total: Number(r.total),
        mail: !!r.mail,
        date: r.date, start: Number(r.start_min), end: Number(r.end_min),
        manage: r.token ? `/yoyaku?m=${r.token}` : "",
      },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "お支払いの確認ができませんでした。" }, { status: 500 });
  }
}
