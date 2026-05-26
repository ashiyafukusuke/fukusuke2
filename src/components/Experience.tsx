"use client";
export default function Experience() {
  return (
    <section className="grid md:grid-cols-2 min-h-screen">
      {/* Text */}
      <div className="flex flex-col justify-center px-8 md:px-20 py-24">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-6">NSDR Experience</p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-4">The NSDR<br />Experience</h2>
        <p className="rv rv-d1 text-lg font-light text-neutral-400 mb-8">意識が溶け出す、最高の静寂。</p>
        <div className="rv rv-d2 prism-line w-16 mb-8" />
        <p className="rv rv-d2 text-sm font-light leading-[2.2] text-neutral-600 max-w-md">
          Re:bootの施術は、脳波を穏やかな状態へと誘います。これは瞑想や深い睡眠に匹敵するリフレッシュ効果を持ち、現代人の疲弊した脳を短時間でアップデートします。
        </p>
        <p className="rv rv-d3 text-sm font-light leading-[2.2] text-neutral-600 max-w-md mt-4">
          「眠っているわけではないのに、何も考えていない」至福の空を体感してください。
        </p>
      </div>
      {/* Full-bleed image */}
      <div className="img-ph min-h-[60vh] md:min-h-screen rv" />
    </section>
  );
}
