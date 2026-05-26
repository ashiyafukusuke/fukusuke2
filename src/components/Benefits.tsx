"use client";
const items = [
  { en: "Neural", title: "脳のデトックス・集中力向上" },
  { en: "Physical", title: "慢性的な足の重さ・冷えの解消" },
  { en: "Mental", title: "圧倒的な精神的安らぎ" },
];

export default function Benefits() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black text-left">What You Gain</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {items.map((item, i) => (
            <div key={i} className={`rv rv-d${i + 1}`}>
              <div className="img-ph aspect-[4/3] rounded-none mb-6 border border-black bg-[#0a0a0a]" />
              <p className="font-accent text-[0.6rem] tracking-[0.25em] uppercase text-neutral-500 mb-2">{item.en}</p>
              <h3 className="font-bold text-lg md:text-xl mb-3 text-black">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
