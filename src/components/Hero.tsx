"use client";
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden">
      {/* Prism accent line */}
      <div className="absolute top-0 left-0 right-0 prism-line" />

      <div className="relative z-10 max-w-5xl">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-8">
          Neural Reset &amp; Foot Reflexology
        </p>
        <h1 className="rv rv-d1 font-accent font-black tracking-[-0.05em] leading-[0.85] mb-10"
            style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
          Re<span className="prism-text">:</span>boot
        </h1>
        <p className="rv rv-d2 text-base md:text-lg font-light leading-loose max-w-xl text-neutral-600 mb-10">
          強すぎる刺激を避け、身体がホッとする「痛気持ちよさ」の境界線を見極める。<br />
          自律神経系を一度シャットダウンし、本来のニュートラルな状態へ。
        </p>
        <p className="rv rv-d3 font-accent text-[0.7rem] tracking-[0.25em] uppercase text-neutral-300">
          足つぼ ・ 足揉み専門店
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 rv rv-d3">
        <span className="font-accent text-[0.55rem] tracking-[0.3em] uppercase text-neutral-300">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-300 to-transparent" />
      </div>
    </section>
  );
}
