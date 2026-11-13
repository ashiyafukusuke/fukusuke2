import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";
import { BusinessCalendar } from "@/components/site/BusinessCalendar";

export const metadata: Metadata = {
  title: "初めての方へ｜足つぼ専門店 イタキモ",
  description: "足つぼ専門店イタキモにご予約の前に。左足トライアル、服装、営業日、アクセス、キャンセルのお約束をまとめています。",
  alternates: {
    canonical: "/first",
  },
  openGraph: {
    title: "初めての方へ｜足つぼ専門店 イタキモ",
    description: "足つぼ専門店イタキモにご予約の前に。左足トライアル、服装、営業日、アクセス、キャンセルのお約束をまとめています。",
    url: "https://www.itakimo.net/first",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://www.itakimo.net/og-image.png?v=4",
        width: 1200,
        height: 630,
        alt: "足つぼ専門店 イタキモ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "初めての方へ｜足つぼ専門店 イタキモ",
    description: "足つぼ専門店イタキモにご予約の前に。左足トライアル、服装、営業日、アクセス、キャンセルのお約束をまとめています。",
    images: ["https://www.itakimo.net/og-image.png?v=4"],
  },
};

export default function FirstPage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      {/* ヘッダー（上部固定） */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="first" />
        </div>
      </header>

      {/* 見出しと写真 */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", right: "-60px", top: "24px", width: "380px", maxWidth: "70%", height: "auto", opacity: 0.09, pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "52px 24px 8px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>For first-timers</p>
          <h1 style={{ margin: "0 0 16px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 44px)", letterSpacing: "0.1em" }}>初めての方へ</h1>
          <p style={{ margin: 0, color: "#3d3a34" }}>ご予約の前に知っておいていただきたいことを、まとめました。</p>
          <div style={{ marginTop: "28px", maxWidth: "720px" }}>
            <figure style={{ margin: 0 }}>
              <img src="/images/first-chair.jpg" alt="リクライニングチェアと、クリームを置いた木の棚" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", background: "#f1efea" }} />
              <figcaption style={{ marginTop: "8px", fontSize: "12px", color: "#5c5c5c" }}>施術はこのチェアに座ったまま受けていただきます。</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ご来店の前に */}
      <section id="first" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", display: "flex", flexWrap: "wrap", gap: "40px 48px" }}>
          <div style={{ flex: "1 1 260px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Before your visit</p>
            <h2 style={{ margin: 0, fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>ご来店の前に</h2>
          </div>
          <div style={{ flex: "3 1 640px", minWidth: 0 }}>
            <div style={{ paddingBottom: "32px", marginBottom: "32px", borderBottom: "1px solid #ebe9e4" }}>
              <h3 style={{ margin: "0 0 8px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "22px", letterSpacing: "0.08em" }}>左足トライアル</h3>
              <p style={{ margin: "0 0 10px", fontWeight: 700 }}>合わなければ、お代は頂きません。</p>
              <p style={{ margin: 0, fontSize: "14px", color: "#3d3a34" }}>60分・90分枠が対象です。まず左足から始めます。片足が終わった時点で「合わない」と感じたら、そこで終了。足つぼが初めての方こそ、気負わず使ってください。</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px 40px" }}>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700 }}>強さは、いつでも調整できます</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>強く押すほど深く届くわけではありません。筋肉が圧に慣れてきたとき、はじめて指は奥に入っていきます。「もう少し強く」「弱めに」は、遠慮なくお伝えください。</p>
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700 }}>枠の中ですべて完結</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>施術・お着替え・お会計まで、ご予約の枠の中で終わります。延長のご案内もしていません。</p>
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700 }}>服装は、そのままで大丈夫です</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>膝まわり（膝上・膝裏）までクリームを使います。膝上までめくれない服装の場合は、ハーフパンツをご用意しています。ひざ掛けもお使いいただけます。</p>
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700 }}>到着は10分前ごろに</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>待合スペースがないため、早く着いた場合は近くで少し時間を調整してからお越しください。遅れた場合も終了時間は変わりませんので、焦らず安全第一でお越しください。</p>
              </div>
              <div>
                <h3 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700 }}>妊娠中の方・お子さま</h3>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>妊娠中の方は、安定期に入っていればお受けしています。お子さまのご利用は、事前にご相談ください。</p>
              </div>
            </div>
            <p style={{ margin: "32px 0 0", fontSize: "12px", color: "#5c5c5c" }}>足の硬さや左右の違いなど、気づいたことは施術中にお伝えします。痛みやしびれが続く場合は、整形外科（足の外科）の受診をおすすめします。</p>
          </div>
        </div>
      </section>

      {/* 営業日・アクセス */}
      <section id="hours" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", display: "flex", flexWrap: "wrap", gap: "56px 64px" }}>
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Hours</p>
            <h2 style={{ margin: "0 0 24px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>営業日</h2>
            <dl style={{ margin: "0 0 24px", display: "grid", gridTemplateColumns: "auto 1fr", gap: "10px 24px", fontSize: "14px", alignItems: "baseline" }}>
              <dt style={{ fontWeight: 700 }}>通し営業</dt>
              <dd style={{ margin: 0 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px" }}>9:00 – 22:40</span><span style={{ fontSize: "12px", color: "#5c5c5c", marginLeft: "12px" }}>日にちはカレンダーでご確認ください</span></dd>
              <dt style={{ fontWeight: 700 }}>夜の特別枠</dt>
              <dd style={{ margin: 0 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px" }}>21:10 – 22:40</span><span style={{ fontSize: "12px", color: "#5c5c5c", marginLeft: "12px" }}>それ以外の日</span></dd>
            </dl>
            <p style={{ margin: "-8px 0 20px", fontSize: "13px", color: "#3d3a34" }}>店主は都内の足つぼ専門店でも施術を担当しているため、日中に開けられる日が限られています。そのぶん、夜の特別枠をできるだけ多くの日に開けています。</p>
            <BusinessCalendar />
            <p style={{ margin: "12px 0 0", fontSize: "13px", color: "#3d3a34" }}>当日のご予約も、空き枠があれば、開始1時間前までWebで承っています。</p>
          </div>
          <div id="access" style={{ flex: "1 1 420px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Access</p>
            <h2 style={{ margin: "0 0 24px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>アクセス</h2>
            <p style={{ margin: "0 0 8px", fontSize: "14px" }}>〒202-0001　東京都西東京市ひばりが丘3丁目2−51<br />HIBARIDO 2F R-09</p>
            <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#3d3a34" }}>ひばりヶ丘駅・田無駅・イオンモール東久留米のあいだにあります。</p>
            <div style={{ borderTop: "1px solid #ebe9e4", fontSize: "13px" }}>
              <div style={{ padding: "14px 0", borderBottom: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 2px", fontWeight: 700 }}>ひばりヶ丘駅（西武池袋線）</p>
                <p style={{ margin: 0, color: "#3d3a34" }}>徒歩17分、または西武バス「境04」で「交番前」下車 徒歩1分</p>
              </div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 2px", fontWeight: 700 }}>田無駅（西武新宿線）・武蔵境駅（JR中央線）</p>
                <p style={{ margin: 0, color: "#3d3a34" }}>西武バス「境04」で「交番前」下車 徒歩1分</p>
              </div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 2px", fontWeight: 700 }}>三鷹駅（JR中央線）</p>
                <p style={{ margin: 0, color: "#3d3a34" }}>西武バス「鷹22」で「交番前」下車 徒歩1分</p>
              </div>
              <div style={{ padding: "14px 0", borderBottom: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 2px", fontWeight: 700 }}>お車・自転車</p>
                <p style={{ margin: 0, color: "#3d3a34" }}>専用駐車場はありません。西友隣接・コープ隣接のコインパーキング（徒歩約10分）をご利用ください。駐輪スペースは建物前にあり、無料でご利用いただけます。イオンモール東久留米からは自転車で約6分です。</p>
              </div>
            </div>
            <div style={{ marginTop: "28px" }}>
              <p style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 700 }}>入口からお店までの道順（動画）</p>
              <video src="/videos/access-route.mp4" poster="/videos/access-route-poster.jpg" controls muted playsInline preload="none" style={{ display: "block", width: "100%", maxWidth: "320px", aspectRatio: "9 / 16", background: "#f1efea" }} />
              <p style={{ margin: "8px 0 0", fontSize: "12px", color: "#5c5c5c" }}>約25秒・音声はありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 予約の変更・キャンセル */}
      <section>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "52px 24px", display: "flex", flexWrap: "wrap", gap: "32px 48px" }}>
          <div style={{ flex: "1 1 260px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Policy</p>
            <h2 style={{ margin: 0, fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "22px", letterSpacing: "0.1em" }}>予約の変更・キャンセル</h2>
          </div>
          <div style={{ flex: "3 1 640px", minWidth: 0 }}>
            <p style={{ margin: "0 0 16px", fontSize: "13px", color: "#3d3a34" }}>限られた枠を大切にしたいと思っています。お互いの時間を誠実に扱うためのお約束です。</p>
            <dl style={{ margin: 0, fontSize: "13px", borderTop: "1px solid #ebe9e4" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "12px 0", borderBottom: "1px solid #ebe9e4" }}>
                <dt style={{ flex: "0 0 200px", fontWeight: 700 }}>予約の変更</dt>
                <dd style={{ margin: 0, flex: "1 1 260px", color: "#3d3a34" }}>メール（<a href="mailto:fukusuke@itakimo.net" style={{ color: "#3d3a34" }}>fukusuke@itakimo.net</a>）・Instagram DM・お問い合わせフォームからご連絡ください。</dd>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "12px 0", borderBottom: "1px solid #ebe9e4" }}>
                <dt style={{ flex: "0 0 200px", fontWeight: 700 }}>当日キャンセル（連絡あり）</dt>
                <dd style={{ margin: 0, flex: "1 1 260px", color: "#3d3a34" }}>キャンセル料は頂きません。ただし、直前のキャンセルが続く場合は、以降のご予約をお受けしないことがあります。</dd>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 24px", padding: "12px 0", borderBottom: "1px solid #ebe9e4" }}>
                <dt style={{ flex: "0 0 200px", fontWeight: 700 }}>無断キャンセル</dt>
                <dd style={{ margin: 0, flex: "1 1 260px", color: "#3d3a34" }}>以降のご予約はお受けしていません。</dd>
              </div>
            </dl>
            <p style={{ margin: "14px 0 0", fontSize: "12px", color: "#5c5c5c" }}>このルールを設けているのは、枠を押さえたまま来られない方がいると、その時間を必要としている別の方が機会を失ってしまうからです。キャンセルは予約確認メールのリンクからお手続きください。</p>
          </div>
        </div>
      </section>

      {/* 予約導線（墨色帯） */}
      <section style={{ background: "#2d2c28", color: "#fefdfa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <p style={{ margin: 0, fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(22px, 3vw, 30px)", letterSpacing: "0.1em" }}>気負わず、まずは左足から。</p>
          <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "15px 44px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>予約する</a>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px 40px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>
        <FooterNav />
        <p style={{ margin: 0 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
