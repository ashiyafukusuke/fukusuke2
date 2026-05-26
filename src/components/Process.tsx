"use client";
const steps = [
  { title: "1. Reserve (ご予約)", desc: "LINEでご希望の枠を予約。" },
  { title: "2. Check-in (ご来店)", desc: "お時間に合わせてご案内。" },
  { title: "3. Scan & Tuning (調律開始)", desc: "足全体を優しく捉え、身体の声を聴きながらほぐし始めます。" },
  { title: "4. Neural Reset (最高のまどろみへ)", desc: "心地よいリズムの中、次第に身体がふっと緩み、頭が空っぽに…。" },
  { title: "5. Reboot (再起動)", desc: "お時間内でスッキリと終了。" }
];

const points = [
  "強さはあなたに合わせて最適にコントロールします。",
  "途中から身体がふっと緩み、頭が空っぽになる感覚...。"
];

export default function Process() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-[#FAFAFA] text-[#1A1A1A] border-t border-neutral-200">
      <div className="w-full max-w-6xl text-left">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-500 mb-6 border-l border-[#3C4A3E] pl-3">
          （入室から退室まで。日常のノイズを遮断する、ゆったりとしたお時間です）
        </p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-20 text-[#1A1A1A]">Re:boot Protocol</h2>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 relative border-l border-neutral-300 pl-8 space-y-12 w-full">
            <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-[#3C4A3E]" />
            {steps.map((s, i) => (
              <div key={i} className={`rv rv-d${Math.min(i+1, 5)} text-left`}>
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-[#1A1A1A]">{s.title}</h3>
                <p className="text-sm md:text-base font-light text-neutral-800 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 mt-10 lg:mt-0 p-8 border border-[#1A1A1A] text-left rv rv-d3 bg-[#FAFAFA]">
            <h4 className="font-bold text-lg mb-6 text-[#1A1A1A] border-b border-[#1A1A1A] pb-2 inline-block">施術のポイント</h4>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 flex-shrink-0 w-1 h-[1em] bg-[#3C4A3E]" />
                  <span className="text-sm md:text-base font-light leading-relaxed text-neutral-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
