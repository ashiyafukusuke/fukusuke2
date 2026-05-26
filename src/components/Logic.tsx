"use client";
const points = [
  "足裏の感覚を、手のひらで細やかにスキャン。",
  "痛みがストレスに変わる「一歩手前」の最大圧。",
  "力みが抜けるからこそ、刺激が奥深くまで綺麗に響く。",
  "お帰りの際の、見違えるような「足音」の軽さ。",
];

export default function Logic() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-500 mb-6">Technique Logic</p>
          <h2 className="rv rv-d1 text-3xl md:text-5xl font-bold leading-snug tracking-tight mb-6 text-black text-left">
            なぜ、おだやかに<br />「芯まで届く」のか？
          </h2>
          <p className="rv rv-d2 text-base md:text-lg font-light text-neutral-800 mb-10 text-left">身体の仕組みに、けっして無理をさせないこと。</p>
          <ul className="space-y-6 text-left">
            {points.map((p, i) => (
              <li key={i} className={`rv rv-d${Math.min(i + 1, 3)} flex items-start gap-4`}>
                <span className="mt-2 flex-shrink-0 w-6 prism-line rounded-full" />
                <span className="text-base md:text-lg font-light leading-relaxed text-black">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="img-ph aspect-[3/4] rounded-none rv rv-d2 border border-black bg-[#0a0a0a]" />
      </div>
    </section>
  );
}
