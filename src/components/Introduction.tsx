"use client";
export default function Introduction() {
  return (
    <section className="relative py-32 md:py-48 px-8 md:px-20 bg-white text-black">
      <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#10b981]" />
      <div className="w-full max-w-4xl text-left">
        <p className="rv font-accent text-[0.65rem] tracking-[0.3em] uppercase mb-4 font-bold prism-text border-l border-[#00f0ff] pl-3">
          心と身体が、ふっと凪ぐ場所。
        </p>
        <h2 className="rv rv-d1 font-accent font-black text-4xl md:text-6xl tracking-tight mb-16 text-black">Re:bootの真髄</h2>
        
        <div className="rv rv-d2 text-base md:text-lg font-light leading-loose text-neutral-800 max-w-3xl space-y-8">
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
            フリーズしていた自律神経のスイッチを切り替え、心身を劇的にリセットする、これがRe:bootの真髄です。よくある一般的な足つぼとはちょっと違う、奥底からイタ気持ち良くふっと抜ける特有のリセット感をお楽しみください。
          </p>
        </div>
      </div>
    </section>
  );
}
