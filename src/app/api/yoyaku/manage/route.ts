import { NextResponse } from "next/server";
import {
  ACTIVE, blocksFor, COURSES, daysBetween, MAX_SELF_CANCELS, selfCancelCount, ensureTables, fmtDate, hm, jstNow, kindsFor, MAX_CHANGES, price, selfServiceOk, slotOk, sql, stripe,
} from "@/lib/yoyaku";
import { getSetting, notifyChange } from "@/lib/notify";

export const dynamic = "force-dynamic";

// お客様が専用リンクから、予約の確認・日時の変更・キャンセルをする
type Row = Record<string, string | null>;

async function find(token: unknown) {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{20,40}$/.test(token)) return null;
  await ensureTables();
  const rows = await sql<Row>(`SELECT * FROM bookings WHERE token = $1`, [token]);
  return rows[0] || null;
}

function view(r: Row, cancels = 0) {
  const c = COURSES.find((x) => x.id === r.course)!;
  const date = r.date!;
  const open = r.status === "confirmed" && selfServiceOk(date);
  return {
    name: r.name,
    no: String(r.id).slice(0, 6).toUpperCase(),
    status: r.status,
    date,
    s: Number(r.start_min),
    e: Number(r.end_min),
    when: `${fmtDate(date)} ${hm(Number(r.start_min))}〜${hm(Number(r.end_min))}`,
    cid: c.id,
    min: c.min,
    visit: r.visit,
    pay: r.pay,
    total: Number(r.total),
    paid: r.pay === "card" && !!r.paid_at,
    changesLeft: Math.max(0, MAX_CHANGES - Number(r.change_count || 0)),
    canChange: open && Number(r.change_count || 0) < MAX_CHANGES,
    canCancel: open && cancels < MAX_SELF_CANCELS,
    cancelLimited: open && cancels >= MAX_SELF_CANCELS,
    cancelsLeft: Math.max(0, MAX_SELF_CANCELS - cancels),
  };
}

async function refund(r: Row, amount: number) {
  if (!r.stripe_session || amount <= 0) return 0;
  const s = await stripe("checkout/sessions/" + r.stripe_session, "GET");
  if (!s.payment_intent) return 0;
  await stripe("refunds", "POST", { payment_intent: String(s.payment_intent), amount: String(amount), "metadata[booking_id]": String(r.id) });
  return amount;
}

