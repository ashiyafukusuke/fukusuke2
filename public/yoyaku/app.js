(function(){
const WD = ["日","月","火","水","木","金","土"];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pad = n => String(n).padStart(2,"0");
const hm = m => `${Math.floor(m/60)}:${pad(m%60)}`;
const yen = n => "¥" + Number(n).toLocaleString("ja-JP");
// 日付はすべて "YYYY-MM-DD" の文字列で扱う（日本時間。サーバーの今日を基準にする）
const D = s => new Date(s + "T00:00:00Z");
const ks = d => d.toISOString().slice(0,10);
const addD = (s, n) => ks(new Date(D(s).getTime() + n*864e5));
const wd = s => D(s).getUTCDay();
const fmt = s => { const d = D(s); return `${d.getUTCMonth()+1}月${d.getUTCDate()}日（${WD[d.getUTCDay()]}）`; };

const GAP = 15, CUTOFF = 60, HORIZON = 60;
const COURSES = [
  { id:"c60", min:60, label:"初めての方に", desc:"足裏からふくらはぎ・膝裏まで", trial:true, first:6500, repeat:5500, prepayOff:500, cap:1000 },
  { id:"c90", min:90, label:"最近1番選ばれています", hot:true, desc:"60分よりゆったりした流れで", trial:true, first:9000, repeat:8000, prepayOff:500, cap:1500 }
];
const EB = [ { days:7, off:1000, label:"7日以上前" }, { days:1, off:500, label:"前日まで" } ];

let av = null;          // サーバーから届いた空き状況
let loadErr = "";
const today = () => av.today;
const ahead = s => Math.round((D(s) - D(today())) / 864e5);
const kindOf = s => (av && av.days[s]) || "closed";
const hoursOf = k => k === "full" ? { s:9*60, e:22*60+40, step:30, last:22*60+40 } : { s:21*60+10, e:22*60+40, step:10, last:21*60+40 };

function price(c, visit, pay, a) {
  const base = visit === "first" ? c.first : c.repeat;
  const prepay = (visit === "repeat" && pay === "card") ? c.prepayOff : 0;
  let eb = 0, ebLabel = "";
  if (a > 0) { const h = EB.find(x => a >= x.days); if (h) { eb = h.off; ebLabel = h.label; } }
  const raw = prepay + eb, off = Math.min(raw, c.cap);
  return { base, prepay, eb, ebLabel, capped: raw > off, off, total: base - off };
}

function slots(s, c) {
  const a = ahead(s), k = kindOf(s); if (k === "closed" || a < 0 || a > HORIZON) return [];
  const h = hoursOf(k), res = av.booked.filter(b => b.date === s && !(ui.mb && b.date === ui.mb.date && b.s === ui.mb.s && b.e === ui.mb.e));
  if (k === "night" && res.some(b => !b.blk)) return [];
  const out = [];
  for (let m = h.s; m + c.min <= h.e && m <= h.last; m += h.step) {
    if (a === 0 && m < av.nowMin + CUTOFF) continue;
    const e = m + c.min + GAP;
    out.push({ m, taken: res.some(b => m < b.e + GAP && b.s < e) });
  }
  return out;
}
function capacity(s, c) {
  let n = 0, next = -1; for (const x of slots(s, c).filter(x => !x.taken)) if (x.m >= next) { n++; next = x.m + c.min + GAP; } return n;
}

const blank = () => ({ step:1, visit:null, cid:null, pay:"onsite", date:null, time:null, mo:0, f:{ name:"", tel:"", mail:"", memo:"", agree:false }, q:{ first:null, stay:null, hurt:null }, err:"", done:null, busy:false, info:"" });
const ui = blank();

function rulesHtml() {
  return `<section class="rules" aria-labelledby="rt">
    <h2 id="rt">ご予約の前に</h2>
    <ol>
      <li><div><strong>遅れても、終了時間は変わりません。</strong><span>施術・お着替え・お会計まで、ご予約の枠の中で終わります。到着は5分前ごろを目安にお越しください。早く着いても大丈夫ですが、前のご予約があるときなどは、開始を早められません。あらかじめご了承ください。早めに始められるときは、次のどちらかをお選びいただけます。</span><ul class="mini"><li>早めに始めて、そのぶん早めに終わる（施術は60分なら60分、90分なら90分）</li><li>ご予約の時間に始めて、ご予約どおりの時間に終わる</li></ul><span>施術時間には、最後のクリームの拭き取りまで含みます。</span></div></li>
      <li><div><strong>キャンセル料は頂きません。</strong><span>ただし、無断キャンセルの方からは、以降のご予約をお受けしていません。直前のキャンセルが続く場合も、お受けしないことがあります。体調やご家族の事情、足のけがなどでのキャンセルは、ご連絡があれば対象にしません。</span></div></li>
      <li><div><strong>変更・キャンセルの方法</strong><span>前日の23:59までは、確認メールの専用リンクからご自分でできます。</span>
        <ul class="mini"><li>日時の変更：1つのご予約につき2回まで。料金は変更後の日付で計算し直します（早割の条件も変更後の日付で決まります）</li><li>事前決済のご予約で、変更して安くなる場合は差額を自動でお返しします。高くなる場合は、一度キャンセルしてから、改めてご予約ください（同じ日のうちに取り直せば、キャンセルの回数には数えません）</li><li>キャンセル：直近3か月で2回まで。キャンセルのあとにご来店いただければ、回数はリセットされます。事前決済の分は、キャンセルしたその場で全額の返金手続きをします。返金そのものは即時ですが、カードの明細に表示されるまではカード会社側の処理になるため、通常5〜10営業日ほどかかります</li><li>コース（60分・90分）を変えたい場合は、一度キャンセルしてから、改めてご予約ください（同じ日のうちに取り直せば、キャンセルの回数には数えません）</li></ul>
        <span>当日の場合や、回数を超える場合は、メール（fukusuke@itakimo.net）・Instagram DM・お問い合わせフォームからご連絡ください。</span></div></li>
    </ol>
    <p class="more">個人情報を守るため、ご予約名は本名でなくてもかまいません。お手数でなければ、ニックネームなど本名以外のお名前をおすすめします。<br>お預かりする情報の扱いは、<a href="/privacy" target="_blank" rel="noopener" style="color:var(--brand);">プライバシーポリシー</a>をご覧ください。</p>
  </section>`;
}

const Q = [
  { k:"first", t:"イタキモ以外も含めて、足つぼ専門店は初めてですか？", req:true, o:["はい","いいえ"] },
  { k:"hurt",  t:"足にけが・痛み・腫れはありますか？", req:true, o:["ない","ある（下の欄で教えてください）"] },
  { k:"stay",  t:"施術中の過ごし方（任意）", o:["静かに受けたい","おまかせ"] }
];
function qHtml() {
  return `<div class="qbox"><p>施術の時間は、できるだけ足を揉むことに使いたいと思っています。お手数ですが、この場をお借りして、施術前のご質問をさせてください。</p>
    ${Q.map(q => `<div class="q"><span>${q.t}${q.req ? `<em style="font-style:normal;color:var(--brand);font-size:11px;margin-left:6px;">必須</em>` : ""}</span><div class="chips">${q.o.map(o =>
      `<button type="button" class="chip" data-qk="${q.k}" data-qo="${esc(o)}" aria-pressed="${ui.q[q.k] === o}">${esc(o)}</button>`).join("")}</div></div>`).join("")}
  </div>`;
}

function calUrl(b) {
  if (!b.date || b.start == null) return "";
  const t = (m) => b.date.replace(/-/g, "") + "T" + String(Math.floor(m / 60)).padStart(2, "0") + String(m % 60).padStart(2, "0") + "00";
  const q = new URLSearchParams({ action: "TEMPLATE", text: "イタキモ 足つぼ", dates: t(b.start) + "/" + t(b.end), ctz: "Asia/Tokyo",
    location: "東京都西東京市ひばりが丘3丁目2-51 HIBARIDO 2F R-09",
    details: "予約番号：" + String(b.id || "").slice(0,6).toUpperCase() + "\n変更・キャンセル：" + location.origin + (b.manage || "") });
  return "https://calendar.google.com/calendar/render?" + q.toString();
}

function placeHtml() {
  return `<div class="rules" style="margin:0;"><h2 style="font-size:15px;margin-bottom:6px;">場所</h2>
    <p class="note" style="margin:0 0 8px;border:none;padding:0;background:none;">〒202-0001 東京都西東京市ひばりが丘3丁目2-51<br>HIBARIDO 2F R-09<br><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("東京都西東京市ひばりが丘3丁目2-51 HIBARIDO")}" target="_blank" rel="noopener" style="color:var(--brand);font-weight:700;">地図を開く</a></p>
    <ul class="mini" style="margin:0;"><li>HIBARIDOの入り口から入り、右手奥の階段で2階へ</li><li>2階の入り口ドアを入って右側のお部屋（R-09）がイタキモです（看板は出していません）</li><li><a href="/videos/access-route.mp4" target="_blank" rel="noopener" style="color:var(--brand);">入り口からの道順の動画（約25秒）</a></li><li>わかりにくい場合は、お電話ください（<a href="tel:08062646460" style="color:var(--brand);">080-6264-6460</a>）</li><li>お手洗いは、HIBARIDO 1階の共用トイレをご利用ください</li><li>到着は5分前ごろを目安にお越しください</li></ul></div>`;
}

function doneHtml(b) {
  // 当日のご予約は、リンクからの変更・キャンセルの期限（前日23:59）を過ぎているので案内しない
  const sameDay = av && b.date && b.date <= av.today;
  if (sameDay) b = Object.assign({}, b, { manage: "" });
  const ok = b.paid || b.pay !== "事前決済";
  const cal = calUrl(b);
  const manageAbs = b.manage ? location.origin + b.manage : "";
  const head = `<div class="okbox${ok ? "" : " wait"}" role="status"><span class="mark" aria-hidden="true">${ok ? "✓" : "…"}</span><div><strong>${ok ? "ご予約が確定しました" : "お支払いを確認しています"}</strong><small>${ok ? (b.pay === "事前決済" ? "お支払いも完了しています。当日はそのままお越しください。" : "お支払いは当日、お店でお願いします。") : "少し時間をおいて、このページを開き直してください。"}</small></div></div>`;
  const sheet = `<div class="sheet">
      <div class="row"><span>予約番号</span><span>${esc(String(b.id || "").slice(0,6).toUpperCase())}</span></div>
      <div class="row"><span>ご予約名</span><span>${esc(b.name)} 様</span></div>
      <div class="row"><span>日時</span><span>${esc(b.when)}</span></div>
      <div class="row"><span>コース</span><span>${esc(b.course)}</span></div>
      <div class="row"><span>お支払い</span><span>${esc(b.pay)}</span></div>
      <div class="row total"><span>${b.paid ? "お支払い済み" : "当日のお支払い"}</span><span>${yen(b.total)}</span></div>
    </div>`;
  const calBtn = cal ? `<a class="btn ghost" href="${esc(cal)}" target="_blank" rel="noopener" style="display:flex;justify-content:center;text-decoration:none;">カレンダーに登録する</a>` : "";
  if (b.mail) {
    return head + `<p class="note" style="margin:0;">確認メールをお送りしました。前日の18時ごろにも、ご案内のメールをお送りします。届かない場合は、迷惑メールのフォルダもご確認ください。</p>`
      + sheet + calBtn
      + (sameDay ? `<p class="note" style="margin:0;">本日のご予約のため、変更・キャンセルは確認メールへの返信・Instagram DM・お問い合わせフォームからご連絡ください。</p>` : "")
      + (b.manage ? `<p class="note" style="margin:0;">前日の23:59までは、<a href="${esc(b.manage)}" style="color:var(--brand);font-weight:700;">こちらのページ</a>からご自分で日時の変更（2回まで）とキャンセルができます。確認メールにも同じリンクを載せています。</p>` : "")
      + placeHtml();
  }
  return head + `<div class="note" style="margin:0;border-color:var(--brand);background:var(--tint);"><strong>この画面を、スクリーンショットで残してください。</strong><br>メールアドレスのご登録がないため、確認メールと前日のご案内メールは届きません。ご予約の内容は、この画面でのご案内だけになります。</div>`
    + sheet + calBtn
    + (manageAbs ? `<div class="note" style="margin:0;"><strong>変更・キャンセル用のページ</strong>（前日の23:59まで）<br>日時の変更（2回まで）とキャンセルは、下のページからご自分でできます。このページはメールでお送りできないので、ブックマークするか、URLを控えておいてください。<br><a href="${esc(b.manage)}" style="color:var(--brand);font-weight:700;word-break:break-all;">${esc(manageAbs)}</a><br><button type="button" class="btn ghost" id="copyManage" style="margin-top:8px;">URLをコピー</button></div>` : "")
    + `<p class="note" style="margin:0;">当日の変更・キャンセルは、メール（fukusuke@itakimo.net）・Instagram DM・お問い合わせフォームからご連絡ください。</p>`
    + placeHtml();
}

function render() {
  const app = document.getElementById("app");
  const head = `<header class="top"><img class="logoimg" src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ"><span class="badge">完全予約制</span></header>`;
  if (!av) {
    app.innerHTML = `<div class="wrap">${head}${loadErr ? `<div class="err" role="alert">${esc(loadErr)}</div>` : `<p class="note">空き状況を読み込んでいます…</p>`}</div>`;
    return;
  }
  const c = COURSES.find(x => x.id === ui.cid) || null;
  const a = ui.date ? ahead(ui.date) : 0;
  const steps = `<nav class="steps" aria-label="進み具合">${["コース","日時","確認・入力","完了"].map((n,i) => `<span class="${i+1===ui.step?"on":i+1<ui.step?"done":""}">${i+1}. ${n}</span>`).join("")}</nav>`;
  let main = ui.info && ui.mode !== "manage" ? `<div class="err" role="alert">${esc(ui.info)}</div>` : "";

  if (ui.step === 1) {
    main += `<h2>コースを選ぶ</h2>
      <div class="visit${ui.visit===null?" wait":""}" role="radiogroup" aria-label="イタキモのご利用">
        <button type="button" role="radio" data-v="first" aria-checked="${ui.visit==="first"}"><i aria-hidden="true"></i>はじめての利用</button>
        <button type="button" role="radio" data-v="repeat" aria-checked="${ui.visit==="repeat"}"><i aria-hidden="true"></i>2回目以降の利用</button>
      </div>`;
    if (ui.visit !== null) {
      main += `<div class="opts courses${ui.cid===null?" wait":""}" role="radiogroup" aria-label="コース">${COURSES.map(x => {
        const p = price(x, ui.visit, "onsite", 0);
        return `<button type="button" role="radio" class="course" data-c="${x.id}" aria-checked="${ui.cid===x.id}">
          <i class="rd" aria-hidden="true"></i><span class="min">${x.min}<small>分</small></span>
          <span class="desc"><strong>${x.min}分コース</strong>${x.label ? `<span class="lbl${x.hot?" hot":""}">${x.label}</span>` : ""}${esc(x.desc)}${ui.visit==="first" && x.trial ? `<br><span class="tag">左足トライアルつき</span>` : ""}</span>
          <span class="price"><b>${yen(p.base)}</b><small>早割あり</small></span>
        </button>`; }).join("")}</div>`;
      if (ui.visit === "first") main += `<div class="box"><h3>左足トライアル</h3><div class="sub">合わなければ、お代は頂きません。</div>片足が終わった時点で合わないと感じたら、そこで終了します。事前にお支払いの場合は、全額お返しします。</div>`;
      main += `<div class="label">お支払い方法</div>
        <div class="opts" role="radiogroup" aria-label="お支払い方法">
          <label class="opt"><input type="radio" name="pay" value="onsite" ${ui.pay==="onsite"?"checked":""}><span><strong>当日、お店でお支払い</strong><small>現金・クレジットカード・電子マネー・QR決済</small></span></label>
          <label class="opt"><input type="radio" name="pay" value="card" ${ui.pay==="card"?"checked":""}><span><strong>事前決済（クレジットカード・PayPay）</strong><small>${ui.visit==="repeat" ? "500円お安くなります。施術後のお会計なしでお帰りいただけます" : "施術後のお会計なしでお帰りいただけます（はじめての方は割引の対象外です）"}</small></span></label>
        </div>
        <table class="eb"><caption>早割</caption>
          <tr><th>前日までのご予約</th><td>−500円</td></tr>
          <tr><th>7日以上前のご予約</th><td>−1,000円</td></tr>
        </table>
        <p class="note" style="margin-top:-14px;">はじめての方も2回目以降の方も、同じ条件で使えます。事前決済の割引と合わせて、60分は1,000円・90分は1,500円までお安くなります。</p>`;
    }
  }

  if (ui.step === 2 || ui.mstep === "cal") {
    const t = D(today());
    const base = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + ui.mo, 1)), y = base.getUTCFullYear(), mo = base.getUTCMonth();
    const last = D(addD(today(), HORIZON));
    const maxMo = (last.getUTCFullYear()-t.getUTCFullYear())*12 + last.getUTCMonth()-t.getUTCMonth();
    let cells = WD.map((w,i) => `<div class="wd ${i===0?"sun":""}">${w}</div>`).join("");
    for (let i = 0; i < base.getUTCDay(); i++) cells += `<div></div>`;
    const days = new Date(Date.UTC(y, mo+1, 0)).getUTCDate();
    for (let n = 1; n <= days; n++) {
      const s = `${y}-${pad(mo+1)}-${pad(n)}`, ok = slots(s,c).some(x => !x.taken), cap = ok ? capacity(s,c) : 0;
      const p = ok ? price(c, ui.visit, ui.pay, ahead(s)) : null;
      const st = !ok ? "" : kindOf(s) === "night" ? `<span class="nt">夜</span>` : cap >= 4 ? "◎" : cap >= 2 ? "▲" : "残1";
      const o = ok && p.eb ? `−${p.eb.toLocaleString()}円` : ok && ahead(s) === 0 ? "当日" : "";
      cells += `<button type="button" class="day" data-d="${s}" ${ok?"":"disabled"} aria-pressed="${ui.date === s}" aria-label="${fmt(s)}${ok?"":"、予約できません"}"><span class="n">${n}</span><span class="s">${st}</span><span class="o">${o}</span></button>`;
    }
    main += `<h2>${ui.mstep === "cal" ? "新しい日時を選ぶ" : "日時を選ぶ"}</h2>
      <p class="lead">当日のご予約は、開始1時間前まで受け付けています。日付の下の数字が早割の金額です。</p>
      <div class="cal">
        <div class="cal-head"><button type="button" id="pm" ${ui.mo<=0?"disabled":""}>前の月</button><strong>${y}年${mo+1}月</strong><button type="button" id="nm" ${ui.mo>=maxMo?"disabled":""}>次の月</button></div>
        <div class="grid">${cells}</div>
        <div class="legend"><span>◎ 空きあり</span><span>▲ 空き少なめ</span><span>残1 残り1枠</span><span><span class="nt">夜</span> 夜の特別枠（1日1組）</span><span><b>−500円</b> 前日まで</span><span><b>−1,000円</b> 7日以上前</span></div>
      </div>`;
    if (ui.date) {
      const sl = slots(ui.date, c);
      main += `${kindOf(ui.date) === "night" ? `<div class="night"><strong>夜の特別枠</strong>21:10〜21:40のあいだで、10分単位で開始時間を選べます。1日1組だけの枠です。</div>` : ""}
        <h3>${fmt(ui.date)}の開始時間</h3>
        <div class="slots">${sl.map(x => `<button type="button" class="slot" data-t="${x.m}" ${x.taken?"disabled":""} aria-pressed="${ui.time===x.m}">${hm(x.m)}</button>`).join("")}</div>`;
    }
  }

  if (ui.mode === "manage") main = manageMain(main);

  if (ui.step === 3) {
    const p = price(c, ui.visit, ui.pay, a);
    main += `<h2>内容の確認</h2>
      <div class="sheet">
        <div class="row"><span>日時</span><span>${fmt(ui.date)} ${hm(ui.time)}〜${hm(ui.time + c.min)}</span></div>
        <div class="row"><span>コース</span><span>${c.min}分（${ui.visit==="first"?"はじめて":"2回目以降"}）</span></div>
        ${ui.visit==="first" && c.trial ? `<div class="row"><span>左足トライアル</span><span>対象</span></div>` : ""}
        <div class="row"><span>お支払い</span><span>${ui.pay==="card"?"事前決済":"当日、お店で"}</span></div>
        <div class="row"><span>${ui.visit==="first"?"料金":"継続料金"}</span><span>${yen(p.base)}</span></div>
        ${p.prepay ? `<div class="row minus"><span>事前決済の割引</span><span>−${yen(p.prepay)}</span></div>` : ""}
        ${p.eb ? `<div class="row minus"><span>早割（${p.ebLabel}）</span><span>−${yen(p.eb)}</span></div>` : ""}
        ${p.capped ? `<div class="row minus"><span>割引の上限による調整</span><span>+${yen(p.prepay + p.eb - p.off)}</span></div>` : ""}
        <div class="row total"><span>お支払い金額</span><span>${yen(p.total)}</span></div>
        ${p.capped ? `<p class="capnote">割引は${c.min}分で合計${yen(c.cap)}までです</p>` : ""}
      </div>
      <h2>お客様情報</h2>
      <form class="form" id="fm" novalidate>
        <label class="field">ご予約名（本名でなくてもかまいません）<input id="fn" maxlength="40" autocomplete="nickname" placeholder="例：ふくすけ" value="${esc(ui.f.name)}"></label>
        <p class="note" style="margin:0;">連絡先は、電話番号かメールアドレスの<strong>どちらか一方</strong>で大丈夫です。予約の確認と、変更があったときのご連絡にだけ使います。</p>
        <label class="field">電話番号<input id="ft" type="tel" maxlength="20" autocomplete="tel" placeholder="09012345678" value="${esc(ui.f.tel)}"></label>
        <p class="note" style="margin:0;border-color:var(--brand);background:var(--tint);">ご自分で日時の変更・キャンセルをしたい方は、<strong>メールアドレスを入れてください</strong>。予約ごとの専用リンクをお送りします。メールアドレスがない場合、変更・キャンセルはお店へご連絡ください。</p>
        <label class="field">メールアドレス<input id="fe" type="email" maxlength="120" autocomplete="email" placeholder="example@email.com" value="${esc(ui.f.mail)}"></label>
        ${ui.visit === "first" ? qHtml() : ""}
        <label class="field">足や身体のお疲れで気になっていること（任意）<textarea id="fo" maxlength="400" placeholder="疲れた、立ち仕事でふくらはぎが張りやすい、強めが好き、など">${esc(ui.f.memo)}</textarea></label>
        <details class="reread"><summary>「ご予約の前に」をもう一度読む</summary>${rulesHtml()}</details>
        <label class="agree"><input type="checkbox" id="fa" ${ui.f.agree?"checked":""}><span>「ご予約の前に」を確認しました。<small>チェックを入れると予約できます</small></span></label>
        ${ui.err ? `<div class="err" role="alert">${esc(ui.err)}</div>` : ""}
        ${ui.pay === "card" ? `<p class="note" style="margin:0;">次の画面で、決済会社（Stripe）のお支払い画面に移ります。カード番号は決済会社が直接お預かりし、お店がカード番号を見ることはありません。</p>` : ""}
      </form>`;
  }

  if (ui.step === 4 && ui.done) main += doneHtml(ui.done);

  const p = c && ui.step < 4 ? price(c, ui.visit, ui.pay, a) : null;
  const sum = ui.step === 4 ? "" : c ? `${c.min}分・${ui.pay==="card"?"事前決済":"当日払い"}${ui.date?`・${fmt(ui.date)}`:""}${ui.time!=null?` ${hm(ui.time)}`:""}` : "コースを選んでください";
  const can = !ui.busy && { 1: !!c && ui.visit !== null, 2: !!(ui.date && ui.time != null), 3: true, 4: true }[ui.step];
  const nextLabel = ui.busy ? "送信しています…" : ui.step === 1 ? "日時を選ぶ" : ui.step === 2 ? "確認へ進む" : ui.step === 3 ? (ui.pay === "card" ? "お支払いへ進む" : "予約する") : "サイトに戻る";

  app.innerHTML = `
    <div class="wrap">${head}${ui.step === 1 ? rulesHtml() : ""}${ui.mode === "manage" ? "" : steps}${main}</div>
    ${ui.mode === "manage" ? manageBar() : ui.step === 4 ? `<p style="text-align:center;margin:8px 0 24px;"><a href="/" style="color:var(--muted);font-size:13px;">イタキモのサイトへ</a></p>` : `<div class="bar"><div class="bar-in">
      <div class="sum">${sum}${p ? `<b>${yen(p.total)}</b>` : ""}</div>
      ${ui.step > 1 && ui.step < 4 ? `<button type="button" class="btn ghost" id="back" ${ui.busy?"disabled":""}>戻る</button>` : ""}
      <button type="button" class="btn" id="next" ${can?"":"disabled"}>${nextLabel}</button>
    </div></div>`}`;

  const cm = document.getElementById("copyManage");
  if (cm) cm.onclick = async () => { const u = location.origin + (ui.done && ui.done.manage || ""); try { await navigator.clipboard.writeText(u); cm.textContent = "コピーしました"; } catch { prompt("このURLを控えてください", u); } };
  document.querySelectorAll("[data-v]").forEach(b => b.onclick = () => { ui.visit = b.dataset.v; ui.info = ""; render(); });
  document.querySelectorAll("[data-c]").forEach(b => b.onclick = () => { ui.cid = b.dataset.c; ui.date = null; ui.time = null; render(); });
  document.querySelectorAll("input[name=pay]").forEach(r => r.onchange = () => { ui.pay = r.value; render(); });
  const pm = document.getElementById("pm"), nm = document.getElementById("nm");
  if (pm) pm.onclick = () => { ui.mo--; render(); };
  if (nm) nm.onclick = () => { ui.mo++; render(); };
  document.querySelectorAll("[data-d]").forEach(b => b.onclick = () => { ui.date = b.dataset.d; ui.time = null; render(); });
  document.querySelectorAll("[data-t]").forEach(b => b.onclick = () => { ui.time = Number(b.dataset.t); render(); });
  if (ui.step === 3) {
    const g = id => document.getElementById(id);
    g("fn").oninput = e => ui.f.name = e.target.value; g("ft").oninput = e => ui.f.tel = e.target.value;
    g("fe").oninput = e => ui.f.mail = e.target.value; g("fo").oninput = e => ui.f.memo = e.target.value;
    g("fa").onchange = e => ui.f.agree = e.target.checked; g("fm").onsubmit = e => e.preventDefault();
    document.querySelectorAll("[data-qk]").forEach(b => b.onclick = () => {
      const k = b.dataset.qk, o = b.dataset.qo;
      ui.q[k] = ui.q[k] === o ? null : o;
      const yy = scrollY; render(); scrollTo(0, yy);
    });
  }
  const back = document.getElementById("back");
  if (back && ui.mode !== "manage") back.onclick = () => { ui.step--; ui.err = ""; render(); scrollTo(0,0); };
  if (ui.mode === "manage") bindManage();
  const nx = ui.mode === "manage" ? null : document.getElementById("next");
  if (nx) nx.onclick = () => {
    if (ui.step === 3) return submit(c);
    if (ui.step === 4) { location.href = "/"; return; }
    ui.info = ""; ui.step++; render(); scrollTo(0,0);
  };
}

