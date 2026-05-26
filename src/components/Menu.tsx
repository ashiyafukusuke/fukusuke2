"use client";
const courses = [
  { name: "Quick / Trial", ja: "30分",
    desc: "足首より下を中心に。初めての方でも気軽に当店の足揉みを体感できるコース。" },
  { name: "Re:boot (Signature)", ja: "60分",
    desc: "当店一番人気・至高のリセット。足首から膝上・膝裏まで丁寧に。深い休息状態を強制誘導し、心身をシステムレベルで再起動させます。" },
];

export default function Menu() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="w-full max-w-5xl text-left">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-[#1A1A1A] border-l-[3px] border-[#3C4A3E] pl-4">Course</h2>
        <div className="rv rv-d2 border border-[#1A1A1A] rounded-none overflow-hidden text-left">
          <div className="bg-[#1A1A1A] text-white flex justify-between px-8 py-5">
            <span className="font-accent text-xs tracking-[0.2em] uppercase">Course</span>
            <span className="font-accent text-xs tracking-[0.2em] uppercase">Time</span>
          </div>
          {courses.map((c, i) => (
            <div key={i} className={`flex flex-col md:flex-row justify-between items-start px-8 py-10 ${i > 0 ? "border-t border-[#1A1A1A]" : ""} transition-colors duration-200 bg-[#FAFAFA] gap-4 md:gap-16`}>
              <div className="flex-1 text-left">
                <h3 className="font-accent font-black text-2xl md:text-3xl mb-1 text-[#1A1A1A]">
                  {c.name}
                </h3>
                <p className="font-accent text-sm tracking-[0.15em] text-[#3C4A3E] mb-5 font-bold">{c.ja}</p>
                <p className="text-sm md:text-base font-light leading-loose text-neutral-800">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
