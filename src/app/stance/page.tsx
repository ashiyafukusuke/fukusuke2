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
        url: "https://www.itakimo.net/og-image.png?v=4",
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
    images: ["https://www.itakimo.net/og-image.png?v=4"],
  },
};

export default function StancePage() {
  return (
    <div style={{ background: "#fefdfa", color: "#1a1a1a", fontFamily: "'Noto Sans JP', system-ui, sans-serif", fontSize: "15px", lineHeight: "1.85", letterSpacing: "0.04em" }}>
      {/* ヘッダー（上部固定） */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "#fefdfa", borderBottom: "1px solid #ebe9e4" }}>
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
              <h3><span className="n">05</span>本当に難しいのは、ちゃんとしたソフト。</h3>
              <p>強く揉めるのに、ソフトができない人はいないと思っています。難しいのは、ちゃんとしたソフトのほうです。強さは、合う・合わないを分ける線ではなく、その日の足に合わせて調整する手段のひとつです。</p>
              <p>実は私自身、受ける側では強めが苦手な痛がりです。だからこそ、痛みの加減には人一倍気を配っています。</p>
            </div>
            <div className="item">
              <h3><span className="n">06</span>感じ方は、刺激の強さだけでは決まらない。</h3>
              <p>足裏への刺激の感じ方は、強さだけで決まるわけではありません。これまでの経験や、受ける前の期待、そのときの気持ちによっても変わります。たとえ痛みがあっても、安心して身を委ねられていれば、それがリラックスにつながり、自律神経の働きにも影響するかもしれません。</p>
            </div>
            <div className="item">
              <h3><span className="n">07</span>治療ではなく、リラクゼーションとして。</h3>
              <p>私は治療家ではありませんし、治療を目的に足を揉むこともありません。それでも結果的に、リラックス以上の体感を得てもらえることがある。それが足揉みの良さなのだろうとは思っています。</p>
            </div>
            <div className="item">
              <h3><span className="n">08</span>相性は、施術者が合わせるもの。</h3>
              <p>合う・合わないは、お客様ではなく施術者の側が合わせにいくことだと考えています。「もう少し強く」「弱めに」「そこは軽めで」。遠慮なくお伝えください。弱めにと言われたら、圧を抜くだけでなく、触れ方そのものを変えます。</p>
            </div>
            <div className="item">
              <h3><span className="n">09</span>相手が誰でも、やることは同じ。</h3>
              <p>大会の審査員でも、初めての方でも、常連の方でも、施術の目的は変わりません。気持ちよく、楽しく帰ってもらうこと。そのために、その日の足と、その人の反応を見て進めています。</p>
            </div>
            <div className="item">
              <h3><span className="n">10</span>お客様の感じ方は、直さない。</h3>
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
              <h3><span className="n">11</span>足を、3つの視点で見る。</h3>
              <p>反射区をきっかけに、足の構造や筋肉の働き、歩き方にも目を向ける。足つぼの気持ちよさから、自分の身体を知る面白さへ。足つぼには、まだまだ奥があるのです。</p>
            </div>
            <div className="item">
              <h3><span className="n">12</span>疑うから、進化する。</h3>
              <p>反射区を、そのまま信じているわけではない。疑えないものは、信用できないと思っているから。それでも地図としては手放さず、目の前の足と照らし合わせながら、疑い続ける。イタキモの足つぼは、その繰り返しで変わってきた。</p>
            </div>
            <div className="item">
              <h3><span className="n">13</span>反射区の地図は、人が描き直してきたもの。</h3>
              <p>反射区の地図は、不変のものではなく、人が観察と解釈で描き直してきたものだと思います。人が作り、描き直してきた地図だと知っておくと、そのくらいの距離で付き合うのがちょうどいいのではないかと思います。</p>
              <p style={{ margin: "12px 0 0", fontSize: "13px" }}>
                <Link href="/blog/taiwan-style-origin" className="lnk" style={{ color: "#9b321f" }}><span>「台湾式の源流には、スイス人の神父がいた」を読む</span></Link>
              </p>
            </div>
            <div className="item">
              <h3><span className="n">14</span>つながりを、因果の断定に使わない。</h3>
              <p>反射区も、筋膜のつながりも、体の「つながり」を考えるための手がかりだと思っています。どこに目を向けるかのきっかけにはなります。ただ、離れた場所の不調の原因を言い当てるものではありません。反射区に医学的な裏付けがないことは、認めています。それでも、体感と重なることが多いのも、施術をしていて感じる実感です。イタキモでは、反射区を答えではなく、問いを立てるための手がかりとして使います。</p>
            </div>
            <div className="item">
              <h3><span className="n">15</span>反射区は、体の様子が足に表れる場所として見る。</h3>
              <p>反射区は、もともと「足のこの場所を押すと、体のあの場所に働きかける」という考え方で作られたものです。けれど、そのつながりは確かめられていません。</p>
              <p>イタキモでは向きを逆にして、体の使い方や負担が足に表れやすい場所として、反射区を見ています。こちらは、目の前の足で確かめられる見方です。</p>
            </div>
            <div className="item">
              <h3><span className="n">16</span>痛くない＝健康、とも限らない。</h3>
              <p>痛い＝悪いところ、とは限りません。逆に、痛くない＝健康、とも限りません。</p>
              <p>足裏は、靴の中の小さな砂粒ひとつにも気づけるほど、繊細な場所です。それなのに強く押しても何も感じないなら、足裏の感じ方が鈍くなっているのかもしれません。痛くないことも、足からのひとつの便りです。</p>
              <p>それでも、反射区が体の状態を映すという考え方には、一理あると思っています。土踏まずの縁には、胸椎・腰椎、つまり背骨の反射区が並んでいます。施術をしていると、ここが硬かったりゴリゴリしたりする方には、背中や腰に違和感がある方や、ふだんから負担をかけている自覚がある方が多いと感じます。</p>
              <p>この場所には、お尻から脚へ下りてくる坐骨神経の枝（内側足底神経）が通っています。また、足裏から背中、首へと続く筋膜のつながりの影響も出やすい場所だといわれます。</p>
              <p>反射区は、体感と重なることが多いのに、直接の因果関係は科学的には確かめられていない。なんとも不思議な理論です。</p>
            </div>
            <div className="item">
              <h3><span className="n">17</span>確かさを、3つの棚に分ける。</h3>
              <p>施術中にお話しすることは、どのくらい確かなことなのかを分けて考えています。</p>
              <dl className="shelf">
                <div><dt>確認された知識</dt><dd>解剖学の教科書などで確かめられる内容。筋肉の位置や、基本的な働きなど。</dd></div>
                <div><dt>伝統的な考え方</dt><dd>反射区の体系で、そう説明されていること。そう言われていることと、実際にその部位の状態がわかることは別です。</dd></div>
                <div><dt>仮説・未確認</dt><dd>可能性としては考えられても、あなたに当てはまるとは限らないこと。根拠が足りないことは、断定しません。</dd></div>
              </dl>
            </div>
            <div className="item">
              <h3><span className="n">18</span>硬い・柔らかいで、良し悪しを決めない。</h3>
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
              <h3><span className="n">19</span>不利なことは、先に書く。</h3>
              <p>予約のルールや、お受けできないことは、目立つところに先に書いています。キャンセルのルールも、はっきり決めています。ご予約は本名でなくてもかまいません。必要以上の個人情報は、お預かりしません。</p>
            </div>
            <div className="item">
              <h3><span className="n">20</span>ルールは、守ってくださる方への礼儀。</h3>
              <p>ルールは罰ではありません。時間を作って、約束どおりに来てくださる方への礼儀だと思っています。だから、ルールに感情は置きません。遅れることは誰にでもあるので、予約枠の前後には余白を取っています。</p>
              <p>ルールを先に書いておくのは、あとからお客様のことを悪く言わずに済むようにするためでもあります。</p>
            </div>
            <div className="item">
              <h3><span className="n">21</span>体調やご事情でのキャンセルは、ご連絡さえあれば大丈夫です。</h3>
              <p>足底筋膜炎やけがなどで足が痛むときは、無理をせず、キャンセルや日程変更をしてください。痛む足を揉むことで血流が促され、腫れや痛みがひどくなる場合もあります。また、足揉みは、押し手よりも支え手のほうが大切です。押す手では触らない場所の炎症やけがであっても、支え手側はしっかり触れる必要があることが、往々にしてあります。</p>
              <p>ご本人の体調不良はもちろん、お子さまの急な発熱や、ご家族の体調不良のときも同じです。目の前に心配ごとがある中で足を揉まれても、落ち着かないと思います。せっかく、口うるさい店主が営む足つぼ屋へのご来店を決めていただいたのですから、安心して足を預けていただける状況でお越しいただきたいと思っています。</p>
              <p>イタキモでは、無断キャンセルの方からは以降のご予約をお受けしていません。直前のキャンセルが続く場合も、お受けしないことがあります。ただ、これは「連絡のないまま枠が空いてしまうこと」を防ぐためのルールです。</p>
              <p>ご連絡をいただいた体調やご事情でのキャンセルは、直前であっても、基本的にこのルールの対象にはしません。キャンセル料もいただきません。わかった時点で、ひと言ご連絡ください。</p>
            </div>
            <div className="item">
              <h3><span className="n">22</span>合うかどうかは、お客様が決める。</h3>
              <p>初めての方は、まず左足から始めます。片足が終わった時点で「合わない」と感じたら、そこで終了。お代は頂きません。合うかどうかの判断は、お客様にお任せしています。</p>
              <p>合わなかったのにお代をいただいたら、もう足つぼに行こうとは思わないかもしれません。お代なしで終われば、ほかのお店を探してみようと思ってもらえるかもしれない。足つぼそのものへの入り口は、閉じたくないと思っています。</p>
            </div>
            <div className="item">
              <h3><span className="n">23</span>通ってくださる方ほど、安く。</h3>
              <p>通ってくださる方ほど安くなるのが、正しいと思っています。2回目以降は、間隔が空いてもずっと継続料金です。次回のご予約を、こちらからお勧めすることもありません。また来たいと思ったときに、来てください。</p>
            </div>
            <div className="item">
              <h3><span className="n">24</span>近くにいいお店があるなら、そこへ。</h3>
              <p>ちゃんと足を揉んでくれるお店なら、あとは通いやすさで選んでいい。足つぼは一回きりより、無理なく続けられることのほうが大事なので。だから、近くにいいお店があるなら、そこに通ってください。</p>
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
              <h3><span className="n">25</span>足つぼ屋から、足揉み屋へ。</h3>
              <p>いずれは、反射区も、解剖学も、体の動きのつながりも取り込んだ「足揉み屋」になりたいと思っています。今はその途中です。まずは、一般的な足つぼより少しだけ先に進んだ足つぼ屋を目指しています。</p>
              <p style={{ margin: "12px 0 0", fontSize: "13px" }}>
                <Link href="/blog" className="lnk" style={{ color: "#9b321f" }}><span>「足を疑うはなし」を読む</span></Link>
              </p>
            </div>
            {/*
            <div className="item" id="kuchikomi">
              <h3><span className="n">26</span>クチコミは、営業日を増やす力になる。</h3>
              <p>イタキモは広告を出していません。お店を知っていただく手段は、来てくださった方の言葉が中心です。</p>
              <p>クチコミで知ってくださる方が増えれば、お客様が増える。お客様が増えれば、一緒に働く人を迎えられる。人が増えれば、今は限られている営業日を増やせる。イタキモは、そういう順番で育てていきたいと思っています。</p>
              <p>だからといって、「書いてください」とお願いすることはしません。書いてもいいかな、と思っていただけたときに、感じたままを書いていただけたら嬉しいです。</p>
            </div>
            */}
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