async function submit(c) {
  if (!ui.f.name.trim()) { ui.err = "ご予約名を入力してください。"; return render(); }
  if (!ui.f.tel.trim() && !ui.f.mail.trim()) { ui.err = "電話番号かメールアドレスのどちらかを入力してください。"; return render(); }
  if (ui.visit === "first" && (!ui.q.first || !ui.q.hurt)) { ui.err = "必須のご質問にお答えください。"; return render(); }
  if (!ui.f.agree) { ui.err = "「ご予約の前に」の確認にチェックを入れてください。"; return render(); }
  ui.err = ""; ui.busy = true; render();
  try {
    const res = await fetch("/api/yoyaku/book", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({
      visit: ui.visit, cid: ui.cid, pay: ui.pay, date: ui.date, time: ui.time,
      name: ui.f.name, tel: ui.f.tel, mail: ui.f.mail, memo: ui.f.memo, q: ui.q, agree: ui.f.agree,
      expect: (() => { const c = COURSES.find(x => x.id === ui.cid); return c && ui.date ? price(c, ui.visit, ui.pay, ahead(ui.date)).total : null; })()
    }) });
    const j = await res.json().catch(() => ({}));
    if (j.checkoutUrl) { location.href = j.checkoutUrl; return; }
    ui.busy = false;
    if (j.ok && j.booking) { ui.done = j.booking; ui.step = 4; render(); scrollTo(0,0); return; }
    if (j.code === "price") { await load(); ui.step = 3; ui.info = j.error; render(); scrollTo(0,0); return; }
    if (j.code === "taken") { await load(); ui.time = null; ui.step = 2; ui.info = j.error; render(); scrollTo(0,0); return; }
    ui.err = j.error || "ご予約を受け付けられませんでした。時間をおいてもう一度お試しください。"; render();
  } catch {
    ui.busy = false; ui.err = "通信がうまくいきませんでした。電波の良い場所でもう一度お試しください。"; render();
  }
}


