// 予約が確定したときの連絡：お客様への確認メール・店主へのメール・店主のスマホ通知（ntfy）
import { fmtDate, hm, sql } from "@/lib/yoyaku";

const OWNER = "fukusuke@itakimo.net";
// 店主への予約メールの送り先（届かなかったときの控えに Gmail にも送る）
const OWNER_TO = [OWNER, "snapcall.odds@gmail.com"];
const FROM = "足つぼ専門店 イタキモ <yoyaku@itakimo.net>";
const ADDRESS = "西東京市ひばりが丘 HIBARIDO 2F R-09";

type Row = Record<string, string | null>;

async function withTimeout<T>(p: Promise<T>, ms = 8000): Promise<T | null> {
  return Promise.race([p, new Promise<null>((r) => setTimeout(() => r(null), ms))]);
}

async function sendMail(to: string | string[], subject: string, text: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: Array.isArray(to) ? to : [to], reply_to: OWNER, subject, text }),
  });
  if (!res.ok) console.error("mail error", res.status, await res.text());
  return res.ok;
}

export async function getSetting(key: string) {
  await sql(`CREATE TABLE IF NOT EXISTS settings (key text PRIMARY KEY, value text)`);
  const r = await sql<{ value: string }>(`SELECT value FROM settings WHERE key = $1`, [key]);
  return r[0]?.value || "";
}
export async function setSetting(key: string, value: string) {
  await sql(`CREATE TABLE IF NOT EXISTS settings (key text PRIMARY KEY, value text)`);
  await sql(`INSERT INTO settings (key, value) VALUES ($1, $2) ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`, [key, value]);
}

export async function push(topic: string, title: string, message: string, click?: string) {
  if (!/^[A-Za-z0-9_-]{8,64}$/.test(topic)) return false;
  const res = await fetch("https://ntfy.sh/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, title, message, tags: ["foot"], priority: 4, ...(click ? { click } : {}) }),
  });
  if (!res.ok) console.error("ntfy error", res.status, await res.text());
  return res.ok;
}

function details(r: Row) {
  const min = r.course === "c90" ? 90 : 60;
  return {
    when: `${fmtDate(r.date!)} ${hm(Number(r.start_min))}〜${hm(Number(r.end_min))}`,
    short: `${fmtDate(r.date!)} ${hm(Number(r.start_min))}`,
    course: `${min}分コース（${r.visit === "first" ? "はじめて" : "2回目以降"}）`,
    min,
    pay: r.pay === "card" ? "事前決済（お支払い済み）" : "当日、お店でお支払い",
    total: `¥${Number(r.total).toLocaleString("ja-JP")}`,
    no: String(r.id || "").slice(0, 6).toUpperCase(),
  };
}

// 確定した予約について、まだ連絡していなければ一度だけ連絡する
export async function notifyConfirmed(id: string, origin: string) {
  try {
    await sql(`ALTER TABLE bookings ADD COLUMN IF NOT EXISTS notified_at timestamptz`);
    const rows = await sql<Row>(
      `UPDATE bookings SET notified_at = now() WHERE id = $1 AND status = 'confirmed' AND notified_at IS NULL RETURNING *`,
      [id],
    );
    const r = rows[0];
    if (!r) return;
    const d = details(r);
    const tasks: Promise<unknown>[] = [];

    if (r.mail) {
      const first = r.visit === "first";
      const text = [
        `${r.name} 様`,
        ``,
        `足つぼ専門店イタキモです。ご予約ありがとうございます。`,
        `以下の内容で承りました。`,
        ``,
        `予約番号：${d.no}`,
        `日時：${d.when}`,
        `コース：${d.course}`,
        first ? `左足トライアル：対象（片足で合わないと感じたら、そこで終了します。お代は頂きません）` : null,
        `お支払い：${d.pay}`,
        `金額：${d.total}`,
        ``,
        `場所：${ADDRESS}`,
        `到着は5分前ごろを目安にお越しください。`,
        ``,
        `■ ご予約の前に`,
        `・遅れても、終了時間は変わりません。`,
        `・キャンセル料は頂きません。無断キャンセルの方からは、以降のご予約をお受けしていません。`,
        `・変更・キャンセルは、このメールへの返信、Instagram DM、サイトのお問い合わせフォームからご連絡ください。`,
        ``,
        `当日お会いできるのを楽しみにしています。`,
        ``,
        `足つぼ専門店 イタキモ　福助`,
        `https://www.itakimo.net/`,
      ].filter((l) => l !== null).join("\n");
      tasks.push(sendMail(r.mail, `【イタキモ】ご予約を承りました（${d.short}）`, text));
    }

    let answers: Record<string, string> = {};
    try { answers = JSON.parse(r.answers || "{}"); } catch {}
    const ownerText = [
      `新しいご予約が入りました。`,
      ``,
      `予約番号：${d.no}`,
      `日時：${d.when}`,
      `コース：${d.course}`,
      `お支払い：${d.pay}　${d.total}`,
      `ご予約名：${r.name} 様`,
      `電話：${r.tel || "なし"}`,
      `メール：${r.mail || "なし"}`,
      answers.first ? `足つぼ専門店は初めて：${answers.first}` : null,
      answers.hurt ? `けが・痛み・腫れ：${answers.hurt}` : null,
      answers.stay ? `過ごし方：${answers.stay}` : null,
      r.memo ? `気になっていること：${r.memo}` : null,
      ``,
      `管理画面：${origin}/yoyaku/admin`,
    ].filter((l) => l !== null).join("\n");
    tasks.push(sendMail(OWNER_TO, `【予約】${d.short} ${d.min}分 ${r.name} 様`, ownerText));

    const topic = await getSetting("ntfy_topic");
    if (topic) tasks.push(push(topic, "イタキモ 予約が入りました", `${d.short}　${d.min}分　${r.pay === "card" ? "事前決済" : "当日払い"}`, `${origin}/yoyaku/admin`));

    await withTimeout(Promise.allSettled(tasks));
  } catch (e) {
    console.error("notify error", e);
  }
}
