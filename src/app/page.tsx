"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* ─── Scroll Reveal Hook ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Nav ─── */
function Nav() {
  return (
    <nav
      id="nav"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5"
      style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(28,28,26,0.7)", borderBottom: "1px solid rgba(245,245,244,0.06)" }}
    >
      <a href="#hero" className="font-accent font-bold text-xl tracking-tight">
        Re<span style={{ color: "#a7f3d0" }}>:</span>boot
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#a1a1aa" }}>
        <a href="#intro" className="hover:text-white transition-colors duration-200">Introduction</a>
        <a href="#approach" className="hover:text-white transition-colors duration-200">Approach</a>
        <a href="#artisan" className="hover:text-white transition-colors duration-200">Artisan</a>
        <a href="#menu" className="hover:text-white transition-colors duration-200">Menu</a>
        <a
          href="#menu"
          className="font-accent px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
          style={{ border: "1px solid rgba(167,243,208,0.4)", color: "#a7f3d0" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(167,243,208,0.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
          }}
        >
          予約する
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-end pb-20 md:pb-28 px-8 md:px-16 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 img-placeholder">
        <Image
          src="/images/hero-placeholder.png"
          alt="Re:boot 施術空間"
          fill
          priority
          className="object-cover"
          style={{ opacity: 0.55 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #1c1c1a 0%, rgba(28,28,26,0.4) 50%, rgba(28,28,26,0.1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="section-label mb-5 reveal">Neural Reset &amp; Foot Reflexology · Hibarigaoka</p>
        <h1
          className="font-accent font-bold leading-none mb-7 reveal reveal-delay-1"
          style={{ fontSize: "clamp(4rem, 14vw, 11rem)", letterSpacing: "-0.04em" }}
        >
          Re<span style={{ color: "#a7f3d0" }}>:</span>boot
        </h1>
        <p
          className="font-light leading-relaxed reveal reveal-delay-2"
          style={{ fontSize: "clamp(1rem, 2.2vw, 1.35rem)", maxWidth: "36rem", color: "rgba(245,245,244,0.8)" }}
        >
          足裏から脳をスイッチ。<br />
          心地よいまどろみののち、本来のニュートラルな状態へ。
        </p>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal reveal-delay-3"
        style={{ color: "#a1a1aa" }}
      >
        <span className="font-accent text-xs tracking-widest uppercase">Scroll</span>
        <span style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #a1a1aa, transparent)", display: "block" }} />
      </div>
    </section>
  );
}

/* ─── Introduction ─── */
function Introduction() {
  return (
    <section id="intro" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-8 reveal">Introduction</p>
        <h2
          className="font-light leading-tight mb-12 reveal reveal-delay-1"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          心と身体が、<br />
          <span style={{ color: "#a7f3d0" }}>ふっと凪ぐ場所。</span>
        </h2>
        <div
          className="reveal reveal-delay-2 font-light leading-loose"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "rgba(245,245,244,0.75)", maxWidth: "42rem" }}
        >
          <p>
            細胞が身構えない、絶妙な痛気持ちよさ。<br />
            張り詰めていたスイッチをそっとオフにして、心と身体をまっさらに。
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-16 reveal reveal-delay-3" style={{ width: "100%", height: 1, background: "linear-gradient(to right, rgba(167,243,208,0.4), transparent)" }} />
      </div>
    </section>
  );
}

/* ─── Approach ─── */
const pillars = [
  {
    num: "01",
    title: "閾値のコントロール",
    sub: "痛さレベルの精密な調整",
    body: "痛みがストレスに変わる一歩手前。脳が「安全」と認識する極限の刺激を、施術者が精密にコントロールします。その境界線上にこそ、身体が本当に脱力するゾーンがあります。",
  },
  {
    num: "02",
    title: "呼吸の変容",
    sub: "無意識から意識へ、そして再び無意識へ",
    body: "施術に合わせ、呼吸のリズムが自然と深まっていきます。浅く速かった呼吸が、ゆっくりと、腹の底から湧き上がるように変わるとき、自律神経のスイッチが切り替わります。",
  },
  {
    num: "03",
    title: "まどろみによる再起動",
    sub: "心身のシステムリセット",
    body: "眠っているのか起きているのかわからない「あわい」の時間。完全な眠りとも覚醒とも異なるその状態でこそ、フリーズしていた心身のシステムが静かに、完全に、再起動します。",
  },
];

function Approach() {
  return (
    <section id="approach" className="py-32 md:py-48 px-8 md:px-16" style={{ backgroundColor: "#1e1e1c" }}>
      <div className="max-w-5xl mx-auto">
        <p className="section-label mb-8 reveal">Our Approach</p>
        <h2
          className="font-light leading-tight mb-20 reveal reveal-delay-1"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          3つの柱が生む、<span style={{ color: "#a7f3d0" }}>深い解放。</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`pillar-card rounded-2xl p-8 reveal reveal-delay-${i + 1}`}
            >
              <span
                className="font-accent font-bold block mb-5"
                style={{ fontSize: "2.5rem", color: "rgba(167,243,208,0.2)", lineHeight: 1 }}
              >
                {p.num}
              </span>
              <h3 className="font-medium mb-1" style={{ fontSize: "1.1rem" }}>{p.title}</h3>
              <p className="mb-5" style={{ fontSize: "0.75rem", color: "#a7f3d0", letterSpacing: "0.05em" }}>{p.sub}</p>
              <p className="font-light leading-relaxed" style={{ fontSize: "0.9rem", color: "rgba(245,245,244,0.65)" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Artisan Profile ─── */
function Artisan() {
  return (
    <section id="artisan" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div
          className="relative rounded-2xl overflow-hidden img-placeholder reveal"
          style={{ aspectRatio: "4/5" }}
        >
          <Image
            src="/images/artisan-placeholder.png"
            alt="福助 (ふくすけ) — Re:boot 施術者"
            fill
            className="object-cover"
            style={{ opacity: 0.8 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(28,28,26,0.6) 0%, transparent 50%)" }}
          />
        </div>

        {/* Text */}
        <div>
          <p className="section-label mb-8 reveal">Artisan</p>
          <h2
            className="font-accent font-bold leading-none mb-3 reveal reveal-delay-1"
            style={{ fontSize: "clamp(3rem, 7vw, 5rem)" }}
          >
            福助
          </h2>
          <p
            className="font-accent mb-10 reveal reveal-delay-1"
            style={{ fontSize: "1rem", color: "#a1a1aa", letterSpacing: "0.1em" }}
          >
            ふくすけ
          </p>
          <blockquote
            className="font-light leading-relaxed mb-10 reveal reveal-delay-2"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              borderLeft: "2px solid #a7f3d0",
              paddingLeft: "1.25rem",
              color: "rgba(245,245,244,0.9)",
            }}
          >
            「人を幸せにしたい」
          </blockquote>
          <p
            className="font-light leading-loose reveal reveal-delay-3"
            style={{ fontSize: "0.95rem", color: "rgba(245,245,244,0.65)" }}
          >
            それだけを羅針盤に、足裏と向き合い続けてきました。<br />
            テクニックは手段に過ぎない。<br />
            目の前の方が、ここを出るときに少しでも軽くなっていること。<br />
            そのシンプルな願いが、Re:bootのすべてです。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Technique Logic ─── */
function TechniqueLogic() {
  return (
    <section
      id="technique"
      className="py-32 md:py-48 px-8 md:px-16"
      style={{ backgroundColor: "#1e1e1c" }}
    >
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-8 reveal">Technique Logic</p>
        <h2
          className="font-light leading-tight mb-16 reveal reveal-delay-1"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          なぜ、<span style={{ color: "#a7f3d0" }}>「芯まで届く」</span>のか。
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal reveal-delay-2">
            <h3
              className="font-medium mb-4"
              style={{ fontSize: "1.1rem", color: "#a7f3d0" }}
            >
              閾値と脱力の関係
            </h3>
            <p
              className="font-light leading-loose"
              style={{ fontSize: "0.95rem", color: "rgba(245,245,244,0.7)" }}
            >
              人の身体は、痛みを感じると反射的に力が入ります。しかし「痛気持ちいい」という絶妙な閾値の範囲内にとどまり続けると、脳は防御反応をやめます。それが深い脱力の始まりです。
            </p>
          </div>
          <div className="reveal reveal-delay-3">
            <h3
              className="font-medium mb-4"
              style={{ fontSize: "1.1rem", color: "#a7f3d0" }}
            >
              芯まで届く刺激
            </h3>
            <p
              className="font-light leading-loose"
              style={{ fontSize: "0.95rem", color: "rgba(245,245,244,0.7)" }}
            >
              筋肉が緩んだとき、はじめて圧は真の深部に届きます。表面だけでなく、骨の際まで刺激が行き渡る感覚。それは単なる「強いマッサージ」ではなく、身体が自ら受け入れた深さです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Experience ─── */
function Experience() {
  return (
    <section id="experience" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-8 reveal">Experience</p>
        <h2
          className="font-light leading-tight mb-16 reveal reveal-delay-1"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          意識が溶け出す、<br />
          <span style={{ color: "#a7f3d0" }}>最高のまどろみ。</span>
        </h2>

        {/* Full-width image */}
        <div
          className="relative rounded-2xl overflow-hidden img-placeholder mb-16 reveal reveal-delay-2"
          style={{ aspectRatio: "16/7" }}
        >
          <Image
            src="/images/technique-placeholder.png"
            alt="施術イメージ"
            fill
            className="object-cover"
            style={{ opacity: 0.7 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(28,28,26,0.5))" }}
          />
        </div>

        <div
          className="space-y-7 font-light leading-loose reveal reveal-delay-3"
          style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "rgba(245,245,244,0.75)" }}
        >
          <p>
            それは、ただぐっすりと眠るのとは違います。完全に横たわらないリクライニングチェアだからこそ訪れる、眠っているのか起きているのかわからない、絶妙な「あわい」の時間。
          </p>
          <p>
            痛みがストレスに変わる一歩手前。脳が「安全」と認識する、極限の痛気持ちよさ。
          </p>
          <p>
            日常のプレッシャーで凝り固まった頭の中のノイズが、静かに、まっさらに塗り替えられていく――。
          </p>
          <p style={{ color: "#a7f3d0", fontWeight: 400 }}>
            フリーズしていた自律神経のスイッチを切り替え、心身を劇的にリセットする、これがRe:bootの真髄です。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Environment ─── */
function Environment() {
  return (
    <section
      id="environment"
      className="py-32 md:py-48 px-8 md:px-16 relative overflow-hidden"
      style={{ backgroundColor: "#1e1e1c" }}
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="section-label mb-8 reveal">Environment</p>
          <h2
            className="font-light leading-tight mb-10 reveal reveal-delay-1"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            リクライニングチェアの、<br />
            <span style={{ color: "#a7f3d0" }}>必然性。</span>
          </h2>
          <div
            className="font-light leading-loose reveal reveal-delay-2"
            style={{ fontSize: "0.95rem", color: "rgba(245,245,244,0.7)" }}
          >
            <p className="mb-5">
              完全に横たわると脳は「睡眠モード」に入ろうとします。しかし、完全に座った状態では緊張が抜けきれない。
            </p>
            <p className="mb-5">
              Re:bootが採用するリクライニング角度は、脳が「覚醒でも睡眠でもない」状態になる絶妙なポジション。
            </p>
            <p style={{ color: "#a7f3d0" }}>
              それが、施術の効果を最大限に引き出すための、環境設計です。
            </p>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative rounded-2xl overflow-hidden img-placeholder reveal reveal-delay-2"
          style={{ aspectRatio: "4/3" }}
        >
          <Image
            src="/images/chair-placeholder.png"
            alt="Re:boot リクライニングチェア"
            fill
            className="object-cover"
            style={{ opacity: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Menu ─── */
const menus = [
  {
    id: "quick",
    duration: "30",
    name: "Quick / Trial",
    nameJa: "クイック・お試し",
    price: "—",
    desc: "お忙しい日常の合間に。重さを感じる受容器を的確に捉え、即座に足を軽く整えます。はじめての方のお試しとしても最適。",
    featured: false,
  },
  {
    id: "reboot",
    duration: "60",
    name: "Re:boot",
    nameJa: "再起動コース",
    price: "—",
    desc: "Re:bootの真髄を体感するシグネチャーコース。深い休息状態を強制誘導し、システムレベルで心身を再起動させます。",
    featured: true,
  },
];

function Menu() {
  return (
    <section id="menu" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-4xl mx-auto">
        <p className="section-label mb-8 reveal">Menu</p>
        <h2
          className="font-light leading-tight mb-16 reveal reveal-delay-1"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          メニュー
        </h2>
        <div className="flex flex-col gap-5">
          {menus.map((m, i) => (
            <div
              key={m.id}
              id={`menu-${m.id}`}
              className={`menu-card ${m.featured ? "featured" : ""} rounded-2xl p-8 md:p-10 reveal reveal-delay-${i + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span
                      className="font-accent font-bold"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: m.featured ? "#a7f3d0" : "#f5f5f4" }}
                    >
                      {m.name}
                    </span>
                    <span
                      className="font-light"
                      style={{ fontSize: "0.85rem", color: "#a1a1aa" }}
                    >
                      {m.nameJa}
                    </span>
                  </div>
                  <p
                    className="font-light leading-relaxed"
                    style={{ fontSize: "0.9rem", color: "rgba(245,245,244,0.6)", maxWidth: "36rem" }}
                  >
                    {m.desc}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span
                    className="font-accent font-semibold"
                    style={{ fontSize: "2.5rem", color: m.featured ? "#a7f3d0" : "#f5f5f4", lineHeight: 1 }}
                  >
                    {m.duration}
                    <span className="text-sm font-normal ml-1" style={{ color: "#a1a1aa" }}>min</span>
                  </span>
                </div>
              </div>
              {m.featured && (
                <div
                  className="mt-6 pt-6"
                  style={{ borderTop: "1px solid rgba(167,243,208,0.15)" }}
                >
                  <a
                    href="#footer"
                    className="inline-flex items-center gap-2 font-accent font-medium text-sm transition-all duration-300"
                    style={{ color: "#a7f3d0" }}
                  >
                    予約・お問い合わせ
                    <span>→</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <p
          className="mt-8 font-light reveal reveal-delay-4"
          style={{ fontSize: "0.8rem", color: "#a1a1aa" }}
        >
          ※ 料金は別途ご案内いたします。初回ご来店の方はお試しコースがおすすめです。
        </p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      id="footer"
      className="py-20 px-8 md:px-16"
      style={{ borderTop: "1px solid rgba(245,245,244,0.06)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-accent font-bold text-3xl mb-2">
              Re<span style={{ color: "#a7f3d0" }}>:</span>boot
            </p>
            <p style={{ fontSize: "0.8rem", color: "#a1a1aa", letterSpacing: "0.08em" }}>
              Neural Reset &amp; Foot Reflexology
            </p>
          </div>

          {/* Info */}
          <div className="flex flex-col md:items-end gap-2">
            <p style={{ fontSize: "0.9rem", color: "rgba(245,245,244,0.75)" }}>
              📍 東京都 ひばりヶ丘
            </p>
            <div className="flex gap-5 mt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-200"
                style={{ color: "#a1a1aa" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a7f3d0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#a1a1aa")}
              >
                Instagram
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="transition-colors duration-200"
                style={{ color: "#a1a1aa" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#a7f3d0")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#a1a1aa")}
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            height: 1,
            background: "linear-gradient(to right, rgba(167,243,208,0.3), transparent)",
            marginBottom: "1.5rem",
          }}
        />
        <p style={{ fontSize: "0.75rem", color: "#a1a1aa" }}>
          © 2025 Re:boot. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Page() {
  useScrollReveal();

  return (
    <main style={{ backgroundColor: "#1c1c1a", color: "#f5f5f4" }}>
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
