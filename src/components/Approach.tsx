"use client";
const items = [
  { title: "1. 閾値のコントロール", 
    body: "身体が身構える激痛は与えません。奥まで響くのに力を抜いてしまう絶妙な強圧を、お一人おひとりに合わせて丁寧に見極めます。" },
  { title: "2. 呼吸の変容", 
    body: "足裏を優しく捉える心地よいリズムが、浅くなっていた呼吸を深い波へと変えていきます。頭が空っぽになる感覚…不思議だけど心地いいですよね。" },
  { title: "3. 心身の再起動", 
    body: "なぜリクライニングチェアなのか。意識を完全に手放さず、覚醒と睡眠の「あわい」に留まり、身体を本来の状態へ静かに立ち上げ直すため。計算された傾斜がリブートを支えます。" },
];

export default function Approach() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20 bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="w-full max-w-7xl text-left">
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-[#1A1A1A] border-l-[3px] border-[#3C4A3E] pl-4">3 Pillars</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className={`rv rv-d${i + 1} border border-[#1A1A1A] rounded-none overflow-hidden bg-[#FAFAFA] text-left`}>
              <div className="wa-line" />
              <div className="p-8 flex flex-col justify-start">
                <h3 className="font-bold text-xl mb-6 text-[#1A1A1A] border-b border-[#E5E5E5] pb-4">{item.title}</h3>
                <p className="text-sm md:text-base font-light leading-loose text-neutral-800">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
