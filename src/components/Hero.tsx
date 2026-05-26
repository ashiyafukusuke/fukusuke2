"use client";
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden bg-white text-black">
      <div className="absolute top-0 left-0 right-0 prism-line" />
      <div className="relative z-10 max-w-5xl">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-8">
          Neural Reset &amp; Foot Reflexology
        </p>
        <h1 className="rv rv-d1 font-accent font-black tracking-[-0.05em] leading-[0.85] mb-10 text-black"
            style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
          Re<span className="prism-text">:</span>boot
        </h1>
        <p className="rv rv-d2 text-base md:text-lg font-light leading-loose max-w-xl text-neutral-800 mb-10 text-left">
          芯まで響く痛気持ちよさ。足裏から脳へ響かせ、本来のニュートラルな状態へ。<br />
          脳のノイズを静かに塗り替え、フリーズしていた自律神経のスイッチをそっとオフに。
        </p>
        <p className="rv rv-d3 font-accent text-[0.7rem] tracking-[0.25em] uppercase text-neutral-500">
          足つぼ ・ 足揉み専門店
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 rv rv-d3">
        <span className="font-accent text-[0.55rem] tracking-[0.3em] uppercase text-neutral-500">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
}
