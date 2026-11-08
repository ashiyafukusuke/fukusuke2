import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";

export const metadata: Metadata = {
  title: "イタキモの考え方｜足つぼ専門店 イタキモ",
  description: "足つぼ専門店イタキモの考え方。施術のやり方、反射区や解剖学の知識の扱い方、予約のルールと料金の考え方を、店主の言葉でまとめています。",
  alternates: {
    canonical: "/stance",
  },
  openGraph: {
    title: "イタキモの考え方｜足つぼ専門店 イタキモ",
    description: "足つぼ専門店イタキモの考え方。施術のやり方、反射区や解剖学の知識の扱い方、予約のルールと料金の考え方を、店主の言葉でまとめています。",
    url: "https://www.itakimo.net/stance",
    siteName: "足つぼ専門店 イタキモ",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://www.itakimo.net/og-image.png",
        width: 1200,
        height: 630,
        alt: "足つぼ専門店 イタキモ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "イタキモの考え方｜足つぼ専門店 イタキモ",
    description: "足つぼ専門店イタキモの考え方。施術のやり方、反射区や解剖学の知識の扱い方、予約のルールと料金の考え方を、店主の言葉でまとめています。",
    images: ["https://www.itakimo.net/og-image.png"],
  },
};

export default function StancePage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      {/* ヘッダー（上部固定） */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
            <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
          </Link>
          <SiteNav current="stance" />
        </div>
      </header>

      {/* ヒーロー：Philosophy */}
      <section style={{ position: "relative", overflow: "hidden", borderBottom: "1px solid #ebe9e4" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", right: "-60px", top: "24px", width: "380px", maxWidth: "70%", height: "auto", opacity: 0.09, pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "56px 24px 60px" }}>
          <p className="lbl">Philosophy</p>
          <h1 style={{ margin: "0 0 32px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(30px, 4.4vw, 44px)", letterSpacing: "0.1em" }}>イタキモの考え方</h1>
          <div style={{ maxWidth: "640px" }}>
            <p style={{ margin: "0 0 20px", fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(19px, 2.4vw, 23px)", lineHeight: 1.9, letterSpacing: "0.06em" }}>「この人に喜んでもらいたい」と思いながら、足を揉む。</p>
            <p style={{ margin: "0 0 14px", color: "#3d3a34", lineHeight: 2.1 }}>それが、イタキモのテーマです。同じ手技でも、気持ちが入っているかどうかで、結果は変わると思っています。</p>
            <p style={{ margin: 0, color: "#3d3a34", lineHeight: 2.1 }}>施術のやり方も、ルールも、料金も、ここから決めています。ふだん施術中にお話ししていることを、このページにまとめました。</p>
          </div>
        </div>
      </section>

      {/* 1. 足について */}
      <section className="chap">
        <div className="chap-in">
          <div className="chap-h">
            <p className="lbl">On feet</p>
            <h2 className="ch2">足について</h2>
          </div>
          <div className="chap-b">
            <div className="item">
              <h3><span className="n">01</span>いちばん働いて、いちばん後回しにされる場所。</h3>
              <p>足は毎日、体を支えて歩いています。それなのに、ケアとなると肩や首が先になりがちです。だからイタキモは、足だけを揉む店にしています。</p>
            </div>
            <div className="item">
              <h3><span className="n">02</span>足つぼはご褒美。罰ゲームの道具じゃない。</h3>
              <p>強く押すことだけが上手さじゃない。痛みに耐えてもらうことが目的でもない。痛すぎないのに、気持ちいい。気持ちいいのに、物足りなくない。この矛盾みたいな感覚を追求するのが、イタキモの足つぼです。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 施術について */}
      <section className="chap" id="technique">
        <div className="chap-in">
          <div className="chap-h">
            <p className="lbl">Technique</p>
            <h2 className="ch2">施術について</h2>
            <img src="/images/reason-01.jpg" alt="指の関節にタコのある施術者の手が、足を包み込むように押している" style={{ display: "block", width: "100%", maxWidth: "320px", aspectRatio: "4 / 3", objectFit: "cover", marginTop: "28px", background: "#f1efea" }} />
          </div>
          <div className="chap-b">
            <div className="item">
              <h3><span className="n">03</span>力ではなく、重さで押す。</h3>
              <p>力で押し込むのではなく、体の重さを預けるように圧をかける。だから深いところまで、無理なく届く。</p>
            </div>
            <div className="item">
              <h3><span className="n">04</span>求められた強さは、否定しない。</h3>
              <p>圧はいつも同じではない。その日の足裏の状態に合わせて、強さを変えていく。「もっと強く」と言われやすい場所ほど、神経や血管が浅いところを通っていることがある。足の甲、膝の裏、くるぶしのまわりがそう。</p>
              <p>求められた強さは否定しない。そのかわり、強さを届ける場所を少しずらす。強さは、体が安全に受け止められる場所で出す。そのうえで、最初から最後までいたきもちよく。</p>
            </div>
            <div className="item">
              <h3><span className="n">05</span>感じ方は、刺激の強さだけでは決まらない。</h3>
              <p>足底への刺激に対する反応は、刺激の強さだけでなく、経験や事前の期待、そのときの心理状態によっても変わる。心地よく施術を受けられることがリラックスにつながり、自律神経活動にも影響する可能性がある。</p>
            </div>
            <div className="item">
              <h3><span className="n">06</span>相性は、施術者が合わせるもの。</h3>
              <p>合う・合わないは、お客様ではなく施術者の側が合わせにいくことだと考えています。「もう少し強く」「弱めに」「そこは軽めで」。遠慮なくお伝えください。弱めにと言われたら、圧を抜くだけでなく、触れ方そのものを変えます。</p>
            </div>
            <div className="item">
              <h3><span className="n">07</span>お客様の感じ方は、直さない。</h3>
              <p>痛い、気持ちいい、軽くなった。どう感じたか、それをどんな言葉で表すかは、お客様のものです。施術者が言い換えたり、正したりするものではないと思っています。</p>
              <p>好みの強さを否定しないのと同じように、感じたことも、そのまま受け止めます。だからこのサイトのクチコミも、いただいた言葉をそのまま載せています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 知識の扱い方 */}
      <section className="chap">
        <div className="chap-in">
          <div className="chap-h">
            <p className="lbl">Knowledge</p>
            <h2 className="ch2">知識の扱い方</h2>
          </div>
          <div className="chap-b">
            <div className="item">
              <h3><span className="n">08</span>足を、3つの視点で見る。</h3>
              <p>反射区をきっかけに、足の構造や筋肉の働き、歩き方にも目を向ける。足つぼの気持ちよさから、自分の身体を知る面白さへ。足つぼには、まだまだ奥があるのです。</p>
            </div>
            <div className="item">
              <h3><span className="n">09</span>つながりの地図を、因果の断定に使わない。</h3>
              <p>反射区も、筋膜のつながりも、体の「つながりの地図」だと考えています。地図は、どこに目を向けるかのきっかけになります。ただ、離れた場所の不調の原因を言い当てるものではありません。イタキモでは、反射区を因果の証明ではなく、相関の地図として扱います。</p>
            </div>
            <div className="item">
              <h3><span className="n">10</span>確かさを、3つの棚に分ける。</h3>
              <p>施術中にお話しすることは、どのくらい確かなことなのかを分けて考えています。</p>
              <dl className="shelf">
                <div><dt>確認された知識</dt><dd>解剖学の教科書などで確かめられる内容。筋肉の位置や、基本的な働きなど。</dd></div>
                <div><dt>伝統的な考え方</dt><dd>反射区の体系で、そう説明されていること。そう言われていることと、実際にその部位の状態がわかることは別です。</dd></div>
                <div><dt>仮説・未確認</dt><dd>可能性としては考えられても、あなたに当てはまるとは限らないこと。根拠が足りないことは、断定しません。</dd></div>
              </dl>
            </div>
            <div className="item">
              <h3><span className="n">11</span>硬い・柔らかいで、良し悪しを決めない。</h3>
              <p>力を入れたときはしっかり硬くなり、力を抜いたときは柔らかすぎなくても、しなやかさが感じられる。そういう筋肉が、質のいい筋肉だと考えています。柔らかければ柔らかいほどいい、とは思っていません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ルールと料金 */}
      <section className="chap">
        <div className="chap-in">
          <div className="chap-h">
            <p className="lbl">Rules &amp; price</p>
            <h2 className="ch2">ルールと料金</h2>
          </div>
          <div className="chap-b">
            <div className="item">
              <h3><span className="n">12</span>不利なことは、先に書く。</h3>
              <p>予約のルールや、お受けできないことは、目立つところに先に書いています。キャンセルのルールも、はっきり決めています。ご予約は本名でなくてもかまいません。必要以上の個人情報は、お預かりしません。</p>
            </div>
            <div className="item">
              <h3><span className="n">13</span>ルールは、守ってくださる方への礼儀。</h3>
              <p>ルールは罰ではありません。時間を作って、約束どおりに来てくださる方への礼儀だと思っています。だから、ルールに感情は置きません。遅れることは誰にでもあるので、予約枠の前後には余白を取っています。</p>
              <p>ルールを先に書いておくのは、あとからお客様のことを悪く言わずに済むようにするためでもあります。</p>
            </div>
            <div className="item">
              <h3><span className="n">14</span>合うかどうかは、お客様が決める。</h3>
              <p>初めての方は、まず左足から始めます。片足が終わった時点で「合わない」と感じたら、そこで終了。お代は頂きません。合うかどうかの判断は、お客様にお任せしています。</p>
            </div>
            <div className="item">
              <h3><span className="n">15</span>通ってくださる方ほど、安く。</h3>
              <p>通ってくださる方ほど安くなるのが、正しいと思っています。2回目以降は、間隔が空いてもずっと継続料金です。次回のご予約を、こちらからお勧めすることもありません。また来たいと思ったときに、来てください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. これから */}
      <section className="chap">
        <div className="chap-in">
          <div className="chap-h">
            <p className="lbl">Ahead</p>
            <h2 className="ch2">これから</h2>
          </div>
          <div className="chap-b">
            <div className="item">
              <h3><span className="n">16</span>足つぼ屋から、足揉み屋へ。</h3>
              <p>いずれは、反射区も、解剖学も、体の動きのつながりも取り込んだ「足揉み屋」になりたいと思っています。今はその途中です。まずは、一般的な足つぼより少しだけ先に進んだ足つぼ屋を目指しています。</p>
              <p style={{ margin: "12px 0 0", fontSize: "13px" }}>
                <Link href="/blog" className="lnk" style={{ color: "#9b321f" }}><span>読みものはこちら</span></Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 墨色の締め（店主 福助・予約する） */}
      <section style={{ background: "#2d2c28", color: "#fefdfa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "52px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "28px 48px" }}>
          <div>
            <p style={{ margin: "0 0 14px", fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(20px, 2.8vw, 28px)", letterSpacing: "0.08em", lineHeight: 1.8 }}>言葉で伝えられるのは、ここまでです。<br />あとは、あなたの足で確かめてください。</p>
            <p style={{ margin: 0, fontSize: "13px", color: "#b8b3a8" }}>店主　福助</p>
          </div>
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
