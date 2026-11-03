import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "足つぼ専門店 イタキモ",
  url: "https://www.itakimo.net/",
  logo: "https://www.itakimo.net/logo.png",
  image: "https://www.itakimo.net/og-image.png",
  address: {
    "@type": "PostalAddress",
    postalCode: "202-0001",
    addressCountry: "JP",
    addressRegion: "東京都",
    addressLocality: "西東京市",
    streetAddress: "ひばりが丘3丁目2−51 HIBARIDO 2F R-09",
  },
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

export default function Home() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーロー */}
      <section id="top" className="hero">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-sp.jpg" />
          <img
            className="hero-img hero-pc"
            src="/images/hero-pc.jpg"
            alt="両手で足を包み込むように揉む、イタキモの施術の様子"
            // @ts-ignore
            fetchPriority="high"
          />
        </picture>
        <img
          className="hero-img hero-sp"
          src="/images/hero-sp.jpg"
          alt="腕を伸ばしてふくらはぎを揉む、イタキモの施術の様子"
          // @ts-ignore
          fetchPriority="high"
        />
        <div className="hero-veil"></div>

        <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 2, background: "rgba(254,253,250,0.94)", borderBottom: "1px solid rgba(235,233,228,0.9)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <Link href="#top" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#1a1a1a", minHeight: "44px" }}>
              <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "48px", width: "auto" }} />
            </Link>
            <nav aria-label="メイン" style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "13px" }}>
              <span className="navlinks" style={{ gap: "28px", alignItems: "center" }}>
                <Link href="#menu" style={{ color: "#1a1a1a", textDecoration: "none", padding: "10px 0", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>メニュー</Link>
                <Link href="#first" style={{ color: "#1a1a1a", textDecoration: "none", padding: "10px 0", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>初めての方へ</Link>
                <Link href="/first#access" style={{ color: "#1a1a1a", textDecoration: "none", padding: "10px 0", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>アクセス</Link>
              </span>
              <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "10px 20px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.1em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>予約する</a>
            </nav>
          </div>
        </header>

        <div className="hero-inner">
          <div className="hero-text">
            <h1 style={{ margin: "0 0 24px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(42px, 6.4vw, 76px)", lineHeight: 1.35, letterSpacing: "0.1em" }}>
              <span style={{ color: "#9b321f" }}>痛い</span>のに、<br />気持ちいい。
            </h1>
            <p style={{ margin: "0 0 28px", fontFamily: "'Shippori Mincho', serif", fontSize: "17px", letterSpacing: "0.08em" }}>
              <span style={{ display: "inline-block" }}>深く、ゆっくり、</span><span style={{ display: "inline-block" }}>足の奥までしみわたる。</span>
            </p>
            <p className="hero-loc" style={{ margin: "0 0 32px", fontSize: "12px", color: "#5c5c5c", letterSpacing: "0.12em" }}>
              西東京市ひばりが丘｜完全予約制の一人店
            </p>
            <div className="hero-cta">
              <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011/book/course_type?courseCanonicalId=947238" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "15px 40px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>予約する</a>
              <Link href="#menu" style={{ color: "#1a1a1a", fontSize: "14px", textUnderlineOffset: "6px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>メニューと料金</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 初めての方へ（折りたたみ） */}
      <section id="first" style={{ borderBottom: "1px solid #ebe9e4", background: "#f8f6f1" }}>
        <details style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
          <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", padding: "28px 0", minHeight: "44px" }}>
            <span style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "6px 20px" }}>
              <span style={{ fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(22px, 2.6vw, 26px)", letterSpacing: "0.1em", color: "#1a1a1a" }}>初めての方へ</span>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#9b321f" }}>※初めての方は必ずご覧ください</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#1a1a1a" }}>
              開く
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 5l4 4 4-4" fill="none" stroke="#1a1a1a" strokeWidth="1.4"></path></svg>
            </span>
          </summary>
          <div style={{ padding: "8px 0 48px" }}>
            <div style={{ flex: "3 1 640px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "28px 36px" }}>
              <div style={{ borderTop: "1px solid #9b321f", paddingTop: "18px" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "19px", letterSpacing: "0.06em" }}>左足トライアル</h3>
                <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "14px" }}>合わなければ、お代は頂きません。</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>60分・90分枠が対象です。まず左足から始め、片足が終わった時点で「合わない」と感じたら、そこで終了します。</p>
              </div>
              <div style={{ borderTop: "1px solid #ebe9e4", paddingTop: "18px" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "19px", letterSpacing: "0.06em" }}>枠の中ですべて完結</h3>
                <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "14px" }}>遅れても、終了時間は変わりません。</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>施術・お着替え・お会計まで、予約した枠の中で終わります。延長のおすすめはしません。待合スペースはないので、到着は10分前ごろに。</p>
              </div>
              <div style={{ borderTop: "1px solid #ebe9e4", paddingTop: "18px" }}>
                <h3 style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontWeight: 600, fontSize: "19px", letterSpacing: "0.06em" }}>予約のお約束</h3>
                <p style={{ margin: "0 0 8px", fontWeight: 700, fontSize: "14px" }}>当日キャンセルでも、キャンセル料は頂きません。</p>
                <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>ただし、無断キャンセルの場合と、直前のキャンセルが続く場合は、以降のご予約をお受けしないことがあります。</p>
              </div>
            </div>
            <p style={{ margin: "32px 0 0" }}>
              <Link href="/first" style={{ color: "#1a1a1a", fontSize: "13px", textUnderlineOffset: "6px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>服装・流れ・アクセスを詳しく見る</Link>
            </p>
          </div>
        </details>
      </section>

      {/* クチコミ（Voices） */}
      <section style={{ borderBottom: "1px solid #ebe9e4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 24px", display: "flex", flexWrap: "wrap", gap: "32px 0", alignItems: "center" }}>
          <div style={{ flex: "1 1 280px", minWidth: 0, paddingRight: "40px" }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Voices</p>
            <h2 style={{ margin: "0 0 10px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "24px", letterSpacing: "0.1em", lineHeight: 1.6 }}>足をお任せいただいた<br />方の声</h2>
            <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>Googleクチコミ <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#1a1a1a" }}>5.0</span></p>
          </div>
          <figure style={{ flex: "1 1 280px", minWidth: 0, margin: 0, padding: "4px 32px", borderLeft: "1px solid #ebe9e4" }}>
            <blockquote style={{ margin: "0 0 10px", fontFamily: "'Shippori Mincho', serif", fontSize: "16px", lineHeight: 1.95 }}>「行きは足が重かったのですが、帰りは足がスイスイと歩けました」</blockquote>
            <figcaption style={{ fontSize: "11px", color: "#5c5c5c" }}>STORESレビューより</figcaption>
          </figure>
          <figure style={{ flex: "1 1 280px", minWidth: 0, margin: 0, padding: "4px 32px", borderLeft: "1px solid #ebe9e4" }}>
            <blockquote style={{ margin: "0 0 10px", fontFamily: "'Shippori Mincho', serif", fontSize: "16px", lineHeight: 1.95 }}>「帰り道の軽くなった身体が忘れられず、また行きたいと思いました」</blockquote>
            <figcaption style={{ fontSize: "11px", color: "#5c5c5c" }}>STORESレビューより</figcaption>
          </figure>
        </div>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px 40px", fontSize: "12px", color: "#5c5c5c" }}>
          <a href="https://share.google/hoX4rSA5QB2lNpmHH" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a", textUnderlineOffset: "5px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>Googleクチコミを見る</a>
          <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/reviews" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a", textUnderlineOffset: "5px", marginLeft: "20px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>STORESレビューを見る</a>
        </div>
      </section>

      {/* 奥までしみわたる理由 */}
      <section>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 300px", minWidth: 0 }}>
            <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Method</p>
            <h2 style={{ margin: "0 0 24px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>奥までしみわたる理由</h2>
            <p style={{ margin: "0 0 28px", color: "#3d3a34", lineHeight: 2.1 }}>反射区を地図に、構造をたどる。足裏から膝裏まで、つながりごとほどく。台湾式の手技を土台に、身体の構造と神経の働きの知見を重ねています。</p>
            <Link href="/stance" style={{ color: "#1a1a1a", fontSize: "13px", textUnderlineOffset: "6px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>イタキモの考え方を読む</Link>
          </div>
          <div style={{ flex: "2 1 600px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "32px 24px" }}>
            <div>
              <img src="/images/reason-01.jpg" alt="指の関節にタコのある施術者の手が、足裏を押している" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", marginBottom: "18px", background: "#f1efea" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "18px", color: "#9b321f", marginRight: "10px" }}>01</span>反射区だけにこだわらない</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>反射区だけを狙うのではなく、イタ気持ちよさを目印に、ゆっくり深くほぐします。それでも「ピンポイントで押されているみたい」と言われることがよくあります。</p>
            </div>
            <div>
              <img src="/images/reason-02.jpg" alt="親指でふくらはぎを押す施術の手元" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", marginBottom: "18px", background: "#f1efea" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "18px", color: "#9b321f", marginRight: "10px" }}>02</span>足に合わせて、圧を変える</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>硬かった場所がゆるめば、圧の届き方も変わります。その変化に合わせて圧を変え、最初から最後まで、イタ気持ちいいまま揉んでいきます。</p>
            </div>
            <div>
              <img src="/images/reason-03.jpg" alt="リクライニングチェア、赤いスツール、ふわふわのラグがある、一人用の施術スペース" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover", marginBottom: "18px", background: "#f1efea" }} />
              <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700 }}><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 500, fontSize: "18px", color: "#9b321f", marginRight: "10px" }}>03</span>一人ひとりに向き合う</h3>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>完全予約制の一人店。あなたの枠の間、この部屋は貸切です。他のお客様と顔を合わせることはありません。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 店主（墨色の帯） */}
      <section style={{ background: "#2d2c28", color: "#fefdfa" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "stretch" }}>
          <div style={{ flex: "1 1 440px", minWidth: 0, minHeight: "520px", position: "relative", background: "#3a3833" }}>
            <img src="/images/owner.jpg" alt="スツールに座って足を揉む店主" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 45%" }} />
          </div>
          <div style={{ flex: "1 1 440px", minWidth: 0, display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "540px", padding: "88px 24px 88px 56px", boxSizing: "border-box" }}>
              <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#e07a63" }}>Owner</p>
              <h2 style={{ margin: "0 0 28px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 32px)", letterSpacing: "0.1em", lineHeight: 1.6 }}>足を揉むのが、<br />好きで仕方ない。</h2>
              <p style={{ margin: "0 0 18px", color: "#e7e2d8", lineHeight: 2.1 }}>毎日、足を揉んでいます。それでも飽きるどころか、毎日新しい発見があります。同じ足は一つもないからです。</p>
              <p style={{ margin: "0 0 28px", color: "#e7e2d8", lineHeight: 2.1 }}>足つぼにゴールはないと思っています。次にお会いするときは、今日より上手くなっていたい。そのために学び続けています。</p>
              <p style={{ margin: "0 0 24px", fontSize: "13px", color: "#b8b3a8" }}>店主　福助</p>
              <Link href="/stance" style={{ color: "#fefdfa", fontSize: "13px", textUnderlineOffset: "6px", minHeight: "44px", display: "inline-flex", alignItems: "center" }}>店主のスタンスを読む</Link>
            </div>
          </div>
        </div>
      </section>

      {/* メニュー・料金 */}
      <section id="menu" style={{ borderBottom: "1px solid #ebe9e4", position: "relative", overflow: "hidden" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", left: "-90px", top: "40px", width: "420px", height: "auto", opacity: 0.07, transform: "scaleX(-1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 24px", position: "relative" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 48px" }}>
            <div style={{ flex: "1 1 260px", minWidth: 0 }}>
              <p style={{ margin: "0 0 6px", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "17px", color: "#9b321f" }}>Menu</p>
              <h2 style={{ margin: "0 0 16px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(24px, 3vw, 30px)", letterSpacing: "0.1em" }}>メニュー・料金</h2>
              <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34" }}>はじめての方には60分枠がおすすめです。足の奥までしみわたる感覚を、一番味わいやすい長さです。</p>
            </div>
            <div style={{ flex: "3 1 640px", minWidth: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 0 }}>
              <div style={{ padding: "0 28px 28px", borderLeft: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700 }}>30分</p>
                <p style={{ margin: "0 0 12px", fontSize: "12px", color: "#5c5c5c" }}>短時間で足をリセット</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>初回 <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", color: "#1a1a1a" }}>3,500</span>円</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>2回目以降 3,300円</p>
              </div>
              <div style={{ padding: "0 28px 28px", borderLeft: "1px solid #ebe9e4" }}>
                <p style={{ margin: "0 0 4px", fontSize: "13px", fontWeight: 700 }}>60分 <span style={{ marginLeft: "6px", fontSize: "10px", fontWeight: 500, color: "#9b321f", border: "1px solid #9b321f", borderRadius: "2px", padding: "1px 6px" }}>はじめての方に</span></p>
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
          <div style={{ marginTop: "40px", paddingTop: "28px", borderTop: "1px solid #ebe9e4", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px 40px" }}>
            <div style={{ flex: "1 1 480px", minWidth: 0 }}>
              <p style={{ margin: "0 0 6px", fontFamily: "'Shippori Mincho', serif", fontSize: "17px" }}>通ってくださる方ほど安くなるのが、正しいと思っています。</p>
              <p style={{ margin: 0, fontSize: "12px", color: "#5c5c5c" }}>2回目以降は、間隔が空いてもずっと継続料金です。さらに予約時にカード決済をされると、60分・90分は500円、30分は300円お安くなり、施術後のお会計もなくそのままお帰りいただけます。</p>
            </div>
            <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "15px 36px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>空き枠を見る</a>
          </div>
        </div>
      </section>

      {/* 最後の予約導線 */}
      <section style={{ position: "relative", overflow: "hidden", background: "#fefdfa", borderTop: "1px solid #ebe9e4" }}>
        <img src="/logo/mark.svg" alt="" style={{ position: "absolute", right: "-80px", bottom: "-50px", width: "560px", maxWidth: "90%", height: "auto", opacity: 0.12, pointerEvents: "none" }} />
        <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "104px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "32px" }}>
          <div>
            <h2 style={{ margin: "0 0 12px", fontFamily: "'Shippori Mincho', serif", fontWeight: 500, fontSize: "clamp(28px, 3.6vw, 40px)", letterSpacing: "0.12em" }}>足に、ご褒美を。</h2>
            <p style={{ margin: 0, fontSize: "13px", color: "#3d3a34", letterSpacing: "0.1em" }}>日々の一歩を、軽やかに。</p>
          </div>
          <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011" style={{ background: "#9b321f", color: "#ffffff", textDecoration: "none", padding: "16px 48px", borderRadius: "3px", fontWeight: 500, letterSpacing: "0.12em", minHeight: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}>予約する</a>
        </div>
      </section>

      {/* フッター */}
      <footer style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px 56px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "28px 48px", fontSize: "12px", color: "#5c5c5c" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <img src="/logo/logo-horizontal-web.svg" alt="足つぼ専門店 イタキモ" style={{ display: "block", height: "52px", width: "auto", alignSelf: "flex-start" }} />
          <div>
            <p style={{ margin: 0 }}>東京都西東京市ひばりが丘3丁目2−51 HIBARIDO 2F R-09（<Link href="/first#access" style={{ color: "#5c5c5c" }}>アクセス</Link>）</p>
            <p style={{ margin: 0 }}>水・木 9:00–22:40／その他の日は 21:10–22:40（週により異なります）</p>
            <p style={{ margin: 0 }}>fukusuke@itakimo.net　／　<a href="https://www.instagram.com/fukusuke.ashiya/" target="_blank" rel="noopener noreferrer" style={{ color: "#5c5c5c" }}>Instagram</a>　／　<a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/contact" target="_blank" rel="noopener noreferrer" style={{ color: "#5c5c5c" }}>お問い合わせ</a></p>
          </div>
        </div>
        <p style={{ flex: "1 1 360px", minWidth: 0, margin: 0, lineHeight: 1.9 }}>当店の施術はリラクゼーションを目的としたものであり、医療行為・治療行為にはあたりません。疾病の診断・治療・予防を目的とするものではございません。体調に不安のある方は、事前に医師にご相談ください。</p>
      </footer>
    </div>
  );
}
