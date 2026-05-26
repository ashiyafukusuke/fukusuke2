"use client";
export default function Practitioner() {
  return (
    <section className="py-32 md:py-48 px-8 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="img-ph aspect-[4/5] rounded-lg rv" />
        {/* Text */}
        <div>
          <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase text-neutral-400 mb-6">Artisan</p>
          <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-2">福助</h2>
          <p className="rv rv-d1 font-accent text-sm tracking-[0.15em] text-neutral-400 mb-8">ふくすけ — Fukusuke</p>
          <div className="rv rv-d2 prism-line w-12 mb-8" />
          <p className="rv rv-d2 text-sm font-light leading-[2.2] text-neutral-600 max-w-md">
            「人を幸せにしたい」というシンプルな願い。古くから親しまれる福助人形のように、訪れる人にホッとする安心と幸せを届けたい。その思いから、この名前を掲げています。
          </p>
          <p className="rv rv-d3 text-sm font-light leading-[2.2] text-neutral-600 max-w-md mt-4">
            ガチガチに強張った日常のプレッシャーを、確かな手の感覚と身体の仕組みに沿ったアプローチで優しく受け止め、本来の軽やかな足取りへと戻します。
          </p>
        </div>
      </div>
    </section>
  );
}
