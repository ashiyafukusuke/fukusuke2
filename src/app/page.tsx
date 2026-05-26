import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#2C2C2C]">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center border-b border-[#EAE4D9]">
        <div className="absolute inset-0 z-0 bg-[#EAE4D9]"></div>
        <div className="relative z-10 text-center bg-white/90 p-10 rounded-2xl shadow-sm">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#3A3532]">足屋『福助』</h1>
          <p className="text-xl md:text-2xl text-[#5C5550]">心身を解きほぐす、極上の足揉み</p>
        </div>
      </section>

      {/* Concept */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold mb-10 text-[#3A3532] text-center">Concept</h2>
        <p className="text-lg leading-loose text-[#5C5550] text-center md:text-left">
          日常のプレッシャーで凝り固まった身体と心を、足裏から丁寧に解きほぐします。<br />
          古き良き日本の温もりと、確かな技術が交差する空間で、本来の軽やかな自分を取り戻す時間をお過ごしください。
        </p>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-3xl font-bold mb-6 text-[#8B4513] flex items-center justify-center md:justify-start gap-3">
              料金のご案内
            </h2>
            <p className="text-[#7A736E] leading-loose">
              当店は「枠単位」の予約制です。<br className="hidden md:block"/>
              ご予約いただいた時間は、お客様のためだけに確保された専有時間です。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto md:mx-0">
            {/* Courses */}
            <div className="border border-[#EAE4D9] p-8 rounded-xl shadow-sm bg-[#FDFBF7]">
              <h3 className="text-2xl font-bold mb-2 text-[#3A3532]">試しほどき</h3>
              <p className="text-[#8B4513] font-bold text-xl mb-4">30分枠 / 3,500円</p>
              <p className="text-[#5C5550] leading-relaxed">「福助」の技術と空気感に触れていただくための入り口。まずは重い鎧のボタンを外すところから。</p>
            </div>
            <div className="border border-[#EAE4D9] p-8 rounded-xl shadow-sm bg-[#FDFBF7] relative">
              <span className="absolute -top-3 right-4 bg-[#8B4513] text-white text-xs font-bold px-3 py-1 rounded-full">一番人気</span>
              <h3 className="text-2xl font-bold mb-2 text-[#3A3532]">福助の足揉み</h3>
              <p className="text-[#8B4513] font-bold text-xl mb-4">60分枠 / 6,500円</p>
              <p className="text-[#5C5550] leading-relaxed">全身をリセットし、意識を溶かすための黄金比。迷ったら、こちらをお選びください。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Benefits */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-[#8B4513]">初回全額返金保証（全コース対象）</h3>
          <p className="text-lg leading-relaxed text-[#5C5550]">
            施術を受けて「自分には合わない」と感じられた場合は、初回の料金を全額お返しいたします。
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#EAE4D9] shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-[#3A3532]">継続特典（60分枠限定）</h3>
          <div className="bg-[#FDFBF7] p-6 md:p-8 rounded-xl border border-[#EAE4D9] text-center md:text-left mb-8">
            <div className="space-y-4 max-w-md mx-auto md:mx-0 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAE4D9] border-dashed pb-4">
                <span className="font-bold text-[#5C5550] text-lg mb-1 sm:mb-0">2回目〜5回目</span>
                <div className="text-right md:text-left flex-grow sm:text-right md:ml-4">
                  <span className="text-2xl font-bold text-[#8B4513] mr-1">5,500<span className="text-lg">円</span></span>
                  <span className="text-xs text-[#7A736E] block sm:inline-block sm:ml-2">（通常6,500円 → <strong className="text-[#8B4513]/80">1,000円OFF</strong>）</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-1">
                <span className="font-bold text-[#5C5550] text-lg mb-1 sm:mb-0">6回目以降</span>
                <div className="text-right md:text-left flex-grow sm:text-right md:ml-4">
                  <span className="text-2xl font-bold text-[#8B4513] mr-1">5,000<span className="text-lg">円</span></span>
                  <span className="text-xs text-[#7A736E] block sm:inline-block sm:ml-2">（さらに<strong className="text-[#8B4513]/80">500円OFF</strong>）</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-3 text-[#5C5550] leading-relaxed">
            <p>将来的には、30分枠のご利用状況を見ながら、継続特典を広げていく予定です。</p>
            <p className="text-sm text-[#7A736E] opacity-80">（現在は60分枠のみが継続特典の対象となります）</p>
          </div>
        </div>
      </section>

      {/* Improvement Hints */}
      <section className="py-24 px-6 bg-white border-t border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-16 flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#8B4513] flex items-center justify-center gap-4 w-full text-center">
              福助の改善ヒント
            </h2>
            <div className="w-full md:w-fit text-left bg-[#FDFBF7] p-8 rounded-xl border border-[#EAE4D9]">
              <p className="text-[#5C5550] leading-loose">
                足裏の硬さや冷えは、全身のサインです。<br />
                日々の少しの意識で、身体は確実に応えてくれます。<br />
                痛みの奥にある声に耳を澄ませてみましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 text-center border-t border-[#EAE4D9] bg-[#FAF7F0]">
        <h2 className="text-3xl font-bold text-[#3A3532] mb-6">足屋『福助』</h2>
        <p className="text-[#7A736E] mb-2">ひばりヶ丘 ｜ 足揉み職人 福助</p>
        <p className="text-sm text-[#7A736E]/60">© Ashiya Fukusuke All Rights Reserved.</p>
      </footer>
    </main>
  );
}
