"use client";
const courses = [
  { name: "Quick / Trial", ja: "クイック・お試し", time: "30分",
    desc: "お忙しい日常の合間に。特に重さを感じる特定の受容器を的確に捉え、即座に足取りを軽やかに整えます。" },
  { name: "Full System Reboot", ja: "フルシステム・リブート", time: "60分",
    desc: "Re:bootの真髄を体感する、シグネチャーコース。足裏から膝下まで丁寧に調律。深いNSDR状態を強制誘導し、心身をシステムレベルで再起動させます。" },
];

export default function Menu() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20">
      <div className="max-w-4xl mx-auto">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-4">Menu</p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16">Course</h2>
        <div className="rv rv-d2 border border-black rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-black text-white grid grid-cols-[1fr_auto] md:grid-cols-[1fr_100px] px-6 py-4">
            <span className="font-accent text-xs tracking-[0.2em] uppercase">Course</span>
            <span className="font-accent text-xs tracking-[0.2em] uppercase text-right">Time</span>
          </div>
          {/* Rows */}
          {courses.map((c, i) => (
            <div key={i} className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_100px] px-6 py-8 items-start ${i > 0 ? "border-t border-neutral-200" : ""} hover:bg-neutral-50 transition-colors duration-200`}>
              <div>
                <h3 className="font-accent font-bold text-lg mb-1">{c.name}</h3>
                <p className="font-accent text-[0.65rem] tracking-[0.15em] text-neutral-400 mb-3">{c.ja}</p>
                <p className="text-sm font-light leading-relaxed text-neutral-500 max-w-lg">{c.desc}</p>
              </div>
              <span className="font-accent font-bold text-lg text-right">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
