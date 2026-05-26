"use client";
const items = [
  { title: "閾値のコントロール", en: "Threshold Control",
    body: "身体がギュッと身構えてしまうような激痛は与えません。奥までしっかり響くのに、思わず力を抜いてしまう絶妙な強圧を丁寧に見極めます。" },
  { title: "呼吸の変容", en: "Breath Shift",
    body: "足裏を優しく、時には深く捉える心地よいリズムが、知らず知らずのうちに浅くなっていた呼吸を、ゆっくりとした深い波へと変えていきます。" },
  { title: "NSDR体験", en: "Non-Sleep Deep Rest",
    body: "眠っているのか起きているのかわからない、心地よい「あわい」の休息により、脳の過興奮をリセットします。" },
];

export default function Approach() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-4">Our Approach</p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16">3 Pillars</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className={`rv rv-d${i + 1} border border-neutral-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300`}>
              {/* Prism top line */}
              <div className="prism-line" />
              <div className="p-8">
                <p className="font-accent text-[0.6rem] tracking-[0.25em] uppercase text-neutral-300 mb-3">{item.en}</p>
                <h3 className="font-medium text-lg mb-4">{item.title}</h3>
                <p className="text-sm font-light leading-loose text-neutral-500">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
