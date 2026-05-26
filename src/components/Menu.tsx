"use client";
const courses = [
  { name: "Quick / Trial", ja: "クイック・お試し", time: "30分",
    desc: "お忙しい日常の合間に。特定の受容器を的確に捉え、即座に足取りを軽やかに整えます。" },
  { name: "Re:boot", ja: "シグネチャーコース", time: "60分",
    desc: "Re:bootの真髄を体感する、一番人気のシグネチャーコース。足裏から膝下まで丁寧に調律。深い「まどろみ」の休息へと誘い、心身を劇的にリセットさせます。" },
];

export default function Menu() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black">Course</h2>
        <div className="rv rv-d2 border border-black rounded-none overflow-hidden">
          <div className="bg-black text-white grid grid-cols-[1fr_auto] md:grid-cols-[1fr_100px] px-6 py-4">
            <span className="font-accent text-xs tracking-[0.2em] uppercase">Course</span>
            <span className="font-accent text-xs tracking-[0.2em] uppercase text-right">Time</span>
          </div>
          {courses.map((c, i) => (
            <div key={i} className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_100px] px-6 py-8 items-start ${i > 0 ? "border-t border-black" : ""} transition-colors duration-200 bg-white`}>
              <div className="text-left">
                <h3 className="font-accent font-bold text-xl mb-1 text-black">
                  {c.name === "Re:boot" ? <>Re<span className="prism-text">:</span>boot</> : c.name}
                </h3>
                <p className="font-accent text-[0.65rem] tracking-[0.15em] text-neutral-600 mb-3">{c.ja}</p>
                <p className="text-sm font-light leading-relaxed text-neutral-800 max-w-lg">{c.desc}</p>
              </div>
              <span className="font-accent font-bold text-lg text-right text-black">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