export async function GET(req: Request) {
  try {
    const r = await find(new URL(req.url).searchParams.get("t"));
    if (!r) return NextResponse.json({ error: "ご予約が見つかりません。リンクをもう一度ご確認ください。" }, { status: 404 });
    return NextResponse.json({ booking: view(r, await selfCancelCount(r.tel, r.mail)) });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "読み込めませんでした。" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: "送信内容を読み取れませんでした。" }, { status: 400 }); }
  try {
    const r = await find(b.t);
    if (!r) return NextResponse.json({ error: "ご予約が見つかりません。" }, { status: 404 });
    const v = view(r, await selfCancelCount(r.tel, r.mail));
    const origin = new URL(req.url).origin;
    const late = "前日の23:59を過ぎたため、ここからは変更・キャンセルできません。メール（fukusuke@itakimo.net）かInstagram DMでご連絡ください。";

    if (b.action === "cancel") {
      if (!v.canCancel) return NextResponse.json({ error: r.status === "cancelled" ? "このご予約はキャンセル済みです。" : v.cancelLimited ? `ご自分でのキャンセルは、直近3か月で${MAX_SELF_CANCELS}回までです。お手数ですが、メールかInstagram DMでご連絡ください。` : late }, { status: 409 });
      const done = await sql(`UPDATE bookings SET status = 'cancelled', cancelled_by = 'customer', cancelled_at = now() WHERE id = $1 AND status = 'confirmed' RETURNING id`, [r.id]);
      if (!done.length) return NextResponse.json({ error: "このご予約はキャンセル済みです。" }, { status: 409 });
      let refunded = 0;
      if (r.pay === "card" && r.paid_at) {
        try { refunded = await refund(r, Number(r.total)); } catch (e) { console.error("refund failed", e); }
      }
      await notifyChange(r.id!, origin, "cancel", v.when, refunded);
      return NextResponse.json({ ok: true, refunded, refundFailed: r.pay === "card" && !!r.paid_at && !refunded });
    }

    if (b.action === "change") {
      if (!v.canChange) return NextResponse.json({ error: v.changesLeft === 0 ? `ご自分での変更は${MAX_CHANGES}回までです。メールかInstagram DMでご連絡ください。` : late }, { status: 409 });
      const date = typeof b.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(b.date) ? b.date : null;
      const start = Number.isInteger(b.time) ? (b.time as number) : NaN;
      if (!date || Number.isNaN(start)) return NextResponse.json({ error: "日時を選んでください。" }, { status: 400 });
      if (date === r.date && start === v.s) return NextResponse.json({ error: "今と同じ日時です。" }, { status: 400 });

      const c = COURSES.find((x) => x.id === r.course)!;
      const now = jstNow();
      const ahead = daysBetween(now.date, date);
      const pub = await getSetting("published_until");
      const kind = pub && date > pub ? "closed" : (await kindsFor(date, date))(date);
      const others = await sql<{ start_min: string; end_min: string }>(
        `SELECT start_min, end_min FROM bookings WHERE date = $1 AND id <> $2 AND ${ACTIVE}`, [date, r.id],
      );
      const booked = [...others.map((o) => ({ s: Number(o.start_min), e: Number(o.end_min), blk: false })), ...(await blocksFor(date, date))];
      if (!slotOk(kind, c, start, booked, ahead, now.min)) {
        return NextResponse.json({ error: "この時間はご予約いただけません。別の時間をお選びください。", code: "taken" }, { status: 409 });
      }
      const p = price(c, r.visit as "first" | "repeat", r.pay as "onsite" | "card", ahead);
      const paidCard = r.pay === "card" && !!r.paid_at;
      if (paidCard && p.total > v.total) {
        return NextResponse.json({ error: `この日時に変更すると、お支払い済みの金額（¥${v.total.toLocaleString()}）より高くなります（¥${p.total.toLocaleString()}）。お手数ですが、一度キャンセルしてから、改めてご予約ください（同じ日のうちに取り直せば、キャンセルの回数には数えません）。`, code: "price" }, { status: 409 });
      }
      if (b.confirm !== true) {
        return NextResponse.json({ ok: true, preview: { when: `${fmtDate(date)} ${hm(start)}〜${hm(start + c.min)}`, total: p.total, before: v.total, refund: paidCard ? v.total - p.total : 0 } });
      }
      const end = start + c.min;
      const night = kind === "night";
      const updated = await sql(
        `UPDATE bookings SET date = $2, start_min = $3, end_min = $4, base = $5, discount = $6, total = $7, change_count = change_count + 1, reminded_at = NULL
         WHERE id = $1 AND status = 'confirmed' AND change_count < ${MAX_CHANGES}
         AND NOT EXISTS (SELECT 1 FROM bookings o WHERE o.date = $2 AND o.id <> $1 AND (o.status = 'confirmed' OR (o.status = 'pending' AND o.hold_until > now()))
           AND ($8 = 'true' OR ($3::int < o.end_min + 15 AND o.start_min < $4::int + 15)))
         RETURNING id`,
        [r.id, date, start, end, p.base, p.off, paidCard ? p.total : p.total, night ? "true" : "false"],
      );
      if (!updated.length) return NextResponse.json({ error: "この時間はご予約いただけなくなりました。別の時間をお選びください。", code: "taken" }, { status: 409 });
      let refunded = 0;
      if (paidCard && v.total > p.total) {
        try { refunded = await refund(r, v.total - p.total); } catch (e) { console.error("refund failed", e); }
      }
      await notifyChange(r.id!, origin, "change", v.when, refunded);
      const after = await find(b.t);
      return NextResponse.json({ ok: true, booking: after ? view(after, await selfCancelCount(after.tel, after.mail)) : null, refunded });
    }

    return NextResponse.json({ error: "内容が正しくありません。" }, { status: 400 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "うまく処理できませんでした。時間をおいてもう一度お試しください。" }, { status: 500 });
  }
}