function manageMain(calHtml) {
  const b = ui.mb;
  if (!b) return `<div class="err" role="alert">${esc(ui.merr || "ご予約が見つかりません。")}</div>`;
  const info = ui.info ? `<div class="err" role="alert">${esc(ui.info)}</div>` : "";
  const sheet = `<div class="sheet">
      <div class="row"><span>予約番号</span><span>${esc(b.no)}</span></div>
      <div class="row"><span>ご予約名</span><span>${esc(b.name)} 様</span></div>
      <div class="row"><span>日時</span><span>${esc(b.when)}</span></div>
      <div class="row"><span>コース</span><span>${b.min}分（${b.visit === "first" ? "はじめて" : "2回目以降"}）</span></div>
      <div class="row"><span>お支払い</span><span>${b.pay === "card" ? "事前決済" : "当日、お店で"}</span></div>
      <div class="row total"><span>${b.paid ? "お支払い済み" : "当日のお支払い"}</span><span>${yen(b.total)}</span></div>
    </div>`;
  if (ui.mstep === "done") return info + `<div class="okbox" role="status"><span class="mark" aria-hidden="true">✓</span><div><strong>${esc(ui.mdone.title)}</strong><small>${esc(ui.mdone.text)}</small></div></div>` + (b.status === "confirmed" ? sheet + `<p style="text-align:center;margin:0;"><a href="${esc(location.pathname + location.search)}" style="color:var(--brand);font-size:14px;font-weight:700;">ご予約の確認に戻る</a></p>` : "");
  if (b.status === "cancelled") return `<h2>ご予約の確認</h2><div class="err">このご予約はキャンセル済みです。</div>`;
  if (ui.mstep === "cal") return info + `<p class="note" style="margin:0;">今のご予約：${esc(b.when)}（${b.min}分）<br>料金は、変更後の日付で計算し直します。</p>` + calHtml;
  if (ui.mstep === "confirm") {
    const v = ui.mprev;
    return info + `<h2>変更の確認</h2>
      <div class="sheet">
        <div class="row"><span>変更前</span><span>${esc(b.when)}</span></div>
        <div class="row"><span>変更後</span><span>${esc(v.when)}</span></div>
        <div class="row"><span>コース</span><span>${b.min}分</span></div>
        <div class="row total"><span>変更後の金額</span><span>${yen(v.total)}</span></div>
        ${v.total !== v.before ? `<p class="capnote">変更前は${yen(v.before)}でした（早割の条件が変わるため）</p>` : ""}
        ${v.refund > 0 ? `<div class="row minus"><span>差額の返金</span><span>${yen(v.refund)}</span></div>` : ""}
      </div>
      <p class="note" style="margin:0;">ご自分での変更は、あと${b.changesLeft}回できます（この変更を含む）。</p>`;
  }
  if (ui.mstep === "cancel") return info + `<h2>キャンセルの確認</h2>${sheet}<p class="note" style="margin:0;">このご予約をキャンセルします。キャンセル料は頂きません。${b.paid ? `お支払い済みの${yen(b.total)}は、キャンセルしたその場で全額の返金手続きをします。返金そのものは即時ですが、カードの明細に表示されるまではカード会社側の処理になるため、通常5〜10営業日ほどかかります。` : ""}</p>`;
  const why = b.canCancel ? "" : `<p class="note" style="margin:0;">前日の23:59を過ぎたため、ここからは変更・キャンセルできません。メール（fukusuke@itakimo.net）かInstagram DMでご連絡ください。</p>`;
  return info + `<h2>ご予約の確認</h2>${sheet}${why}${b.canCancel && !b.canChange ? `<p class="note" style="margin:0;">ご自分での日時の変更は2回までです。これ以上の変更は、メールかInstagram DMでご連絡ください。</p>` : ""}
    ${b.cancelLimited ? `<p class="note" style="margin:0;">ご自分でのキャンセルは、直近3か月で2回までです（キャンセルのあとにご来店いただければ、回数はリセットされます）。キャンセルの場合は、メールかInstagram DMでご連絡ください。</p>` : ""}
    ${b.canChange || b.canCancel ? `<div class="rules"><h2 style="font-size:15px;margin-bottom:6px;">ご自分でできること（前日の23:59まで）</h2>
      <ul class="mini" style="margin:0;"><li>日時の変更：あと${b.changesLeft}回（1つのご予約につき2回まで）。料金は変更後の日付で計算し直します（早割の条件も変更後の日付で決まります）。事前決済のご予約で料金が高くなる場合は、一度キャンセルしてから改めてご予約ください（同じ日のうちに取り直せば、キャンセルの回数には数えません）。</li>
      <li>キャンセル：${b.cancelLimited ? "回数の上限に達しています" : `あと${b.cancelsLeft}回（直近3か月で2回まで。キャンセルのあとにご来店いただければ、回数はリセットされます）`}。キャンセル料は頂きません。${b.paid ? "お支払い済みの分は全額お返しします。" : ""}</li>
      <li>コース（60分・90分）は変更できません。変えたい場合は、一度キャンセルしてから、改めてご予約ください。同じ日のうちに取り直せば、キャンセルの回数には数えません。</li>
      <li>当日の場合や回数を超える場合は、メール（fukusuke@itakimo.net）・Instagram DM・お問い合わせフォームからご連絡ください。</li></ul></div>` : ""}`;
}

