"use client";
const items = [
  { title: "閾値のコントロール", 
    body: "身体がギュッと身構えてしまうような激痛は与えません。奥までしっかり響くのに、思わず力を抜いてしまう絶妙な強圧を丁寧に見極めます。" },
  { title: "呼吸の変容", 
    body: "足裏を優しく、時には深く捉える心地よいリズムが、呼吸をゆっくりとした深い波へと変えていきます。" },
  { title: "まどろみによる、心身の再起動", 
    body: "なぜフルフラットのベッドではなくリクライニングチェアなのか。意識を完全に手放して眠るのではなく、覚醒と睡眠の「あわい」に留まり、脳を効率的にスイッチさせるため。計算された傾斜が、最高のリブート体験を支えます。" },
];

export default function Approach() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black">3 Pillars</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className={`rv rv-d${i + 1} border border-black rounded-none overflow-hidden bg-white`}>
              <div className="prism-line" />
              <div className="p-8">
                <h3 className="font-bold text-xl mb-4 text-black text-left">{item.title}</h3>
                <p className="text-sm font-light leading-loose text-neutral-800 text-left">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
