// 予約が確定したときの連絡：お客様への確認メール・店主へのメール・店主のスマホ通知（ntfy）
import { fmtDate, hm, manageUrl, MAX_CHANGES, site, sql } from "@/lib/yoyaku";

const OWNER = "fukusuke@itakimo.net";
// 店主への予約メールの送り先（届かなかったときの控えに Gmail にも送る）
const OWNER_TO = [OWNER, "snapcall.odds@gmail.com"];
const FROM = "足つぼ専門店 イタキモ <yoyaku@itakimo.net>";
const ADDRESS = "〒202-0001 東京都西東京市ひばりが丘3丁目2-51 HIBARIDO 2F R-09";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("東京都西東京市ひばりが丘3丁目2-51 HIBARIDO");
const ROUTE_VIDEO = "https://www.itakimo.net/videos/access-route.mp4";
const SHOP_TEL = "080-6264-6460";
// 場所の案内（住所・地図・建物の中の道順）
const PLACE = [
  `場所：${ADDRESS}`,
  `地図：${MAP_URL}`,
  ``,
  `■ お店までの道順`,
  `当店は「HIBARIDO」という施設の2階にある小さなサロンです。看板やウインドウサインは出していないため、初めての方は少しわかりにくいかもしれません。以下の順でお越しください。`,
  `・HIBARIDOの入り口から入り、右手奥の階段で2階へ`,
  `・2階の入り口ドアを入って右側のお部屋（R-09）がイタキモです`,
  `入り口からの道順の動画（約25秒）：${ROUTE_VIDEO}`,
  `場所がわかりにくい場合は、遠慮なくお電話ください（${SHOP_TEL}）。`,
  `お手洗いは、HIBARIDO 1階の共用トイレをご利用ください。`,
];

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
        ...PLACE,
        ``,
        `到着は5分前ごろを目安にお越しください。`,
        ``,
        `■ ご予約について`,
        `・遅れても、終了時間は変わりません。`,
        `・キャンセル料は頂きません。無断キャンセルの方からは、以降のご予約をお受けしていません。`,
        `・前日の23:59までは、下のリンクからご自分で日時の変更（${MAX_CHANGES}回まで）とキャンセルができます。`,
        `　${manageUrl(origin, r.token)}`,
        `・コース（60分・90分）を変えたい場合は、一度キャンセルしてから、改めてご予約ください。同じ日のうちに取り直せば、キャンセルの回数には数えません。`,
        `・当日の変更・キャンセルは、このメールへの返信、Instagram DM、サイトのお問い合わせフォームからご連絡ください。`,
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
      `管理画面：${site(origin)}/yoyaku/admin`,
    ].filter((l) => l !== null).join("\n");
    tasks.push(sendMail(OWNER_TO, `【予約】${d.short} ${d.min}分 ${r.name} 様`, ownerText));

    const topic = await getSetting("ntfy_topic");
    if (topic) tasks.push(push(topic, "イタキモ 予約が入りました", `${d.short}　${d.min}分　${r.pay === "card" ? "事前決済" : "当日払い"}`, `${site(origin)}/yoyaku/admin`));

    await withTimeout(Promise.allSettled(tasks));
  } catch (e) {
    console.error("notify error", e);
  }
}

// 前日のリマインドメール
export async function sendReminder(id: string, origin: string) {
  try {
    const rows = await sql<Row>(`SELECT * FROM bookings WHERE id = $1 AND status = 'confirmed'`, [id]);
    const r = rows[0];
    if (!r || !r.mail) return;
    const d = details(r);
    const text = [
      `${r.name} 様`,
      ``,
      `足つぼ専門店イタキモです。明日のご予約のご案内です。`,
      ``,
      `予約番号：${d.no}`,
      `日時：${d.when}`,
      `コース：${d.course}`,
      `お支払い：${d.pay}`,
      `金額：${d.total}`,
      ``,
      ...PLACE,
      ``,
      `到着は5分前ごろを目安にお越しください。遅れた場合も、終了時間は変わりません。`,
      ``,
      `本日23:59までは、こちらからご自分で変更・キャンセルができます。`,
      manageUrl(origin, r.token),
      `明日になってからは、このメールへの返信でお知らせください。キャンセル料は頂きません。`,
      ``,
      `足つぼ専門店 イタキモ　福助`,
      `https://www.itakimo.net/`,
    ].join("\n");
    await withTimeout(sendMail(r.mail, `【イタキモ】明日のご予約のご案内（${d.short}）`, text));
  } catch (e) {
    console.error("reminder error", e);
  }
}

