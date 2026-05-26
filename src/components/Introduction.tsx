"use client";
export default function Introduction() {
  return (
    <section className="relative py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#10b981]" />
      <div className="max-w-4xl mx-auto">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-bold prism-text text-left">
          心と身体が、ふっと凪ぐ場所。
        </p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black">Re:bootの真髄</h2>
        
        <div className="rv rv-d2 text-base md:text-lg font-light leading-loose text-neutral-800 max-w-3xl space-y-8 text-left">
          <p className="font-bold text-2xl md:text-3xl mb-8 text-black tracking-tight">意識が溶け出す、最高のまどろみ。</p>
          <p>
            それは、ただぐっすりと眠るのとは違います。完全に横たわらないリクライニングチェアだからこそ訪れる、眠っているのか起きているのかわからない、絶妙な「あわい」の時間。
          </p>
          <p>
            痛みがストレスに変わる一歩手前。脳が「安全」と認識する、極限の痛気持ちよさ。
          </p>
          <p>
            日常のプレッシャーで凝り固まった頭の中のノイズが、静かに、まっさらに塗り替えられていく――。
          </p>
          <p>
            フリーズしていた自律神経のスイッチを切り替え、心身を劇的にリセットする、これがRe:bootの真髄です。
          </p>
        </div>
      </div>
    </section>
  );
}
