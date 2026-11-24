// 週ごとの営業日告知（画像＋投稿文）を src/data/calendar.ts から作る
// 使い方: node scripts/weekly-post.mjs [週の月曜 YYYY-MM-DD]
//   省略時は「次の月曜」（日本時間）。出力は scripts/out/ に。
//   画像: week-YYYYMMDD.png（1080x1350, Instagram縦）／ week-YYYYMMDD-gbp.png（1200x900, GBP用）
//   文面: week-YYYYMMDD.txt（GBP投稿・Instagramキャプション・当日ストーリー）
import { createRequire } from "node:module";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { months } from "../src/data/calendar.ts";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "out");
mkdirSync(outDir, { recursive: true });

const RESERVE = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011";
const WD = ["日", "月", "火", "水", "木", "金", "土"];
const TYPE = {
  full: { label: "通し営業", time: "9:00 – 22:40" },
  night: { label: "夜の特別枠", time: "21:10 – 22:40" },
  closed: { label: "休業", time: "" },
};

function nextMonday() {
  const jst = new Date(Date.now() + 9 * 3600e3);
  const d = new Date(Date.UTC(jst.getUTCFullYear(), jst.getUTCMonth(), jst.getUTCDate()));
  const add = ((8 - d.getUTCDay()) % 7) || 7;
  d.setUTCDate(d.getUTCDate() + add);
  return d;
}
const start = process.argv[2] ? new Date(process.argv[2] + "T00:00:00Z") : nextMonday();

const days = [];
for (let i = 0; i < 7; i++) {
  const d = new Date(start.getTime() + i * 86400e3);
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + 1, day = d.getUTCDate();
  const cal = months.find((c) => c.year === y && c.month === m);
  if (!cal) throw new Error(`calendar.ts に ${y}年${m}月 がありません`);
  const type = cal.days[day] ?? cal.defaultType;
  days.push({ m, day, wd: WD[d.getUTCDay()], dow: d.getUTCDay(), holiday: cal.holidays.includes(day), type, note: cal.notes[day] || "" });
}
const f = days[0], l = days[6];
const range = `${f.m}/${f.day}（${f.wd}）〜${l.m}/${l.day}（${l.wd}）`;
const stamp = `${start.getUTCFullYear()}${String(f.m).padStart(2, "0")}${String(f.day).padStart(2, "0")}`;

// ---------- 文面 ----------
const line = (d) => `${d.m}/${d.day}（${d.wd}${d.holiday ? "・祝" : ""}）${TYPE[d.type].label}${TYPE[d.type].time ? " " + TYPE[d.type].time.replace(/ /g, "") : ""}${d.note ? "　※" + d.note : ""}`;
const fullDays = days.filter((d) => d.type === "full").map((d) => `${d.day}日（${d.wd}）`);
const list = days.map(line).join("\n");
const lead = fullDays.length
  ? `今週の通し営業は ${fullDays.join("・")} です。それ以外の日は、仕事帰りの夜の特別枠を開けています。`
  : `今週は通し営業がありません。夜の特別枠を開けています。`;

const gbp = `【今週の営業日　${range}】
${lead}

${list}

当日のご予約も、空き枠があれば開始1時間前までWebで承っています。
初回は60分 6,500円／90分 9,000円。合わなければ、左足が終わった時点で終了。お代は頂きません。
※すべて予約制です（飛び込みは承っていません）。

（ボタン：予約 → ${RESERVE}）`;

const ig = `今週の営業日です。
${range}

${list}

当日のご予約も、空き枠があれば開始1時間前までWebで承っています。
ご予約はプロフィールのリンクから。

#足つぼ #足つぼ専門店 #台湾式足つぼ #ひばりヶ丘 #西東京市 #田無 #東久留米 #イタキモ`;

const story = days
  .filter((d) => d.type !== "closed")
  .map((d) => `${d.m}/${d.day}（${d.wd}）：本日、${TYPE[d.type].label}（${TYPE[d.type].time.replace(/ /g, "")}）。○時〜空きあり。ご予約はリンクから`)
  .join("\n");

writeFileSync(join(outDir, `week-${stamp}.txt`), `■GBP投稿（日曜の夜）\n${gbp}\n\n■Instagram投稿キャプション（日曜の夜）\n${ig}\n\n■当日ストーリーの型（営業日の当日、○時を書き換え）\n${story}\n`);

