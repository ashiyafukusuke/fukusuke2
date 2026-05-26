"use client";
const items = [
  { title: "1. 閾値（痛さレベル）のコントロール", 
    body: "身体がギュッと身構えてしまうような激痛は与えません。奥までしっかり響くのに、思わず力を抜いてしまう絶妙な強圧を、お一人おひとりの体調に合わせて丁寧に見極めます。" },
  { title: "2. 呼吸の変容", 
    body: "足裏を優しく捉える心地よいリズムが、知らず知らずのうちに浅くなっていた呼吸を、ゆっくりとした深い波へと変えていきます。身体がふっと緩み、頭が空っぽになる感覚…不思議だけど心地いいですよね。" },
  { title: "3. まどろみによる、心身の再起動", 
    body: "なぜ、フルフラットのベッドではなくリクライニングチェアなのか。意識を完全に手放して眠るのではなく、覚醒と睡眠の「あわい」に留まり、交感神経の緊張から解放されることで、身体を本来の状態へ静かに立ち上げ直すため。計算された傾斜が、最高のリブート体験を支えます。" },
];

export default function Approach() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="w-full max-w-7xl text-left">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black border-l-[3px] border-black pl-4">3 Pillars</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className={`rv rv-d${i + 1} border border-black rounded-none overflow-hidden bg-white text-left`}>
              <div className="prism-line" />
              <div className="p-8 flex flex-col justify-start">
                <h3 className="font-bold text-xl mb-6 text-black border-b border-neutral-200 pb-4">{item.title}</h3>
                <p className="text-sm md:text-base font-light leading-loose text-neutral-800">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
