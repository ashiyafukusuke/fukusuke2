"use client";
import Image from "next/image";
import { useEffect } from "react";

/* ── Scroll Reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Nav ── */
function Nav() {
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1.1rem 4rem", backdropFilter:"blur(20px)", backgroundColor:"rgba(28,28,26,0.75)", borderBottom:"1px solid rgba(245,245,244,0.06)" }}>
      <span style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"1.3rem", letterSpacing:"-0.03em" }}>
        Re<span style={{ color:"#a7f3d0" }}>:</span>boot
      </span>
      <div style={{ display:"flex", gap:"2.5rem", fontFamily:"var(--font-u)", fontSize:"0.8rem", letterSpacing:"0.05em", color:"rgba(245,245,244,0.5)" }}>
        {["Approach","Artisan","Experience","Menu"].map((s) => (
          <a key={s} href={`#${s.toLowerCase()}`} style={{ transition:"color .2s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#f5f5f4")}
            onMouseLeave={e=>(e.currentTarget.style.color="rgba(245,245,244,0.5)")}>{s}</a>
        ))}
        <a href="#menu" style={{ border:"1px solid rgba(167,243,208,0.35)", color:"#a7f3d0", padding:"0.3rem 1.1rem", borderRadius:"999px", transition:"background .3s" }}
          onMouseEnter={e=>(e.currentTarget.style.background="rgba(167,243,208,0.1)")}
          onMouseLeave={e=>(e.currentTarget.style.background="transparent")}>予約</a>
      </div>
    </nav>
  );
}

/* ── Hero ── */
function Hero() {
  return (
    <section id="hero" style={{ position:"relative", height:"100svh", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"0 4rem 5rem", overflow:"hidden", background:"#1c1c1a" }}>
      {/* BG image */}
      <div style={{ position:"absolute", inset:0 }}>
        <Image src="/images/hero-placeholder.png" alt="Re:boot 空間" fill style={{ objectFit:"cover", opacity:0.45 }} priority />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, #1c1c1a 15%, rgba(28,28,26,0.3) 70%, rgba(28,28,26,0.05) 100%)" }} />
      </div>
      {/* Glow */}
      <div className="glow" style={{ width:500, height:500, background:"rgba(167,243,208,0.06)", top:"20%", right:"10%", position:"absolute" }} />

      <div style={{ position:"relative", zIndex:2 }}>
        <p className="eyebrow reveal" style={{ marginBottom:"1.5rem" }}>Neural Reset &amp; Foot Reflexology · Hibarigaoka</p>
        <h1 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:900, fontSize:"clamp(5rem,16vw,13rem)", lineHeight:0.9, letterSpacing:"-0.04em", marginBottom:"2rem" }}>
          Re<span style={{ color:"#a7f3d0" }}>:</span>boot
        </h1>
        <p className="reveal d2" style={{ fontFamily:"var(--font-noto)", fontWeight:300, fontSize:"clamp(1rem,1.8vw,1.2rem)", maxWidth:"30rem", lineHeight:1.9, color:"rgba(245,245,244,0.72)" }}>
          足裏から脳をスイッチ。<br />心地よいまどろみののち、本来のニュートラルな状態へ。
        </p>
      </div>

      {/* Scroll hint */}
      <div className="reveal d3" style={{ position:"absolute", bottom:"2rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:6 }}>
        <span style={{ fontFamily:"var(--font-u)", fontSize:"0.55rem", letterSpacing:"0.3em", color:"rgba(245,245,244,0.35)", textTransform:"uppercase" }}>Scroll</span>
        <div style={{ width:1, height:36, background:"linear-gradient(to bottom, rgba(245,245,244,0.3), transparent)" }} />
      </div>
    </section>
  );
}

