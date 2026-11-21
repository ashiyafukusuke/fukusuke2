import { NextResponse } from "next/server";
import { getSetting, notifyConfirmed } from "@/lib/notify";
import crypto from "node:crypto";
import {
  ACTIVE, COURSES, daysBetween, ensureTables, fmtDate, hm, jstNow, kindsFor, price, slotOk, sql, stripe, bookedFor,
} from "@/lib/yoyaku";

export const dynamic = "force-dynamic";

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "送信内容を読み取れませんでした。" }, { status: 400 });
  }

  const c = COURSES.find((x) => x.id === b.cid);
  const visit = b.visit === "first" || b.visit === "repeat" ? b.visit : null;
  const pay = b.pay === "card" || b.pay === "onsite" ? b.pay : null;
  const date = typeof b.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(b.date) ? b.date : null;
  const start = Number.isInteger(b.time) ? (b.time as number) : NaN;
  const name = str(b.name, 40);
  const tel = str(b.tel, 20).replace(/[０-９]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 0xfee0)).replace(/[^\d+]/g, "");
  const mail = str(b.mail, 120);
  const memo = str(b.memo, 400);
  const q = (b.q && typeof b.q === "object" ? b.q : {}) as Record<string, unknown>;
  const answers = {
    first: str(q.first, 40),
    hurt: str(q.hurt, 40),
    stay: str(q.stay, 40),
  };

  if (!c || !visit || !pay || !date || Number.isNaN(start)) return NextResponse.json({ error: "ご予約の内容が足りません。" }, { status: 400 });
  if (!name) return NextResponse.json({ error: "ご予約名を入力してください。" }, { status: 400 });
  if (!tel && !mail) return NextResponse.json({ error: "電話番号かメールアドレスのどちらかを入力してください。" }, { status: 400 });
  if (mail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) return NextResponse.json({ error: "メールアドレスの形を確認してください。" }, { status: 400 });
  if (visit === "first" && (!answers.first || !answers.hurt)) return NextResponse.json({ error: "必須のご質問にお答えください。" }, { status: 400 });
  if (b.agree !== true) return NextResponse.json({ error: "「ご予約の前に」の確認にチェックを入れてください。" }, { status: 400 });

  try {
    await ensureTables();
    const now = jstNow();
    const ahead = daysBetween(now.date, date);
    const pub = await getSetting("published_until");
    const kind = pub && date > pub ? "closed" : (await kindsFor(date, date))(date);
    const booked = (await bookedFor(date, date)).map(({ s, e }) => ({ s, e }));
    if (!slotOk(kind, c, start, booked, ahead, now.min)) {
      return NextResponse.json({ error: "この時間はご予約いただけなくなりました。別の時間をお選びください。", code: "taken" }, { status: 409 });
    }

    const p = price(c, visit, pay, ahead);
    const id = crypto.randomBytes(9).toString("base64url");
    const token = crypto.randomBytes(18).toString("base64url");
    const end = start + c.min;
    const status = pay === "card" ? "pending" : "confirmed";

    // 同時に同じ枠が押された場合に備え、入れる直前にもう一度重なりを確かめる
    const night = kind === "night";
    const inserted = await sql<{ id: string }>(
      `INSERT INTO bookings (id, date, start_min, end_min, course, visit, pay, base, discount, total, name, tel, mail, memo, answers, status, hold_until, token)
       SELECT $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, CASE WHEN $16 = 'pending' THEN now() + interval '35 minutes' ELSE NULL END, $18
       WHERE NOT EXISTS (
         SELECT 1 FROM bookings WHERE date = $2 AND ${ACTIVE}
         AND ($17 = 'true' OR ($3::int < end_min + 15 AND start_min < $4::int + 15))
       )
       RETURNING id`,
      [id, date, start, end, c.id, visit, pay, p.base, p.off, p.total, name, tel || null, mail || null, memo || null, answers, status, night ? "true" : "false", token],
    );
    if (!inserted.length) {
      return NextResponse.json({ error: "この時間はご予約いただけなくなりました。別の時間をお選びください。", code: "taken" }, { status: 409 });
    }

    const summary = {
      id,
      name,
      when: `${fmtDate(date)} ${hm(start)}〜${hm(end)}`,
      course: `${c.min}分（${visit === "first" ? "はじめて" : "2回目以降"}）`,
      pay: pay === "card" ? "事前決済" : "当日、お店で",
      paid: false,
      total: p.total,
      mail: !!mail,
      manage: `/yoyaku?m=${token}`,
    };

    const origin = new URL(req.url).origin;
    if (pay === "onsite") {
      await notifyConfirmed(id, origin);
      return NextResponse.json({ ok: true, booking: summary });
    }
    try {
      const form: Record<string, string> = {
        mode: "payment",
        "line_items[0][quantity]": "1",
        "line_items[0][price_data][currency]": "jpy",
        "line_items[0][price_data][unit_amount]": String(p.total),
        "line_items[0][price_data][product_data][name]": `足つぼ ${c.min}分コース`,
        "line_items[0][price_data][product_data][description]": `${fmtDate(date)} ${hm(start)}〜${hm(end)}`,
        success_url: `${origin}/yoyaku?paid={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/yoyaku?canceled=${id}`,
        expires_at: String(Math.floor(Date.now() / 1000) + 31 * 60),
        "metadata[booking_id]": id,
        client_reference_id: id,
        locale: "ja",
      };
      if (mail) form.customer_email = mail;
      const s = await stripe("checkout/sessions", "POST", form);
      await sql(`UPDATE bookings SET stripe_session = $1 WHERE id = $2`, [s.id, id]);
      return NextResponse.json({ ok: true, checkoutUrl: s.url });
    } catch (e) {
      await sql(`UPDATE bookings SET status = 'cancelled' WHERE id = $1`, [id]);
      throw e;
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "ご予約を受け付けられませんでした。時間をおいてもう一度お試しください。" }, { status: 500 });
  }
}
