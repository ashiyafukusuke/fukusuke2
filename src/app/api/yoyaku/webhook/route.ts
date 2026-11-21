import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { ensureTables, sql } from "@/lib/yoyaku";
import { notifyConfirmed } from "@/lib/notify";

export const dynamic = "force-dynamic";

// Stripe からの決済通知。決済後にお客様が画面を閉じても、ここで予約を確定する
function verify(payload: string, header: string, secret: string) {
  const parts = Object.fromEntries(header.split(",").map((p) => p.split("=") as [string, string]));
  const t = parts.t;
  const sigs = header.split(",").filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  if (!t || !sigs.length) return false;
  if (Math.abs(Date.now() / 1000 - Number(t)) > 600) return false;
  const expected = crypto.createHmac("sha256", secret).update(`${t}.${payload}`).digest("hex");
  return sigs.some((s) => s.length === expected.length && crypto.timingSafeEqual(Buffer.from(s), Buffer.from(expected)));
}

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: "not configured" }, { status: 500 });
  const payload = await req.text();
  if (!verify(payload, req.headers.get("stripe-signature") || "", secret)) {
    return NextResponse.json({ error: "bad signature" }, { status: 400 });
  }
  try {
    const ev = JSON.parse(payload);
    const s = ev?.data?.object;
    const id: string | undefined = s?.metadata?.booking_id;
    if (!id || typeof s?.id !== "string") return NextResponse.json({ ok: true });
    await ensureTables();
    if ((ev.type === "checkout.session.completed" || ev.type === "checkout.session.async_payment_succeeded") && s.payment_status === "paid") {
      await sql(
        `UPDATE bookings SET status = 'confirmed', paid_at = COALESCE(paid_at, now()), hold_until = NULL WHERE id = $1 AND stripe_session = $2 AND status IN ('pending','confirmed')`,
        [id, s.id],
      );
      await notifyConfirmed(id, new URL(req.url).origin);
    } else if (ev.type === "checkout.session.expired" || ev.type === "checkout.session.async_payment_failed") {
      await sql(`UPDATE bookings SET status = 'cancelled' WHERE id = $1 AND stripe_session = $2 AND status = 'pending'`, [id, s.id]);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "failed" }, { status: 500 });
  }
}
