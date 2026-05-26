"use client";
export default function Data() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Number */}
        <div className="rv text-left md:text-left">
          <span className="font-accent font-black prism-text leading-none" style={{ fontSize: "clamp(6rem, 16vw, 12rem)" }}>
            94<span className="text-5xl md:text-7xl">%</span>
          </span>
          <p className="font-accent text-xs tracking-[0.2em] uppercase text-neutral-500 mt-4 text-left">施術中のNSDR導入率</p>
        </div>
        {/* Text */}
        <div className="text-left">
          <h2 className="rv rv-d1 text-3xl md:text-4xl font-bold leading-snug tracking-tight mb-6 text-black">
            圧倒的な「静」への導き
          </h2>
          <p className="rv rv-d2 text-base md:text-lg font-light leading-[2.2] text-neutral-800">
            多くのクライアントが、施術開始から15分以内に深い休息状態へ移行します。これは、感覚刺激を脳の「報酬系」と「副交感神経」へ直結させる独自の手技によるものです。ストレスホルモンの減少と、心拍変動の改善を、確かな手の感覚を通じて追求しています。
          </p>
        </div>
      </div>
    </section>
  );
}