function manageBar() {
  const b = ui.mb;
  if (!b || b.status === "cancelled" || ui.mstep === "done") return `<p style="text-align:center;margin:8px 0 24px;"><a href="/" style="color:var(--muted);font-size:13px;">イタキモのサイトへ</a></p>`;
  let btns = "";
  if (ui.mstep === "view") btns = `${b.canCancel ? `<button type="button" class="btn ghost" id="mcancel">キャンセルする</button>` : ""}${b.canChange ? `<button type="button" class="btn" id="mchange">日時を変更する</button>` : ""}`;
  if (ui.mstep === "cal") btns = `<button type="button" class="btn ghost" id="mback">戻る</button><button type="button" class="btn" id="mnext" ${ui.date && ui.time != null && !ui.busy ? "" : "disabled"}>${ui.busy ? "確認しています…" : "確認へ進む"}</button>`;
  if (ui.mstep === "confirm") btns = `<button type="button" class="btn ghost" id="mback">戻る</button><button type="button" class="btn" id="mdo" ${ui.busy ? "disabled" : ""}>${ui.busy ? "変更しています…" : "この日時に変更する"}</button>`;
  if (ui.mstep === "cancel") btns = `<button type="button" class="btn ghost" id="mback">戻る</button><button type="button" class="btn" id="mdo" ${ui.busy ? "disabled" : ""}>${ui.busy ? "キャンセルしています…" : "キャンセルを確定する"}</button>`;
  if (!btns) return "";
  return `<div class="bar"><div class="bar-in"><div class="sum">${ui.mstep === "cal" && ui.date && ui.time != null ? `${fmt(ui.date)} ${hm(ui.time)}<b>${yen(price(COURSES.find(x => x.id === b.cid), b.visit, b.pay, ahead(ui.date)).total)}</b>` : `予約番号 ${esc(b.no)}`}</div>${btns}</div></div>`;
}

