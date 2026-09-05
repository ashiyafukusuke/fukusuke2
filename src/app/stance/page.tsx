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
  description: "イタキモ店主・福助の施術に対する考え方、スタンスについて。「痛いのに、意識が溶けていく」その体験の裏側を言葉にしました。",
};

export default function StancePage() {
  const reserveUrl = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent";

  return (
    <main className={`min-h-screen bg-[#FCFCFC] text-[#1a1a1a] selection:bg-main/10 selection:text-main ${shippori.className}`}>
      {/* 戻るナビゲーション */}
      <nav className="max-w-2xl mx-auto px-6 pt-12 pb-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs md:text-sm text-neutral-400 hover:text-neutral-700 transition-colors tracking-widest"
        >
          <span>←</span>
          <span>トップへ戻る</span>
        </Link>
      </nav>

      {/* 本文エリア */}
      <article className="max-w-2xl mx-auto px-6 pt-10 pb-32 md:pt-16 md:pb-40">
        {/* ページタイトル */}
        <header className="mb-24 md:mb-32">
          <p className="text-xs tracking-[0.25em] text-neutral-400 uppercase mb-3">
            STANCE
          </p>
          <h1 className="text-2xl md:text-3xl font-medium tracking-[0.15em] text-[#111111] leading-relaxed">
            店主のスタンス
          </h1>
          <div className="w-8 h-[1px] bg-neutral-300 mt-8"></div>
        </header>

        {/* 冒頭 */}
        <section className="mb-24 md:mb-32">
          <div className="space-y-6 text-sm md:text-base leading-[2.5] tracking-wide text-neutral-800">
            <p className="text-base md:text-lg font-medium text-[#111111]">
              実は、あなたの足は軽いんです。
            </p>
            <p>
              重いのは、足そのものではありません。<br />
              一日分の疲れが、上に乗っているだけです。
            </p>
            <p>
              イタキモは、その乗っているものを<br />
              降ろすための場所です。
            </p>
          </div>
        </section>

        {/* イタキモという体験 */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-lg md:text-xl font-medium tracking-[0.12em] text-[#111111] mb-8">
            イタキモという体験
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-neutral-800">
            <p>
              当店のテーマは、<br />
              <span className="border-b border-neutral-300 pb-0.5">「痛いのに、意識が溶けていく」</span>。
            </p>
            <p>
              不思議に聞こえるかもしれません。<br />
              痛いのに、なぜか呼吸が深くなる。<br />
              痛いのに、なぜか目を開けていられなくなる。
            </p>
            <p>
              施術は左足から始めます。<br />
              左足が終わる頃、多くの方はもう、<br />
              うとうとし始めています。
            </p>
            <p>
              それでいいんです。<br />
              むしろ、そのための施術をしています。
            </p>
            <p>
              イタ気持ちいい圧は、身体の力をほどいていきます。<br />
              力みが抜けた身体は、休むことを思い出します。<br />
              眠ってしまっても、圧は最後まで変わりません。<br />
              安心して、溶けてください。
            </p>
          </div>
        </section>

        {/* 反射区について、正直に */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-lg md:text-xl font-medium tracking-[0.12em] text-[#111111] mb-8">
            反射区について、正直に
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-neutral-800">
            <p>
              「ここは胃のツボですね」という説明を、<br />
              当店ではしません。
            </p>
            <p>
              足を揉んでいると、たしかに面白い一致に出会います。<br />
              けれど、それを「足のここが内臓のあそこにつながっている」と<br className="hidden sm:inline" />
              言い切ることは、今の私には誠実だと思えません。
            </p>
            <p>
              私が確かに言えるのは、目の前の足の状態だけです。<br />
              硬いところ、冷えているところ、圧を待っているところ。<br />
              それを見つけて、ほどいていく。<br />
              それが私の仕事だと思っています。
            </p>
            <p className="font-medium text-[#111111]">
              分からないことを、分かると言わない。<br />
              その代わり、分かることには全力を注ぐ。<br />
              これが当店のスタンスです。
            </p>
          </div>
        </section>

        {/* なぜ、最後まで続くのか */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-lg md:text-xl font-medium tracking-[0.12em] text-[#111111] mb-8">
            なぜ、最後まで続くのか
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-neutral-800">
            <p>
              私は腕の力で揉みません。<br />
              体重とリズムで揉みます。
            </p>
            <p>
              だから何人揉んでも、ほとんど疲れません。<br />
              あなたがその日の最後のお客様でも、<br />
              最初のお客様と同じ圧でお迎えできます。
            </p>
            <p>
              足を揉むことが、好きで仕方ないんです。<br />
              同じ足は一つもないので、毎日が新しい発見です。<br />
              この仕事に、ゴールはないと思っています。
            </p>
          </div>
        </section>

        {/* どんな方に来てほしいか */}
        <section className="mb-24 md:mb-32">
          <h2 className="text-lg md:text-xl font-medium tracking-[0.12em] text-[#111111] mb-8">
            どんな方に来てほしいか
          </h2>
          <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-neutral-800">
            <p>
              イタキモは、施術者一人の小さな店です。<br />
              だからこそ、一枠一枠を大切にしたいと思っています。
            </p>
            <p>
              ご自身の身体に興味がある方。<br />
              疲れを放置せず、ちゃんと降ろしに来られる方。<br />
              予約の時間を、お互いに大切にできる方。
            </p>
            <p className="font-medium text-[#111111]">
              そういう方の足を、揉ませてください。
            </p>
          </div>
        </section>

        {/* 結び */}
        <section className="mb-20 md:mb-28 pt-8 border-t border-neutral-200">
          <div className="space-y-6 text-sm md:text-base leading-[2.4] tracking-wide text-neutral-800 mb-12">
            <p>
              言葉で伝えられるのは、ここまでです。
            </p>
            <p className="text-base md:text-lg font-medium text-[#111111]">
              「溶ける」がどういうことかは、<br />
              あなたの足で確かめてください。
            </p>
          </div>

          <div className="text-right text-base tracking-[0.2em] text-neutral-600 mb-16">
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
