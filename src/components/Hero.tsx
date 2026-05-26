"use client";
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-8 md:px-20 overflow-hidden bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="absolute top-0 left-0 w-1/3 wa-line" />
      <div className="relative z-10 w-full max-w-5xl text-left">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-500 mb-8">
          NEURAL RESET &amp; FOOT REFLEXOLOGY
        </p>
        <h1 className="rv rv-d1 font-accent font-black tracking-[-0.05em] leading-[0.85] mb-10 text-[#1A1A1A]"
            style={{ fontSize: "clamp(6rem, 18vw, 16rem)" }}>
          Re<span className="wa-text">:</span>boot
        </h1>
        <p className="rv rv-d2 text-base md:text-lg font-light leading-loose max-w-xl text-neutral-800 mb-10">
          足裏から脳をスイッチ。心地よいまどろみののち、本来のニュートラルな状態へ。<br />
          脳のノイズを静かに塗り替え、フリーズしていた自律神経のスイッチをそっとオフに。
        </p>
        <p className="rv rv-d3 font-accent text-[0.7rem] tracking-[0.25em] uppercase text-neutral-500 border-l border-[#3C4A3E] pl-4">
          足つぼ ・ 足揉み専門店
        </p>
      </div>
      <div className="absolute bottom-10 left-8 md:left-20 flex flex-col items-start gap-2 rv rv-d3">
        <span className="font-accent text-[0.55rem] tracking-[0.3em] uppercase text-neutral-500">Scroll</span>
        <div className="w-px h-10 bg-[#3C4A3E] ml-2" />
      </div>
    </section>
  );
}