async function mpost(body) {
  const r = await fetch("/api/yoyaku/manage", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ t: ui.mt, ...body }) });
  return r.json().catch(() => ({ error: "通信がうまくいきませんでした。" }));
}

function bindManage() {
  const g = id => document.getElementById(id);
  const top = () => { render(); scrollTo(0,0); };
  if (g("mchange")) g("mchange").onclick = () => { ui.mstep = "cal"; ui.date = null; ui.time = null; ui.mo = 0; ui.info = ""; top(); };
  if (g("mcancel")) g("mcancel").onclick = () => { ui.mstep = "cancel"; ui.info = ""; top(); };
  if (g("mback")) g("mback").onclick = () => { ui.mstep = ui.mstep === "confirm" ? "cal" : "view"; ui.info = ""; top(); };
  if (g("mnext")) g("mnext").onclick = async () => {
    ui.busy = true; render();
    const j = await mpost({ action:"change", date: ui.date, time: ui.time });
    ui.busy = false;
    if (j.preview) { ui.mprev = j.preview; ui.mstep = "confirm"; ui.info = ""; return top(); }
    ui.info = j.error || "変更できませんでした。"; if (j.code === "taken") { await load(); ui.time = null; } top();
  };
  if (g("mdo")) g("mdo").onclick = async () => {
    ui.busy = true; render();
    const cancel = ui.mstep === "cancel";
    const j = await mpost(cancel ? { action:"cancel" } : { action:"change", date: ui.date, time: ui.time, confirm: true });
    ui.busy = false;
    if (!j.ok) { ui.info = j.error || "うまく処理できませんでした。"; if (j.code === "taken") { await load(); ui.mstep = "cal"; ui.time = null; } return top(); }
    if (cancel) {
      ui.mb = { ...ui.mb, status: "cancelled" };
      ui.mdone = { title: "キャンセルを承りました", text: j.refundFailed ? "返金の手続きがうまくいかなかったため、お店から改めてご連絡します。" : j.refunded ? `${yen(j.refunded)}の返金手続きをしました。返金そのものは即時ですが、カードの明細に表示されるまではカード会社側の処理になるため、通常5〜10営業日ほどかかります。` : "またのご予約をお待ちしています。" };
    } else {
      ui.mb = j.booking || ui.mb;
      ui.mdone = { title: "日時を変更しました", text: (j.refunded ? `差額の${yen(j.refunded)}の返金手続きをしました（カードの明細に表示されるまで、通常5〜10営業日ほどかかります）。` : "") + (ui.mb && ui.mb.total != null ? "新しい内容は下の通りです。" : "") };
      await load();
    }
    ui.info = ""; ui.mstep = "done"; top();
  };
}

