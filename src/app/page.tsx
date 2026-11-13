import Link from "next/link";
import { SiteNav, FooterNav } from "@/components/site/SiteNav";
import { news, formatDate } from "@/data/news";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "足つぼ専門店 イタキモ",
  url: "https://www.itakimo.net/",
  logo: "https://www.itakimo.net/logo.png",
  image: "https://www.itakimo.net/og-image.png?v=4",
  address: {
    "@type": "PostalAddress",
    postalCode: "202-0001",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "西東京市",
    streetAddress: "ひばりが丘3丁目2−51 HIBARIDO 2F R-09",
  },
  areaServed: ["西東京市", "東久留米市"],
  priceRange: "¥3,300–¥9,000",
  sameAs: [
    "https://www.instagram.com/fukusuke.ashiya/",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Thursday"],
      opens: "09:00",
      closes: "22:40",
    },
  ],
};

const storesReviews: { date: string; text: string }[] = [
  { date: "2026年8月26日", text: "足裏マッサージは好きでたまに行きますが、寝ての施術になるところが多く、イタキモさんはリクライニングチェアーで座っての施術なので、なんでゴリゴリしたのが出るのかなど聞くことができてとても勉強になりました。右足と左足で同じ強さで施術いただいているのに感じ方が全く違うのも面白かったです。痛めにしてもらうのが好きなのですが、痛すぎるとすぐ根をあげるので、「もう少し強めに」→「やっぱりもう少しソフトに」と細やかに応えていただき足が喜んでいます。疲れた時のご褒美でまた伺えればと思います。ありがとうございました。" },
  { date: "2026年8月17日", text: "2度目のお伺いでした。\n連日の座り仕事に加えて、慣れない庭仕事も重なり、「これは足にご褒美をあげなくては……」と伺いました。\n絶妙な圧を痛気持ち良く感じながら施術を受けていると、足の状態が明確に変わっていくのが分かり、とても面白く、すっかりクセになりそうです。\n翌日も足がポカポカしていて、柔らかい状態が続いているのがうれしく、今回も効果を実感しました。\n近場で当日でも駆け込みでお願いできること、事前決済ができるので身軽に行けることも、とてもありがたいです。\nまたよろしくお願いします。" },
  { date: "2026年8月14日", text: "店名通りイタ気持ちいい強さで足裏とふくらはぎを丁寧にもんでいただきました。足が随分とほぐれた気がします。" },
  { date: "2026年7月29日", text: "歩き方や日常の過ごし方のヒントが頂けたり、身体全体を支えている足の大切さ、足ツボの奥深さを知れました。痛気持ちいい施術も帰り道の軽くなった身体が忘れられず、また行きたいと思いました。ありがとうございました。" },
  { date: "2026年6月24日", text: "今日偶然見つけて予約入れました。ちょっと場所と男性セラピストさんなので、心配しながら足が辛かったので訪れました。が、セラピストさんの配慮もあり心配はありませんでした。この所の低気圧、梅雨のため足が浮腫んでいたのですが、スッキリ。行きは足が重かったのですが、帰りは足がスイスイと歩けました。片足終わった時点で、もう一方の足と全然形状が異なっているのが目で見て、感じてわかりました。痛過ぎず、流し過ぎずで、足裏マッサージのことを凄く心得たセラピストでした。辛い時に凄く頼りそうです。" },
  { date: "2026年6月20日", text: "初めて利用させていただきました。\n強さも丁寧に調節してくださり、好み通りの痛気持ちよさでした。翌日は、裸足で歩くと足裏の地面の掴みが良い感じがしました。\nまた利用させていただきたいと思います。" },
  { date: "2026年6月18日", text: "初めての足ツボでしたが気持ちよかったです。\n右足の途中から寝ました。" },
];

