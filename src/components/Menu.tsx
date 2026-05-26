"use client";
const courses = [
  { name: "Quick / Trial", ja: "クイック・お試し", time: "30分",
    desc: "足首より下を中心に。初めての方でも気軽に当店の足揉みを体感できるクイックコース。" },
  { name: "Re:boot", ja: "シグネチャーコース", time: "60分",
    desc: "当店一番人気・至高のリセット。足首から膝上・膝裏まで丁寧に。全身の緊張をほどき、意識が溶けるような心地よさを十分に味わえる標準コースであり、深い休息状態を強制誘導し、心身をシステムレベルで再起動させます。" },
];

export default function Menu() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="w-full max-w-5xl text-left">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black border-l-[3px] border-black pl-4">Course</h2>
        <div className="rv rv-d2 border border-black rounded-none overflow-hidden text-left">
          <div className="bg-black text-white flex justify-between px-8 py-5">
            <span className="font-accent text-xs tracking-[0.2em] uppercase">Course</span>
            <span className="font-accent text-xs tracking-[0.2em] uppercase">Time</span>
          </div>
          {courses.map((c, i) => (
            <div key={i} className={`flex flex-col md:flex-row justify-between items-start md:items-start px-8 py-10 ${i > 0 ? "border-t border-black" : ""} transition-colors duration-200 bg-white gap-4 md:gap-16`}>
              <div className="flex-1">
                <h3 className="font-accent font-black text-2xl mb-1 text-black">
                  {c.name === "Re:boot" ? <>Re<span className="prism-text">:</span>boot</> : c.name}
                </h3>
                <p className="font-accent text-[0.65rem] tracking-[0.15em] text-neutral-600 mb-5">{c.ja}</p>
                <p className="text-sm md:text-base font-light leading-loose text-neutral-800">{c.desc}</p>
              </div>
              <span className="font-accent font-bold text-xl text-black">{c.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
