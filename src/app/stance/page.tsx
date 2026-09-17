import type { Metadata } from "next";
import Link from "next/link";
import { Shippori_Mincho } from "next/font/google";

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "店主のスタンス｜足つぼ専門店 イタキモ",
  description: "イタキモ店主・福助の施術に対する考え方、スタンスについて。「この人に喜んでもらいたい」と思う人の足を揉む、その想いを言葉にしました。",
};

export default function StancePage() {
  const reserveUrl = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent";

  return (
    <main className={`min-h-screen bg-white text-[#1a1a1a] selection:bg-main/10 selection:text-main ${shippori.className}`}>
      {/* 戻るナビゲーション */}
      <nav className="max-w-[540px] mx-auto px-6 pt-12 pb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs md:text-sm text-neutral-400 hover:text-neutral-700 transition-colors tracking-[0.05em]"
        >
          <span>←</span>
          <span>トップへ戻る</span>
        </Link>
      </nav>

      {/* 本文エリア（最大幅540pxで全角30文字程度に制限・中央配置） */}
      <article className="max-w-[540px] mx-auto px-6 pt-8 pb-32 md:pt-14 md:pb-44 text-[17px] md:text-[18px] font-medium leading-[2.1] tracking-[0.05em] text-[#1a1a1a]">
        {/* ページタイトル */}
        <header className="mb-20 md:mb-28">
          <p className="text-xs tracking-[0.25em] text-neutral-400 uppercase mb-3 font-normal">
            STANCE
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.12em] text-[#111111] leading-relaxed">
            店主のスタンス
          </h1>
          <div className="w-8 h-[1px] bg-neutral-300 mt-8"></div>
        </header>

        {/* 1. 実は、あなたの足は軽いんです。 */}
        <section className="mb-24 md:mb-36">
          <div className="space-y-8">
            <p className="text-lg md:text-xl font-semibold text-[#111111]">
              実は、あなたの足は軽いんです。
            </p>
            <p>
              重いのは、足そのものではありません。<br />
              積み重なった物理的な疲労と、<br />
              そこに乗っている精神的な疲労が、<br />
              足を重くしています。
            </p>
            <p>
              イタキモは、その乗っているものを<br />
              降ろすための場所です。
            </p>
          </div>
        </section>

        {/* 2. 当店のテーマ */}
        <section className="mb-24 md:mb-36 pt-4">
          <h2 className="text-[24px] md:text-[27px] font-semibold tracking-[0.08em] text-[#111111] mb-8 md:mb-10">
            当店のテーマ
          </h2>
          <div className="space-y-8">
            <p>
              当店のテーマは、<br />
              「この人に喜んでもらいたい」と思う人の足を揉む、<br />
              ということです。
            </p>
            <p>
              技術の話でも、価格の話でもありません。<br />
              誰の足を揉むか、という話です。
            </p>
          </div>
        </section>

        {/* 3. 気持ちが入らなければ、結果は変わる */}
        <section className="mb-24 md:mb-36 pt-4">
          <h2 className="text-[24px] md:text-[27px] font-semibold tracking-[0.08em] text-[#111111] mb-8 md:mb-10">
            気持ちが入らなければ、結果は変わる
          </h2>
          <div className="space-y-8">
            <p>
              揉む場所も、手順も、圧の入れ方も同じ。<br />
              それでも、気持ちの入らない足揉みでは、<br />
              結果が変わります。
            </p>
            <p>
              圧の届き方が変わります。<br />
              気づける場所が変わります。<br />
              時間の使い方が変わります。
            </p>
            <p className="font-semibold text-[#111111]">
              技術は同じでも、施術は同じになりません。
            </p>
          </div>
        </section>

        {/* 4. だから、ルールがうるさい */}
        <section className="mb-24 md:mb-36 pt-4">
          <h2 className="text-[24px] md:text-[27px] font-semibold tracking-[0.08em] text-[#111111] mb-8 md:mb-10">
            だから、ルールがうるさい
          </h2>
          <div className="space-y-8">
            <p>
              当店は、他店よりルールやシステムがうるさいと思います。
            </p>
            <p>
              完全予約制で、WEBからのご予約のみ。<br />
              キャンセルポリシーも、決して緩くはありません。
            </p>
            <p>
              当店のルールを「普通のことじゃない？」と思える方こそ、<br />
              私が喜んでほしいと思う方々です。
            </p>
            <p>
              「自分一人が良ければいい」という方には厳しいルールですが、<br />
              「自分勝手なことをすると他の方に迷惑がかかる」という感覚を<br />
              持っている方にとっては、<br />
              特に気になることすら無い常識だと思います。
            </p>
          </div>
        </section>

        {/* 5. 施術の調整は、遠慮なくお伝えください */}
        <section className="mb-24 md:mb-36 pt-4">
          <h2 className="text-[24px] md:text-[27px] font-semibold tracking-[0.08em] text-[#111111] mb-8 md:mb-10">
            施術の調整は、遠慮なくお伝えください
          </h2>
          <div className="space-y-8">
            <p>
              どんなに手が上達しても、<br />
              私一人では良い施術になりません。
            </p>
            <p>
              「もう少し強く」「そこは弱めで」。<br />
              あなたの声が入るたび、圧は正確になっていきます。
            </p>
            <p>
              左足が終わったら、右足と見比べてみてください。<br />
              その違いを一緒に面白がれたら、<br />
              もう施術は半分成功しています。
            </p>
          </div>
        </section>

        {/* 6. 結び */}
        <section className="mb-20 md:mb-28 pt-12 border-t border-neutral-200">
          <div className="space-y-8 mb-12">
            <p>
              言葉で伝えられるのは、ここまでです。
            </p>
            <p className="text-lg md:text-xl font-semibold text-[#111111]">
              あとは、あなたの足で確かめてください。
            </p>
          </div>

          <div className="text-right text-base tracking-[0.2em] text-neutral-600 mb-16 font-normal">
            店主 福助
          </div>

          {/* 予約ボタン */}
          <div className="pt-4 text-center">
            <a
              href={reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto min-w-[280px] bg-main text-white font-medium py-4 px-8 rounded-[4px] hover:bg-mainhover transition-all duration-300 text-sm md:text-base tracking-[0.15em] shadow-sm hover:shadow"
            >
              予約枠を確保する
            </a>
            <div className="mt-8">
              <Link 
                href="/" 
                className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors tracking-widest"
              >
                ← トップページに戻る
              </Link>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