/* ── Introduction ── */
function Introduction() {
  return (
    <section id="intro" style={{ background:"#222220", padding:"7rem 4rem", position:"relative", overflow:"hidden" }}>
      <div className="glow" style={{ width:600, height:600, background:"rgba(167,243,208,0.05)", top:"-20%", left:"60%", position:"absolute" }} />
      <div style={{ maxWidth:"52rem" }}>
        <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Introduction</p>
        <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"clamp(2.5rem,6vw,5rem)", lineHeight:1.1, letterSpacing:"-0.03em", marginBottom:"3rem" }}>
          心と身体が、<br />
          <span style={{ color:"#a7f3d0" }}>ふっと凪ぐ場所。</span>
        </h2>
        <p className="reveal d2" style={{ fontWeight:300, fontSize:"1rem", lineHeight:2, color:"rgba(245,245,244,0.58)", maxWidth:"36rem" }}>
          細胞が身構えない、絶妙な痛気持ちよさ。<br />
          張り詰めていたスイッチをそっとオフにして、心と身体をまっさらに。
        </p>
        <div className="hr-accent reveal d3" style={{ marginTop:"3.5rem", maxWidth:"20rem" }} />
      </div>
    </section>
  );
}

/* ── Approach ── */
const pillars = [
  { n:"01", title:"閾値のコントロール", en:"Threshold Control", body:"痛みがストレスに変わる一歩手前。脳が「安全」と認識する極限の刺激を、施術者が精密にコントロールします。その境界線上にこそ、身体が本当に脱力するゾーンがあります。" },
  { n:"02", title:"呼吸の変容", en:"Breath Shift", body:"施術に合わせ、呼吸のリズムが自然と深まっていきます。浅く速かった呼吸が、ゆっくりと、腹の底から湧き上がるように変わるとき、自律神経のスイッチが切り替わります。" },
  { n:"03", title:"まどろみによる再起動", en:"Reboot via Liminal Sleep", body:"眠っているのか起きているのかわからない「あわい」の時間。完全な眠りとも覚醒とも異なるその状態でこそ、フリーズしていた心身のシステムが静かに、完全に、再起動します。" },
];