export default function Home() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーロー */}
      <section id="top" className="hero">
        <img
          className="hero-img hero-pc"
          src="/images/hero-pc.jpg"
          alt="両手で足を包み込むように揉む、イタキモの施術の様子"
          // @ts-ignore
          fetchPriority="high"
        />
        <img
          className="hero-img hero-sp"
          src="/images/hero-sp.jpg"
          alt="両手で足を包み込むように揉む、イタキモの施術の様子"
        />
        <div className="hero-veil"></div>

        {/* 固定ヘッダー */}
        <header className="hdr" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 20, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid rgba(235,233,228,0.9)" }}>
          <div className="hdr-in" style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <a href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
              <img className="hdr-logo" src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
            </a>
            <SiteNav current="top" />
          </div>
        </header>

        <div className="hero-inner">
          <div className="hero-text">
            <h1 style={{ margin: "0 0 24px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(42px, 6.4vw, 76px)", lineHeight: 1.35, letterSpacing: "0.1em" }}>
              <span style={{ color: "#9b321f" }}>痛い</span>のに、<br />気持ちいい。
            </h1>
            <p style={{ margin: "0 0 28px", fontFamily: "'Shippori Mincho', serif", fontSize: "17px", letterSpacing: "0.08em" }}>
              <span style={{ display: "inline-block" }}>深く、ゆっくり、</span>
              <span style={{ display: "inline-block" }}>足の奥までしみわたる。</span>
            </p>
            <p className="hero-loc" style={{ margin: "0 0 32px", fontSize: "12px", color: "#5c5c5c", letterSpacing: "0.12em" }}>西東京市ひばりが丘｜完全予約制の一人店</p>
            <div className="hero-cta">
              <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011/book/course_type?courseCanonicalId=947238" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "15px 40px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>予約する</a>
              <a href="#menu" style={{ color: "#1a1a1a", fontSize: "14px", textUnderlineOffset: "6px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>メニューと料金</a>
              <p className="hero-note">強さは、いつでも調整できます。<br />初めての方は「左足トライアル」。合わなければ、お代は頂きません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 初めての方へ（アコーディオン） */}
      <section id="first" style={{ borderBottom: "1px solid #ebe9e4", background: "#f8f6f1" }}>
        <details style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", padding: "20px 0", minHeight: "44px" }}>
            <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 20px" }}>
              <span style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(22px, 2.6vw, 26px)", letterSpacing: "0.1em", color: "#1a1a1a" }}>初めての方へ</span>
              <span style={{ fontSize: "13px", fontStyle: "normal", fontWeight: 700, color: "#9b321f" }}>※初めての方は必ずご覧ください</span>
            </span>
            <span className="tog" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#1a1a1a" }}>
              <span className="tog-o">開く</span><span className="tog-c">閉じる</span>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="#1a1a1a" strokeWidth="1.4"></path></svg>
            </span>
          </summary>
          <div style={{ padding: "4px 0 36px" }}>
            <div style={{ flex: "3 1 640px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "28px 36px" }}>
              <div style={{ borderTop: "1px solid #9b321f", paddingTop: "18px" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "19px", letterSpacing: "0.06em" }}>左足トライアル</h3>
                <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "14px" }}>合わなければ、お代は頂きません。</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>60分・90分枠が対象です。まず左足から始め、片足が終わった時点で「合わない」と感じたら、そこで終了します。</p>
              </div>
              <div style={{ borderTop: "1px solid #ebe9e4", paddingTop: "18px" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "19px", letterSpacing: "0.06em" }}>枠の中ですべて完結</h3>
                <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "14px" }}>遅れても、終了時間は変わりません。</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>施術・お着替え・お会計まで、ご予約の枠の中で終わります。延長のご案内もしていません。待合スペースがないため、到着は10分前ごろを目安にしてください。</p>
              </div>
              <div style={{ borderTop: "1px solid #ebe9e4", paddingTop: "18px" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "19px", letterSpacing: "0.06em" }}>予約のお約束</h3>
                <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "14px" }}>当日キャンセルでも、キャンセル料は頂きません。</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>ただし、無断キャンセルの場合と、直前のキャンセルが続く場合は、以降のご予約をお受けしないことがあります。</p>
              </div>
            </div>
            <p style={{ margin: "32px 0 0" }}>
              <Link className="lnk" href="/first" style={{ color: "#1a1a1a", fontSize: "13px" }}><span>「初めての方へ」ページで詳しく見る</span></Link>
            </p>
          </div>
        </details>
      </section>

      {/* クチコミ（Voices） */}
      <section id="voices" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <details style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", padding: "20px 0", minHeight: "44px" }}>
            <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 20px" }}>
              <span style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(22px, 2.6vw, 26px)", letterSpacing: "0.1em", color: "#1a1a1a" }}>足をお任せいただいた方の声</span>
              <span style={{ fontSize: "12px", color: "#5c5c5c" }}>Googleクチコミ <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#1a1a1a" }}>5.0</span>（4件）</span>
              <span style={{ fontSize: "12px", color: "#5c5c5c" }}>STORESレビュー <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#1a1a1a" }}>7</span>件</span>
            </span>
            <span className="tog" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#1a1a1a" }}>
              <span className="tog-o">開く</span><span className="tog-c">閉じる</span>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="#1a1a1a" strokeWidth="1.4"></path></svg>
            </span>
          </summary>
          <div style={{ padding: "4px 0 32px" }}>
            <p style={{ margin: "0 0 24px", fontSize: "12px", color: "#5c5c5c", lineHeight: 1.9 }}>当店では、お客様に「クチコミを書いてください」とお願いすることはしていません。書いていただけたらとても嬉しいですが、書きたくないのに書くものではないと思っています。予約システム（STORES）からレビューのご案内が自動で届くことがありますが、気にせず閉じていただいて大丈夫です。ただ、クチコミでイタキモを知ってくださる方が増えれば、いずれ人を迎えて、営業日を増やすことにもつながります（<Link href="/stance#kuchikomi" style={{ color: "#9b321f" }}>考え方</Link>）。……とはいえ、感想を聞かせていただけるのは、やっぱり嬉しいです（笑）</p>
            <div className="voices-grid">
              {storesReviews.map((r) => (
                <figure key={r.date} style={{ margin: 0, paddingTop: "16px", borderTop: "1px solid #ebe9e4" }}>
                  <blockquote style={{ margin: "0 0 10px", fontSize: "14px", lineHeight: 1.95, whiteSpace: "pre-line" }}>{r.text}</blockquote>
                  <figcaption style={{ fontSize: "11px", color: "#5c5c5c" }}>STORESレビュー（{r.date}）</figcaption>
                </figure>
              ))}
            </div>
            <div style={{ marginTop: "20px", fontSize: "12px", color: "#5c5c5c" }}>
          <a href="https://share.google/hoX4rSA5QB2lNpmHH" style={{ color: "#1a1a1a", textUnderlineOffset: "5px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Googleクチコミを見る</a>
          <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/reviews" style={{ color: "#1a1a1a", textUnderlineOffset: "5px", marginLeft: "20px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>STORESレビューを見る</a>
            </div>
          </div>
        </details>
      </section>

      {/* こんなときに（Scenes） */}
      <section style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px" }}>
          <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Scenes</p>
          <h2 style={{ margin: "0 0 20px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(22px, 2.6vw, 26px)", letterSpacing: "0.1em" }}>こんなときに</h2>
          <ul className="scenes">
            <li>立ち仕事や外回りのあと、足をしっかり揉んでほしいとき</li>
            <li>強めの足つぼが好きで、奥まで届く圧を探しているとき</li>
            <li>足つぼは初めてで、痛すぎないか不安なとき<span>（強さはいつでも調整できます）</span></li>
            <li>仕事帰りの遅い時間に、足を揉んでもらってから帰りたいとき</li>
          </ul>
        </div>
      </section>

      {/* 奥までしみわたる理由（Method） */}
      <section>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Method</p>
            <h2 style={{ margin: "0 0 24px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>奥までしみわたる理由</h2>
            <p style={{ margin: "0 0 28px", color: "#3d3a34", lineHeight: 2.1 }}>反射区を地図に、構造をたどる。足裏から膝裏まで、つながりごとほどく。台湾式の手技を土台に、解剖学と神経の働きの知見を重ねています。</p>
            <Link className="lnk" href="/stance#technique" style={{ color: "#1a1a1a", fontSize: "13px" }}><span>施術について詳しく読む</span></Link>
          </div>
          <div className="reasons" style={{ flex: "2 1 600px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "32px 24px" }}>
            <div>
              <img src="/images/reason-01.jpg" alt="指の関節にタコのある施術者の手が、足を包み込むように押している" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", marginBottom: "14px", background: "#f1efea" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "18px", color: "#9b321f", marginRight: "10px" }}>01</span>反射区だけにこだわらない</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>反射区だけを狙うのではなく、イタ気持ちよさを目印に、ゆっくり深くほぐします。それでも「ピンポイントで押されているみたい」と言われることがよくあります。</p>
            </div>
            <div>
              <img src="/images/reason-02.jpg" alt="親指でふくらはぎを押す施術の手元" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", marginBottom: "14px", background: "#f1efea" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "18px", color: "#9b321f", marginRight: "10px" }}>02</span>足に合わせて、圧を変える</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>硬かった場所がゆるめば、圧の届き方も変わります。その変化に合わせて強さを調整し、最初から最後まで、イタ気持ちいいまま揉んでいきます。</p>
            </div>
            <div>
              <img src="/images/reason-03.jpg" alt="リクライニングチェア、赤いスツール、ふわふわのラグがある、一人用の施術スペース" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", marginBottom: "14px", background: "#f1efea" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "18px", color: "#9b321f", marginRight: "10px" }}>03</span>一人ひとりに向き合う</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>完全予約制の一人店です。ご予約の時間中は、この部屋を貸切でお使いいただけます。他のお客様と顔を合わせることはありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 店主セクション（Owner） */}
      <section className="owner">
        <div className="owner-in">
          <img className="owner-img" src="/images/owner-circle.jpg" alt="店主 福助" />
          <div className="owner-text">
            <div className="owner-head">
              <img className="owner-img-sp" src="/images/owner-circle.jpg" alt="" />
              <div>
                <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#e07a63" }}>Owner</p>
                <h2 style={{ margin: "0 0 28px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "0.1em", lineHeight: 1.6 }}>足を揉むのが、<br />好きで仕方ない。</h2>
              </div>
            </div>
            <p style={{ margin: "0 0 16px", color: "#e7e2d8", lineHeight: 2.05 }}>毎日、足を揉んでいます。それでも飽きるどころか、毎日新しい発見があります。同じ足は一つもないからです。</p>
            <p style={{ margin: "0 0 24px", color: "#e7e2d8", lineHeight: 2.05 }}>足つぼにゴールはないと思っています。次にお会いするときは、今日より上手くなっていたい。そのために学び続けています。</p>
            <dl className="career">
              <div><dt>現在</dt><dd>都内の台湾式足つぼ専門店でも施術を担当。指名のない店なので、毎回はじめて会うお客様の足を、その場で読み取って揉んでいます。</dd></div>
              <div><dt>これまで</dt><dd>THE CLASS（勝どき）、足つぼのソコヂカラ（茅場町）</dd></div>
              <div><dt>2026年</dt><dd>足ツボグランプリ2026（日本足ツボ協会主催）決勝大会 出場</dd></div>
            </dl>
            <p style={{ margin: "0 0 20px", fontSize: "13px", color: "#b8b3a8" }}>店主　福助</p>
            <Link className="lnk" href="/stance" style={{ color: "#fefdfa", fontSize: "13px" }}><span>イタキモの考え方を読む</span></Link>
          </div>
        </div>
      </section>

      {/* メニュー・料金 */}
      <section id="menu" style={{ borderBottom: "1px solid #ebe9e4", position: "relative", overflow: "hidden" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", left: "-90px", top: "40px", width: "420px", height: "auto", opacity: 0.07, transform: "scaleX(-1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 48px" }}>
            <div style={{ flex: "1 1 260px", minWidth: 0 }}>
              <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Menu</p>
              <h2 style={{ margin: "0 0 16px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>メニュー・料金</h2>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>初めての方には60分枠がおすすめです。足の奥までしみわたる感覚を、一番味わいやすい長さです。</p>
            </div>
            <div className="menu-grid" style={{ flex: "3 1 640px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 0 }}>
              <div style={{ padding: "0 28px 28px", borderLeft: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700 }}>30分</p>
                <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#5c5c5c" }}>短時間で足をリセット</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>初回 <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", color: "#1a1a1a" }}>3,500</span>円</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>2回目以降 3,300円</p>
              </div>
              <div style={{ padding: "0 28px 28px", borderLeft: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700 }}>
                  60分 <span style={{ marginLeft: "6px", fontSize: "10px", fontWeight: 500, color: "#9b321f", border: "1px solid #9b321f", borderRadius: "2px", padding: "1px 6px" }}>初めての方に</span>
                </p>
                <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#5c5c5c" }}>足裏からふくらはぎ・膝裏まで</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>初回 <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", color: "#1a1a1a" }}>6,500</span>円</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>2回目以降 5,500円</p>
              </div>
              <div style={{ padding: "0 28px 28px", borderLeft: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700 }}>90分</p>
                <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#5c5c5c" }}>60分よりゆったりした流れで</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>初回 <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", color: "#1a1a1a" }}>9,000</span>円</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>2回目以降 8,000円</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "28px", paddingTop: "22px", borderTop: "1px solid #ebe9e4", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px 40px" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <p style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontSize: "17px" }}>通ってくださる方ほど安くなるのが、正しいと思っています。</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>2回目以降は、間隔が空いてもずっと継続料金です。さらに2回目以降は、予約時にカード決済をされると、60分・90分は500円、30分は300円お安くなります（初回は割引の対象外です）。施術後のお会計もなく、そのままお帰りいただけます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 新セクション「ご予約」（id="reserve"） */}
      <section id="reserve" style={{ position: "relative", overflow: "hidden", background: "#f8f6f1", borderBottom: "1px solid #ebe9e4" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", right: "-80px", bottom: "-50px", width: "520px", maxWidth: "90%", height: "auto", opacity: 0.1, pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "64px 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "20px 48px", marginBottom: "28px" }}>
            <div>
              <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Reserve</p>
              <h2 style={{ margin: "0 0 20px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>ご予約</h2>
              <p style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontSize: "clamp(19px, 2.2vw, 22px)", letterSpacing: "0.1em" }}>足に、ご褒美を。</p>
              <p style={{ margin: "0 0 18px", fontSize: "13px", color: "#3d3a34", letterSpacing: "0.1em" }}>日々の一歩を、軽やかに。</p>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>営業日は週によって変わります。空いている枠は、予約ページでご確認ください。<br />当日のご予約も、空き枠があれば、開始1時間前までWebで承っています。</p>
            </div>
            <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "16px 44px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>空き枠を見る</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "28px 40px", fontSize: "13px" }}>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "16px" }}>
              <p style={{ margin: "0 0 8px", fontWeight: 700 }}>営業時間</p>
              <p style={{ margin: 0, color: "#3d3a34" }}>通し営業　9:00–22:40（主に水・木）</p>
              <p style={{ margin: "0 0 6px", color: "#3d3a34" }}>夜の特別枠　21:10–22:40（それ以外の日）</p>
              <p style={{ margin: "0 0 10px", fontSize: "12px", color: "#5c5c5c" }}>店主は都内の足つぼ専門店でも施術を担当しているため、日中に開けられる日が限られています。</p>
              <Link className="lnk" href="/first#hours" style={{ color: "#1a1a1a" }}><span>今月の営業カレンダー</span></Link>
            </div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "16px" }}>
              <p style={{ margin: "0 0 8px", fontWeight: 700 }}>場所</p>
              <p style={{ margin: 0, color: "#3d3a34" }}>西東京市ひばりが丘 HIBARIDO 2F R-09</p>
              <p style={{ margin: "0 0 10px", color: "#3d3a34" }}>西武バス「交番前」下車 徒歩1分</p>
              <Link className="lnk" href="/first#access" style={{ color: "#1a1a1a" }}><span>アクセスを詳しく見る</span></Link>
            </div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "16px" }}>
              <p style={{ margin: "0 0 8px", fontWeight: 700 }}>初めての方</p>
              <p style={{ margin: "0 0 10px", color: "#3d3a34" }}>左足トライアル。合わなければ、お代は頂きません（60分・90分枠）。</p>
              <Link className="lnk" href="/first" style={{ color: "#1a1a1a" }}><span>「初めての方へ」を読む</span></Link>
            </div>
          </div>
          <p style={{ margin: "28px 0 0", fontSize: "12px", color: "#5c5c5c" }}>
            ご予約の変更やご質問は、メール（<a href="mailto:fukusuke@itakimo.net" style={{ color: "#5c5c5c" }}>fukusuke@itakimo.net</a>）、<a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/contact" style={{ color: "#5c5c5c" }}>お問い合わせフォーム</a>、InstagramのDMからどうぞ。
          </p>
        </div>
      </section>

      {/* お知らせ */}
      <section id="news" style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "52px 24px", display: "flex", flexWrap: "wrap", gap: "20px 48px" }}>
          <div style={{ flex: "1 1 220px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>News</p>
            <h2 style={{ margin: 0, fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(22px, 2.6vw, 26px)", letterSpacing: "0.1em" }}>お知らせ</h2>
          </div>
          <div style={{ flex: "3 1 640px", minWidth: 0 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid #ebe9e4" }}>
              {news.slice(0, 3).map((n) => (
                <li key={n.id} style={{ borderBottom: "1px solid #ebe9e4" }}>
                  <Link href={`/news#${n.id}`} className="news-row">
                    <time dateTime={n.date}>{formatDate(n.date)}</time>
                    <span>{n.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p style={{ margin: "12px 0 0" }}>
              <Link className="lnk" href="/news" style={{ color: "#1a1a1a", fontSize: "13px" }}><span>お知らせ一覧</span></Link>
            </p>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "36px 24px 40px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "28px 48px", fontSize: "12px", color: "#5c5c5c" }}>
        <FooterNav style={{ flex: "1 0 100%", margin: 0, paddingBottom: "20px", borderBottom: "1px solid #ebe9e4" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "52px", width: "auto", alignSelf: "flex-start" }} />
          <div>
            <p style={{ margin: 0 }}>東京都西東京市ひばりが丘3丁目2−51 HIBARIDO 2F R-09（<Link href="/first#access" style={{ color: "#5c5c5c" }}>アクセス</Link>）</p>
            <p style={{ margin: 0 }}><a href="mailto:fukusuke@itakimo.net" style={{ color: "#5c5c5c" }}>fukusuke@itakimo.net</a>　／　<a href="https://www.instagram.com/fukusuke.ashiya/" style={{ color: "#5c5c5c" }}>Instagram</a>　／　<a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/contact" style={{ color: "#5c5c5c" }}>お問い合わせ</a></p>
          </div>
        </div>
        <p style={{ flex: "1 1 360px", minWidth: 0, margin: 0, lineHeight: 1.9 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
