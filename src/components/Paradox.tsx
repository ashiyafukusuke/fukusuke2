"use client";
const points = [
  { title: "【理論のバグ】", desc: "足つぼ師でありながら、非科学的な反射区には囚われません。狙うのは神経系へのアプローチによる「システム初期化」です。" },
  { title: "【体感のバグ】", desc: "奥までしっかり響く「強圧」なのに、いつの間にか自律神経が切り替わり、意識が溶け出す「まどろみ」へと落ちていきます。" },
  { title: "【空間のバグ】", desc: "無機質で削ぎ落とされたモダンの知性と、古き良き「和」の体温。2つが交差する、圧倒的に静かな引き算の空間。" }
];

export default function Paradox() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-[#FAFAFA] text-[#1A1A1A] border-t border-neutral-200">
      <div className="w-full max-w-5xl text-left border-l-[3px] border-[#3C4A3E] pl-6 md:pl-12">
        <h2 className="rv rv-d1 font-accent font-black text-3xl md:text-5xl tracking-tight mb-8 text-[#1A1A1A]">
          The Re:boot Paradox<br/>
          <span className="text-xl md:text-3xl font-sans tracking-normal font-bold block mt-4 text-neutral-700">3つの心地よい矛盾</span>
        </h2>
        <p className="rv rv-d2 text-base md:text-lg font-light leading-loose text-neutral-800 mb-12">
          当店には、一般的な足つぼの常識を覆す「ギャップ」があります。
        </p>
        <ul className="space-y-10">
          {points.map((p, i) => (
            <li key={i} className={`rv rv-d${Math.min(i+2, 5)} flex flex-col md:flex-row items-start gap-2 md:gap-4`}>
              <span className="font-bold text-lg md:text-xl text-[#3C4A3E] flex-shrink-0">{p.title}</span>
              <span className="text-base font-light leading-relaxed text-neutral-800 mt-1 md:mt-0">{p.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
