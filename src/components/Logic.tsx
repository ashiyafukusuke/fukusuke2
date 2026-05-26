"use client";
const points = [
  "身体の仕組みに、けっして無理をさせないこと。",
  "足裏の感覚を細やかにスキャン",
  "痛みがストレスに変わる一歩手前",
  "力みが抜けるから奥まで響く",
  "見違えるような足音の軽さ",
];

export default function Logic() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-16 items-start text-left">
        <div className="flex flex-col justify-start">
          <h2 className="rv rv-d1 text-3xl md:text-5xl font-bold leading-snug tracking-tight mb-10 text-black border-l-[3px] border-black pl-6">
            なぜ、おだやかに<br />「芯まで届く」のか？
          </h2>
          <ul className="space-y-6">
            {points.map((p, i) => (
              <li key={i} className={`rv rv-d${Math.min(i + 1, 3)} flex items-start gap-4`}>
                <span className="mt-2 flex-shrink-0 w-6 prism-line rounded-none" />
                <span className="text-base md:text-lg font-light leading-relaxed text-black">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="img-ph aspect-[3/4] rounded-none rv rv-d2 border border-black bg-[#0a0a0a]" />
      </div>
    </section>
  );
}