// ページを開いたまま日付（日本時間）が変わったら、空き状況と早割を取り直す
const jstToday = () => new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);
async function refreshIfNewDay() {
  if (!av || ui.mode === "manage" || ui.step === 4 || ui.busy || jstToday() === av.today) return;
  try {
    await load();
    if (ui.date && (ahead(ui.date) < 0 || kindOf(ui.date) === "closed")) { ui.date = null; ui.time = null; if (ui.step > 2) ui.step = 2; }
    ui.info = "日付が変わったため、空き状況と早割の金額を更新しました。";
    render();
  } catch {}
}
setInterval(refreshIfNewDay, 60000);
document.addEventListener("visibilitychange", () => { if (!document.hidden) refreshIfNewDay(); });

async function load() {
  const res = await fetch("/api/yoyaku/availability", { cache:"no-store" });
  const j = await res.json();
  if (!res.ok) throw new Error(j.error || "load");
  av = j;
}

(async () => {
  render();
  const qs = new URLSearchParams(location.search);
  const paid = qs.get("paid"), canceled = qs.get("canceled"), mt = qs.get("m");
  if (mt) {
    Object.assign(ui, { mode:"manage", mstep:"view", mt, step:0 });
    try {
      await load();
      const r = await fetch("/api/yoyaku/manage?t=" + encodeURIComponent(mt), { cache:"no-store" });
      const j = await r.json();
      if (j.booking) { ui.mb = j.booking; ui.cid = j.booking.cid; ui.visit = j.booking.visit; ui.pay = j.booking.pay; }
      else ui.merr = j.error;
    } catch { loadErr = "読み込めませんでした。時間をおいて、ページを開き直してください。"; }
    return render();
  }
  if (canceled) history.replaceState(null, "", "/yoyaku");
  try {
    if (canceled) await fetch("/api/yoyaku/release", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ id: canceled }) }).catch(() => {});
    await load();
  } catch (e) { loadErr = "空き状況を読み込めませんでした。時間をおいて、ページを開き直してください。"; render(); return; }
  if (canceled) ui.info = "お支払いが完了していないため、ご予約はまだ確定していません。もう一度お選びください。";
  if (paid) {
    try {
      const r = await fetch("/api/yoyaku/confirm?session_id=" + encodeURIComponent(paid), { cache:"no-store" });
      const j = await r.json();
      if (j.booking) { ui.done = j.booking; ui.step = 4; if (!j.ok) ui.info = "お支払いの確認がまだ取れていません。少し時間をおいて、このページを開き直してください。"; }
      else ui.info = j.error || "お支払いの確認ができませんでした。";
    } catch { ui.info = "お支払いの確認ができませんでした。"; }
  }
  render();
})();
})();