// お客様が自分で変更・キャンセルしたときの連絡
export async function notifyChange(id: string, origin: string, kind: "change" | "cancel", before: string, refund: number) {
  try {
    const rows = await sql<Row>(`SELECT * FROM bookings WHERE id = $1`, [id]);
    const r = rows[0];
    if (!r) return;
    const d = details(r);
    const tasks: Promise<unknown>[] = [];
    const refundLine = refund > 0 ? `返金：¥${refund.toLocaleString("ja-JP")}（返金の手続きは済んでいます。カードの明細に表示されるまでは、カード会社側の処理で通常5〜10営業日ほどかかります）` : null;
    if (r.mail) {
      const text = (kind === "change"
        ? [`${r.name} 様`, ``, `足つぼ専門店イタキモです。ご予約の日時を変更しました。`, ``, `予約番号：${d.no}`, `変更前：${before}`, `変更後：${d.when}`, `コース：${d.course}`, `お支払い：${d.pay}`, `金額：${d.total}`, refundLine,
           ``, ...PLACE, ``, `到着は5分前ごろを目安にお越しください。`, ``, `変更・キャンセル：${manageUrl(origin, r.token)}`, ``, `足つぼ専門店 イタキモ　福助`]
        : [`${r.name} 様`, ``, `足つぼ専門店イタキモです。ご予約のキャンセルを承りました。`, ``, `予約番号：${d.no}`, `日時：${before}`, refundLine, ``, `またのご予約をお待ちしています。`, ``, `足つぼ専門店 イタキモ　福助`, `https://www.itakimo.net/`]
      ).filter((l) => l !== null).join("\n");
      tasks.push(sendMail(r.mail, kind === "change" ? `【イタキモ】ご予約の日時を変更しました（${d.short}）` : `【イタキモ】ご予約のキャンセルを承りました`, text));
    }
    const ownerText = [
      kind === "change" ? `お客様がご予約の日時を変更しました。` : `お客様がご予約をキャンセルしました。`,
      ``,
      `ご予約名：${r.name} 様（予約番号 ${d.no}）`,
      kind === "change" ? `変更前：${before}` : `日時：${before}`,
      kind === "change" ? `変更後：${d.when}` : null,
      `コース：${d.course}`,
      kind === "change" ? `金額：${d.total}（${d.pay}）` : null,
      refundLine,
      kind === "change" ? `変更回数：${r.change_count}回目` : null,
      ``,
      `管理画面：${site(origin)}/yoyaku/admin`,
    ].filter((l) => l !== null).join("\n");
    tasks.push(sendMail(OWNER_TO, kind === "change" ? `【予約変更】${before} → ${d.short} ${r.name} 様` : `【キャンセル】${before} ${r.name} 様`, ownerText));
    const topic = await getSetting("ntfy_topic");
    if (topic) tasks.push(push(topic, kind === "change" ? "イタキモ 予約の変更" : "イタキモ キャンセル", kind === "change" ? `${before} → ${d.short}` : `${before}　${d.min}分`, `${site(origin)}/yoyaku/admin`));
    await withTimeout(Promise.allSettled(tasks));
  } catch (e) {
    console.error("notifyChange error", e);
  }
}

// Google クチコミを書けるページ（Googleビジネスプロフィールの「クチコミを依頼」のリンクに差し替え可）
const REVIEW_URL = "https://g.page/r/CaoAg3nozhsxEAE/review";

// 初めてご来店いただいた方へ、翌日に一度だけ送るお礼のメール
export async function sendThanks(id: string) {
  try {
    const rows = await sql<Row>(`SELECT * FROM bookings WHERE id = $1 AND status = 'confirmed'`, [id]);
    const r = rows[0];
    if (!r || !r.mail) return;
    const text = [
      `${r.name} 様`,
      ``,
      `足つぼ専門店イタキモの福助です。`,
      `昨日はご来店いただき、ありがとうございました。`,
      ``,
      `その後、足の具合はいかがでしょうか。気になることがあれば、このメールへの返信でいつでもお知らせください。`,
      ``,
      `ひとつだけ、ご案内させてください。`,
      `イタキモでは、「クチコミを書いてください」とお願いすることはしていません。書きたくないのに書くものではないと思っています。`,
      `ただ、もし感想を残してもいいと思っていただけたら、こちらから書いていただけます。`,
      REVIEW_URL,
      `クチコミでイタキモを知ってくださる方が増えれば、いずれ人を迎えて、営業日を増やすことにもつながります。`,
      ``,
      `このご案内は、初めてご来店いただいたあとに一度だけお送りしています。`,
      `またお会いできるのを楽しみにしています。`,
      ``,
      `足つぼ専門店 イタキモ　福助`,
      `https://www.itakimo.net/`,
    ].join("\n");
    await withTimeout(sendMail(r.mail, `【イタキモ】昨日はありがとうございました`, text));
  } catch (e) {
    console.error("thanks error", e);
  }
}
