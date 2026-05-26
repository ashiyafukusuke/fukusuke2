"use client";
import Image from "next/image";

const OLD_MAP_ITEMS = [
  { title: "頭が重い", bad1: "ズーンと重い", bad2: "頭が回らない", good: "ズーンとした重さがふっと抜け、意識が溶けるようなスッキリ感が広がります。頭が空っぽになる感覚を。", img: "card_ill_head.png", target: "head" },
  { title: "目が疲れる", bad1: "奥が痛い", bad2: "ショボショボする", good: "目の奥の力みがほどけ、視界がぱあっと明るくなるような感覚。首周りまで軽くなります。", img: "card_ill_eye.png", target: "eye" },
  { title: "首が回らない", bad1: "筋が張っている", bad2: "上を向けない", good: "首の付け根の詰まりが取れ、スッと首が長くなったような、楽な姿勢を取り戻せます。", img: "card_ill_neck.png", target: "neck" },
  { title: "肩こり", bad1: "岩のように硬い", bad2: "腕が挙がらない", good: "肩甲骨の周りがじんわりと温かくなり、肩の荷がふっと下りるような深いリラックスへ。", img: "card_ill_shoulder.png", target: "shoulder" },
  { title: "背中が張る", bad1: "息が浅い", bad2: "鉄板が入っている", good: "背中全体のこわばりが溶け出し、呼吸がすーっと深くなる感覚を味わえます。", img: "card_ill_back.png", target: "back" },
  { title: "ストレス", bad1: "イライラする", bad2: "眠りが浅い", good: "交感神経の緊張が解け、全身がぽかぽかと温まり、深い安心感に包まれます。", img: "card_ill_stress.png", target: "stress" },
  { title: "足がだるい", bad1: "むくみでパンパン", bad2: "鉛のように重い", good: "足裏から老廃物が流れるような感覚で、施術後は靴が緩く感じるほどの軽さに。", img: "card_ill_swelling.png", target: "swelling" },
  { title: "胃が重い", bad1: "キリキリする", bad2: "食欲が出ない", good: "みぞおちのあたりがスーッと通り、お腹の底からリラックスできる心地よさ。", img: "card_ill_stomach.png", target: "stomach" },
  { title: "お腹の張り", bad1: "ガスが溜まる", bad2: "便秘気味", good: "お腹の緊張がほぐれ、内側からじんわりと温まり、自然なスッキリ感を促します。", img: "card_ill_intestine.png", target: "intestine" },
  { title: "お酒が残る", bad1: "だるさが抜けない", bad2: "二日酔い気味", good: "全身の巡りが良くなる感覚があり、重だるさが抜けていくような爽快感があります。", img: "card_ill_liver.png", target: "liver" },
  { title: "動悸・息切れ", bad1: "疲れやすい", bad2: "胸が苦しい", good: "胸のつかえが取れ、深くゆったりとした呼吸ができるようになる安心感。", img: "card_ill_heart.png", target: "heart" },
  { title: "呼吸が浅い", bad1: "ため息が多い", bad2: "リラックスできない", good: "胸郭が広がるように呼吸が深くなり、全身の細胞に酸素が行き渡るようなリフレッシュ感。", img: "card_ill_lung.png", target: "lung" }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#FAF7F0] text-[#2C2C2C]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:h-[95vh] flex flex-col items-center justify-center border-b border-[#EAE4D9] px-4 pb-12 pt-20">
        <div className="absolute inset-0 z-0 bg-[#EAE4D9]"></div>
        <div className="relative z-10 text-center bg-white/95 p-8 md:p-12 rounded-2xl shadow-sm max-w-3xl w-full">
          <p className="text-lg md:text-xl font-bold mb-4 text-[#8B4513] leading-relaxed">足から意識をふっと溶かす、痛気持ちいい刺激。</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 text-[#3A3532] leading-tight">それが、足屋『福助』です。</h1>
          <a href="https://line.me/R/ti/p/@055thsak" className="inline-block bg-[#8B4513] text-white font-bold text-lg md:text-xl px-10 py-4 rounded-full shadow-lg hover:bg-[#A0522D] transition-transform hover:-translate-y-1">
            今すぐLINEで予約する
          </a>
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
      <section className="py-24 px-6 bg-[#FDFBF7] border-t border-[#EAE4D9] overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="mb-16 flex flex-col items-center w-full">
            <h2 className="text-3xl font-bold mb-10 text-[#8B4513] flex items-center justify-center gap-4 w-full text-center">
              福助の改善ヒント
            </h2>
            <div className="w-full md:w-fit text-left p-8">
              <p className="text-[#5C5550] leading-loose font-bold text-center md:text-left">
                足を丁寧にほぐしたときに、多くの方が「ここが緩んだ」と感じやすいポイントを、感覚ベースでまとめたものです。<br />
                星座や占いを楽しむように、「自分を知るためのひとつの物差し」として参考にするのは、とても有意義で面白いことだと考えています。<br />
                あくまで「こんな体感があるかも」という目安としてお読みください。科学的に証明されたものではありません。
              </p>
            </div>
          </div>
          
          <div className="w-full relative">
            <div className="text-right mb-2 pr-4 md:hidden text-sm font-bold text-[#8B4513] animate-pulse flex justify-end items-center gap-1">
              <span>スワイプして見る</span>
              <span>→</span>
            </div>
            <div className="card-grid">
              {OLD_MAP_ITEMS.map((item, idx) => (
                <div key={idx} className="flip-card" onClick={(e) => e.currentTarget.classList.toggle('is-flipped')}>
                  <div className="flip-card-inner">
                    <div className="card-front">
                      <div className="card-illustration"><img src={`/images/${item.img}`} alt={item.title} /></div>
                      <h3>{item.title}</h3>
                      <div className="card-desc">
                        <ul>
                          <li>{item.bad1}</li>
                          <li>{item.bad2}</li>
                        </ul>
                      </div>
                      <div style={{ marginTop: 'auto', paddingTop: '1rem', width: '100%', textAlign: 'center' }}>
                        <span className="inline-block text-xs text-[#8B4513] border border-[#8B4513] rounded-full px-3 py-1 font-bold">
                          タップで裏返す ↺
                        </span>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="css-footprint-container" data-target={item.target}>
                        <div className="css-foot-body"></div>
                        <div className="css-toe css-toe-1"></div><div className="css-toe css-toe-2"></div><div className="css-toe css-toe-3"></div><div className="css-toe css-toe-4"></div><div className="css-toe css-toe-5"></div>
                        <div className={`reflex-spot spot-${item.target}`}></div>
                      </div>
                      <h4>改善後の体感</h4>
                      <p>{item.good}</p>
                      <div style={{ marginTop: 'auto', paddingTop: '1rem', width: '100%', textAlign: 'center' }}>
                        <span className="inline-block text-xs text-[#8B4513] px-3 py-1 font-bold border border-[#8B4513] rounded-full bg-white">
                          戻る ↺
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