// ---------- 画像 ----------
const mark = readFileSync(join(here, "../public/logo/mark.svg"), "utf8");
const markUri = "data:image/svg+xml;base64," + Buffer.from(mark).toString("base64");
const rows = days.map((d) => {
  const t = TYPE[d.type];
  const cls = d.type;
  const wdColor = d.dow === 0 || d.holiday ? "#9b321f" : d.dow === 6 ? "#3d5a80" : "#1a1a1a";
  return `<div class="row ${cls}">
    <div class="date"><span class="md">${d.m}/${d.day}</span><span class="wd" style="color:${wdColor}">${d.wd}${d.holiday ? "・祝" : ""}</span></div>
    <div class="type">${t.label}${d.note ? `<small>${d.note}</small>` : ""}</div>
    <div class="time">${t.time}</div>
  </div>`;
}).join("");

const html = (w, h, compact) => `<!doctype html><html><head><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:${w}px;height:${h}px;background:#fefdfa;color:#1a1a1a;font-family:'Noto Sans CJK JP','Noto Sans JP',sans-serif;letter-spacing:.04em;position:relative;overflow:hidden}
.mark{position:absolute;right:-70px;top:${compact ? 10 : 40}px;width:${compact ? 360 : 460}px;opacity:.08}
.wrap{position:relative;padding:${compact ? "56px 72px" : "96px 84px"}}
.eyebrow{font-family:'Noto Serif CJK JP',serif;font-style:italic;color:#9b321f;font-size:${compact ? 26 : 32}px;margin-bottom:8px}
h1{font-family:'Noto Serif CJK JP',serif;font-weight:500;font-size:${compact ? 58 : 72}px;letter-spacing:.12em}
.range{font-size:${compact ? 26 : 32}px;color:#3d3a34;margin:${compact ? "10px 0 26px" : "16px 0 48px"}}
.list{border-top:2px solid #1a1a1a}
.row{display:grid;grid-template-columns:${compact ? "210px 1fr 260px" : "230px 1fr 290px"};align-items:center;padding:${compact ? "11px 8px" : "22px 10px"};border-bottom:1px solid #ebe9e4;font-size:${compact ? 28 : 34}px}
.row .md{font-family:'Noto Serif CJK JP',serif;font-size:${compact ? 36 : 44}px;margin-right:12px}
.row .wd{font-size:${compact ? 24 : 28}px}
.row .type small{display:block;font-size:${compact ? 17 : 20}px;color:#5c5c5c;margin-top:2px}
.row .time{text-align:right;font-family:'Noto Serif CJK JP',serif}
.row.full{background:#f8f6f1}
.row.full .type{color:#9b321f;font-weight:700}
.row.closed{color:#a09c94}
.foot{margin-top:${compact ? 22 : 44}px;font-size:${compact ? 22 : 26}px;color:#3d3a34;line-height:1.8}
.foot b{color:#1a1a1a}
.brand{position:absolute;${compact ? 'right:72px' : 'left:84px'};bottom:${compact ? 36 : 64}px;font-family:'Noto Serif CJK JP',serif;font-size:${compact ? 26 : 30}px;letter-spacing:.14em}
.brand span{font-size:${compact ? 18 : 20}px;color:#5c5c5c;margin-right:14px;letter-spacing:.08em}
</style></head><body>
<img class="mark" src="${markUri}">
<div class="wrap">
  <p class="eyebrow">This week</p>
  <h1>今週の営業日</h1>
  <p class="range">${range}</p>
  <div class="list">${rows}</div>
  <p class="foot">すべて予約制です。<b>当日も、開始1時間前までWebで予約できます。</b></p>
</div>
<p class="brand"><span>足つぼ専門店</span>イタキモ</p>
</body></html>`;

const { chromium } = require("playwright");
const browser = await chromium.launch();
for (const [w, h, compact, name] of [[1080, 1350, false, `week-${stamp}.png`], [1200, 900, true, `week-${stamp}-gbp.png`]]) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await page.setContent(html(w, h, compact), { waitUntil: "load" });
  await page.screenshot({ path: join(outDir, name) });
  await page.close();
}
await browser.close();
console.log(join(outDir, `week-${stamp}.png`));
console.log(join(outDir, `week-${stamp}-gbp.png`));
console.log(join(outDir, `week-${stamp}.txt`));