function Approach() {
  return (
    <section id="approach" style={{ background:"#1c1c1a", padding:"7rem 4rem" }}>
      <div style={{ maxWidth:"64rem", margin:"0 auto" }}>
        <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Our Approach</p>
        <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"clamp(2.2rem,5vw,4rem)", letterSpacing:"-0.03em", marginBottom:"4rem", lineHeight:1.1 }}>
          3つの柱が生む、深い解放。
        </h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"1.25rem" }}>
          {pillars.map((p, i) => (
            <div key={p.n} className={`pillar reveal d${i+1}`}>
              <span style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"3rem", color:"rgba(245,245,244,0.06)", display:"block", lineHeight:1, marginBottom:"1.25rem" }}>{p.n}</span>
              <p style={{ fontFamily:"var(--font-u)", fontSize:"0.62rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(245,245,244,0.35)", marginBottom:"0.5rem" }}>{p.en}</p>
              <h3 style={{ fontSize:"1.05rem", fontWeight:500, marginBottom:"1rem" }}>{p.title}</h3>
              <p style={{ fontSize:"0.875rem", fontWeight:300, lineHeight:1.9, color:"rgba(245,245,244,0.55)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Artisan ── */
function Artisan() {
  return (
    <section id="artisan" style={{ background:"#222220", padding:"7rem 4rem", position:"relative", overflow:"hidden" }}>
      <div className="glow" style={{ width:500, height:500, background:"rgba(167,243,208,0.04)", bottom:"-10%", right:"5%", position:"absolute" }} />
      <div style={{ maxWidth:"64rem", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
        {/* Image slot */}
        <div className="img-slot reveal" style={{ aspectRatio:"4/5" }}>
          <Image src="/images/artisan-placeholder.png" alt="福助" fill style={{ objectFit:"cover", opacity:0.8 }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(34,34,32,0.7) 0%, transparent 50%)" }} />
          <span className="badge">Artisan — Fukusuke</span>
        </div>
        {/* Text */}
        <div>
          <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Artisan</p>
          <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:900, fontSize:"clamp(4rem,9vw,7rem)", lineHeight:0.9, letterSpacing:"-0.04em", marginBottom:"0.5rem" }}>福助</h2>
          <p className="reveal d1" style={{ fontFamily:"var(--font-u)", fontSize:"0.8rem", letterSpacing:"0.2em", color:"rgba(245,245,244,0.35)", marginBottom:"2.5rem" }}>Fukusuke</p>
          <blockquote className="reveal d2" style={{ fontSize:"1.35rem", fontWeight:300, lineHeight:1.8, borderLeft:"2px solid rgba(167,243,208,0.5)", paddingLeft:"1.25rem", marginBottom:"2rem", maxWidth:"28rem" }}>
            「人を幸せにしたい」
          </blockquote>
          <p className="reveal d3" style={{ fontSize:"0.875rem", fontWeight:300, lineHeight:2, color:"rgba(245,245,244,0.55)", maxWidth:"28rem" }}>
            それだけを羅針盤に、足裏と向き合い続けてきました。テクニックは手段に過ぎない。目の前の方が、ここを出るときに少しでも軽くなっていること。そのシンプルな願いが、Re:bootのすべてです。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Technique Logic ── */
function TechniqueLogic() {
  return (
    <section id="technique" style={{ background:"#1c1c1a", padding:"7rem 4rem" }}>
      <div style={{ maxWidth:"64rem", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"start" }}>
        <div>
          <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Technique Logic</p>
          <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"clamp(2.2rem,5vw,4rem)", letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"0" }}>
            なぜ、「芯まで<br />届く」のか。
          </h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:"2.5rem", paddingTop:"0.5rem" }}>
          {[
            { label:"閾値と脱力", body:"人の身体は、痛みを感じると反射的に力が入ります。しかし「痛気持ちいい」という絶妙な閾値の範囲内にとどまり続けると、脳は防御反応をやめます。それが深い脱力の始まりです。" },
            { label:"芯まで届く圧", body:"筋肉が緩んだとき、はじめて圧は真の深部に届きます。表面だけでなく、骨の際まで刺激が行き渡る感覚。それは単なる「強いマッサージ」ではなく、身体が自ら受け入れた深さです。" },
          ].map((item, i) => (
            <div key={item.label} className={`reveal d${i+2}`}>
              <h3 style={{ fontFamily:"var(--font-u)", fontSize:"0.75rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(245,245,244,0.4)", marginBottom:"0.75rem" }}>{item.label}</h3>
              <p style={{ fontSize:"0.875rem", fontWeight:300, lineHeight:1.95, color:"rgba(245,245,244,0.58)", maxWidth:"28rem" }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Experience ── */
function Experience() {
  return (
    <section id="experience" style={{ background:"#222220", padding:"7rem 4rem", position:"relative", overflow:"hidden" }}>
      <div className="glow" style={{ width:700, height:700, background:"rgba(167,243,208,0.04)", top:"0%", left:"50%", position:"absolute" }} />
      <div style={{ maxWidth:"64rem", margin:"0 auto" }}>
        <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Experience</p>
        <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"clamp(2.2rem,5vw,4rem)", letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"3.5rem" }}>
          意識が溶け出す、<br />最高のまどろみ。
        </h2>

        {/* Wide image */}
        <div className="img-slot reveal d2" style={{ aspectRatio:"16/7", marginBottom:"3.5rem" }}>
          <Image src="/images/technique-placeholder.png" alt="施術イメージ" fill style={{ objectFit:"cover", opacity:0.65 }} />
          <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center, transparent 35%, rgba(34,34,32,0.55))" }} />
          <span className="badge">実空間写真に差し替え予定</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"3rem", alignItems:"start" }}>
          <div className="reveal d2" style={{ fontSize:"0.9rem", fontWeight:300, lineHeight:2, color:"rgba(245,245,244,0.6)" }}>
            <p style={{ marginBottom:"1.25rem" }}>それは、ただぐっすりと眠るのとは違います。完全に横たわらないリクライニングチェアだからこそ訪れる、眠っているのか起きているのかわからない、絶妙な「あわい」の時間。</p>
            <p>痛みがストレスに変わる一歩手前。脳が「安全」と認識する、極限の痛気持ちよさ。</p>
          </div>
          <div className="reveal d3" style={{ fontSize:"0.9rem", fontWeight:300, lineHeight:2, color:"rgba(245,245,244,0.6)" }}>
            <p style={{ marginBottom:"1.25rem" }}>日常のプレッシャーで凝り固まった頭の中のノイズが、静かに、まっさらに塗り替えられていく――。</p>
            <p style={{ color:"rgba(167,243,208,0.85)", fontWeight:400 }}>フリーズしていた自律神経のスイッチを切り替え、心身を劇的にリセットする。これがRe:bootの真髄です。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Environment ── */
function Environment() {
  return (
    <section id="environment" style={{ background:"#1c1c1a", padding:"7rem 4rem" }}>
      <div style={{ maxWidth:"64rem", margin:"0 auto", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" }}>
        <div>
          <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Environment</p>
          <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"clamp(2.2rem,5vw,4rem)", letterSpacing:"-0.03em", lineHeight:1.1, marginBottom:"2.5rem" }}>
            リクライニング<br />チェアの必然性。
          </h2>
          <div className="reveal d2" style={{ display:"flex", flexDirection:"column", gap:"1.25rem", fontSize:"0.875rem", fontWeight:300, lineHeight:1.95, color:"rgba(245,245,244,0.58)", maxWidth:"28rem" }}>
            <p>完全に横たわると脳は「睡眠モード」に入ろうとします。しかし、完全に座った状態では緊張が抜けきれない。</p>
            <p>Re:bootが採用するリクライニング角度は、脳が「覚醒でも睡眠でもない」状態になる絶妙なポジション。それが、施術の効果を最大限に引き出すための、環境設計です。</p>
          </div>
        </div>
        {/* Image */}
        <div className="img-slot reveal d2" style={{ aspectRatio:"4/3" }}>
          <Image src="/images/chair-placeholder.png" alt="Re:boot チェア" fill style={{ objectFit:"cover", opacity:0.8 }} />
          <span className="badge">The Chair — Hibarigaoka</span>
        </div>
      </div>
    </section>
  );
}

/* ── Menu ── */
const menus = [
  { id:"quick", dur:"30", name:"Quick / Trial", ja:"クイック・お試し", desc:"お忙しい日常の合間に。重さを感じる受容器を的確に捉え、即座に足を軽く整えます。はじめての方のお試しとしても最適です。", accent:false },
  { id:"reboot", dur:"60", name:"Re:boot", ja:"再起動コース", desc:"Re:bootの真髄を体感するシグネチャーコース。深い休息状態を強制誘導し、システムレベルで心身を再起動させます。", accent:true },
];

function Menu() {
  return (
    <section id="menu" style={{ background:"#222220", padding:"7rem 4rem" }}>
      <div style={{ maxWidth:"52rem", margin:"0 auto" }}>
        <p className="eyebrow reveal" style={{ marginBottom:"2rem" }}>Menu</p>
        <h2 className="reveal d1" style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"clamp(2.5rem,6vw,5rem)", letterSpacing:"-0.03em", marginBottom:"3.5rem", lineHeight:1 }}>
          メニュー
        </h2>
        <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
          {menus.map((m, i) => (
            <div key={m.id} id={`menu-${m.id}`}
              className={`menu-card${m.accent ? " accent" : ""} reveal d${i+1}`}
              style={{ padding:"2rem 2.25rem" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"2rem" }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"baseline", gap:"0.75rem", marginBottom:"0.75rem" }}>
                    <span style={{ fontFamily:"var(--font-u)", fontWeight:700, fontSize:"1.4rem", color: m.accent ? "#a7f3d0" : "#f5f5f4" }}>{m.name}</span>
                    <span style={{ fontSize:"0.75rem", color:"rgba(245,245,244,0.35)", letterSpacing:"0.05em" }}>{m.ja}</span>
                  </div>
                  <p style={{ fontSize:"0.85rem", fontWeight:300, lineHeight:1.85, color:"rgba(245,245,244,0.5)", maxWidth:"32rem" }}>{m.desc}</p>
                  {m.accent && (
                    <a href="#footer" style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", marginTop:"1.25rem", fontSize:"0.78rem", fontFamily:"var(--font-u)", color:"#a7f3d0", letterSpacing:"0.08em" }}>
                      予約・お問い合わせ <span>→</span>
                    </a>
                  )}
                </div>
                <div style={{ textAlign:"right", flexShrink:0 }}>
                  <span style={{ fontFamily:"var(--font-u)", fontWeight:800, fontSize:"2.75rem", lineHeight:1, color: m.accent ? "#a7f3d0" : "rgba(245,245,244,0.8)" }}>{m.dur}</span>
                  <span style={{ display:"block", fontFamily:"var(--font-u)", fontSize:"0.65rem", letterSpacing:"0.15em", color:"rgba(245,245,244,0.3)", marginTop:"0.2rem" }}>MIN</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="reveal d4" style={{ marginTop:"1.5rem", fontSize:"0.72rem", color:"rgba(245,245,244,0.3)", lineHeight:1.7 }}>
          ※ 料金は別途ご案内いたします。初回ご来店の方はQuickコースがおすすめです。
        </p>
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer id="footer" style={{ background:"#1c1c1a", padding:"4rem 4rem 3rem", borderTop:"1px solid rgba(245,245,244,0.06)" }}>
      <div style={{ maxWidth:"64rem", margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:"3rem", flexWrap:"wrap", gap:"2rem" }}>
          <div>
            <p style={{ fontFamily:"var(--font-u)", fontWeight:900, fontSize:"2rem", letterSpacing:"-0.04em", marginBottom:"0.35rem" }}>
              Re<span style={{ color:"#a7f3d0" }}>:</span>boot
            </p>
            <p style={{ fontFamily:"var(--font-u)", fontSize:"0.65rem", letterSpacing:"0.25em", textTransform:"uppercase", color:"rgba(245,245,244,0.3)" }}>Neural Reset &amp; Foot Reflexology</p>
          </div>
          <div style={{ textAlign:"right" }}>
            <p style={{ fontSize:"0.85rem", color:"rgba(245,245,244,0.5)", marginBottom:"0.75rem" }}>📍 東京都 ひばりヶ丘</p>
            <div style={{ display:"flex", gap:"1.5rem", justifyContent:"flex-end" }}>
              {["Instagram","X / Twitter"].map((s) => (
                <a key={s} href="#" style={{ fontFamily:"var(--font-u)", fontSize:"0.75rem", color:"rgba(245,245,244,0.35)", transition:"color .2s" }}
                  onMouseEnter={e=>(e.currentTarget.style.color="#a7f3d0")}
                  onMouseLeave={e=>(e.currentTarget.style.color="rgba(245,245,244,0.35)")}>{s}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="hr-accent" style={{ marginBottom:"1.5rem" }} />
        <p style={{ fontSize:"0.7rem", color:"rgba(245,245,244,0.2)", fontFamily:"var(--font-u)" }}>© 2025 Re:boot. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ── Page ── */
export default function Page() {
  useReveal();
  return (
    <main>
      <Nav />
      <Hero />
      <Introduction />
      <Approach />
      <Artisan />
      <TechniqueLogic />
      <Experience />
      <Environment />
      <Menu />
      <Footer />
    </main>
  );
}
