import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";

// お土産カード「どれくらいの頻度で通えばいい？」のQRの飛び先（/qr/hindo から転送）
const TITLE = "どれくらいの頻度で通えばいい？｜足つぼ専門店 イタキモ";
const DESCRIPTION = "足つぼに通う頻度の目安は3週間に1回。その理由と、目的別の目安、次の施術までのあいだにできることをまとめました。";
const STORES = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/hindo" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.itakimo.net/hindo",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "article",
    images: [{ url: "https://www.itakimo.net/og-image.png?v=4", width: 1200, height: 630, alt: "足つぼ専門店 イタキモ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://www.itakimo.net/og-image.png?v=4"],
  },
};

const eyebrow = { margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" } as const;
const h2 = { margin: "0 0 20px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(22px, 3vw, 28px)", letterSpacing: "0.1em" } as const;
const body = { margin: "0 0 16px", color: "#3d3a34" } as const;

export default function HindoPage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.95", letterSpacing: "0.04em" }}>
      {/* ヘッダー（上部固定） */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "#fefdfa", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="top" />
        </div>
      </header>

      {/* 問いと答え */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid #ebe9e4" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", right: "-60px", top: "24px", width: "380px", maxWidth: "70%", height: "auto", opacity: 0.09, pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto", padding: "56px 24px 52px" }}>
          <p style={eyebrow}>Q. よく聞かれる質問</p>
          <h1 style={{ margin: "0 0 28px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(26px, 4.2vw, 38px)", letterSpacing: "0.08em", lineHeight: 1.6 }}>どれくらいの頻度で<br />通えばいい？</h1>
          <p style={{ margin: 0, fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(18px, 2.4vw, 22px)", letterSpacing: "0.08em" }}>
            目安は、<span style={{ fontSize: "clamp(36px, 6vw, 52px)", color: "#9b321f", margin: "0 4px" }}>3週間</span>に1回です。
          </p>
        </div>
      </section>

      {/* なぜ3週間なのか */}
      <section id="why" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px" }}>
          <p style={eyebrow}>Why</p>
          <h2 style={h2}>なぜ3週間なのか</h2>
          <p style={body}>施術のあとの軽さは、しばらくすると戻ります。それは自然なことです。</p>
          <p style={body}>気持ちよさや痛みの感じ方は、足への刺激の強さだけで決まるわけではありません。脳が「ここは安全か」を判断して決めている部分も大きい、といわれています。</p>
          <p style={body}>初めての場所、初めての手、初めての強さには、体はどうしても身構えます。繰り返すうちに「この感覚は大丈夫」と覚えて、力が抜けやすくなっていきます。力が抜けるほど、同じ強さでも、気持ちよさを感じやすくなります。</p>
          <p style={body}>施術のあとの感覚を覚えておくと、ふだんの体の張りにも気づきやすくなります。</p>
          <p style={{ margin: "24px 0 0", fontFamily: "'Shippori Mincho', serif", fontSize: "18px", letterSpacing: "0.06em" }}>その感覚を忘れきらないうちに、もう一度。<br />それが、3週間という目安です。</p>
        </div>
      </section>

      {/* 研究について、正直に */}
      <section id="research" style={{ borderBottom: "1px solid #ebe9e4", background: "#f8f6f1" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px" }}>
          <p style={eyebrow}>Honestly</p>
          <h2 style={h2}>研究について、正直に</h2>
          <p style={body}>体の変化を調べた研究の多くは、週1〜2回という、もっと短い間隔の全身マッサージで行われています。変化が続くのは、数日から1週間ほどと報告されています。</p>
          <p style={{ ...body, margin: 0 }}>3週間という数字を、研究が直接示しているわけではありません。イタキモの目安は、足に触れたときの感覚と、無理なく続けられる間隔から決めています。</p>
        </div>
      </section>

      {/* 目的別の目安 */}
      <section id="guide" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px" }}>
          <p style={eyebrow}>Guide</p>
          <h2 style={h2}>目的別の目安</h2>
          <dl style={{ margin: 0, borderTop: "1px solid #ebe9e4" }}>
            {[
              ["2週間に1回", "立ち仕事などで、疲れが溜まりやすい方"],
              ["3〜4週間に1回", "疲れを溜めないためのメンテナンスに"],
              ["行きたいと思ったときに", "たまのご褒美に"],
            ].map(([when, who]) => (
              <div key={when} style={{ padding: "16px 0", borderBottom: "1px solid #ebe9e4" }}>
                <dt style={{ fontFamily: "'Shippori Mincho', serif", fontSize: "20px", color: "#9b321f", letterSpacing: "0.06em" }}>{when}</dt>
                <dd style={{ margin: "2px 0 0", fontSize: "14px", color: "#3d3a34" }}>{who}</dd>
              </div>
            ))}
          </dl>
          <p style={{ margin: "20px 0 0", fontWeight: 700 }}>いちばん大事なのは、無理なく続けられる間隔です。</p>
        </div>
      </section>

      {/* 次の施術までのあいだに */}
      <section id="selfcare" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "56px 24px" }}>
          <p style={eyebrow}>Self care</p>
          <h2 style={h2}>次の施術までのあいだに</h2>
          <p style={{ ...body, margin: 0 }}>欲をいえば、お風呂の中やお風呂あがりに、足裏を軽く触ってあげてください。押さなくて大丈夫です。触れて、感覚を確かめて、施術のあとの軽さや温かさを思い出す。そのくらいのセルフケアを、思い出した日だけでも取り入れてみてください。</p>
        </div>
      </section>

      {/* 予約導線（墨色帯） */}
      <section id="reserve" style={{ background: "#2d2c28", color: "#fefdfa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px" }}>
          <p data-ga-view="hindo_view_end" style={{ margin: 0, fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(22px, 3vw, 30px)", letterSpacing: "0.1em" }}>次は、3週間後くらいに。</p>
          <a href={STORES} style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "15px 44px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>空き時間を見て予約する</a>
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
