"use client";
const items = [
  { en: "Neural", title: "脳のデトックス", body: "過剰な思考ループから解放し、集中力と判断力を取り戻します。" },
  { en: "Physical", title: "慢性的な足の重さ・冷えの解消", body: "滞った血流とリンパの流れを改善し、足元から全身を温めます。" },
  { en: "Mental", title: "圧倒的な精神的安らぎ", body: "深い脱力と呼吸の変化が、日常では得られない安息をもたらします。" },
];

export default function Benefits() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20">
      <div className="max-w-6xl mx-auto">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-4">Benefits</p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16">What You Gain</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className={`rv rv-d${i + 1}`}>
              <div className="img-ph aspect-[4/3] rounded-lg mb-6" />
              <p className="font-accent text-[0.6rem] tracking-[0.25em] uppercase text-neutral-300 mb-2">{item.en}</p>
              <h3 className="font-medium text-lg mb-3">{item.title}</h3>
              <p className="text-sm font-light leading-relaxed text-neutral-500">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
