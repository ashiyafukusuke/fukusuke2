"use client";
const points = [
  "足裏の感覚を、手のひらで細やかにスキャン。",
  "痛みがストレスに変わる「一歩手前」の最大圧。",
  "力みが抜けるからこそ、刺激が奥深くまで綺麗に響く。",
  "お帰りの際の、見違えるような「足音」の軽さ。",
];

export default function Logic() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Text */}
        <div>
          <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-6">Technique Logic</p>
          <h2 className="rv rv-d1 text-2xl md:text-4xl font-medium leading-snug tracking-tight mb-6">
            なぜ、おだやかに<br />「芯まで届く」のか？
          </h2>
          <p className="rv rv-d2 text-sm font-light text-neutral-500 mb-10">身体の仕組みに、けっして無理をさせないこと。</p>
          <ul className="space-y-5">
            {points.map((p, i) => (
              <li key={i} className={`rv rv-d${Math.min(i + 1, 3)} flex items-start gap-4`}>
                <span className="mt-1.5 flex-shrink-0 w-8 prism-line rounded-full" />
                <span className="text-sm font-light leading-relaxed text-neutral-600">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="img-ph aspect-[3/4] rounded-lg rv rv-d2" />
      </div>
    </section>
  );
}
