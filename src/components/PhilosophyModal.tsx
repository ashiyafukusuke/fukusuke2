"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhilosophyModal({ isOpen, onClose }: PhilosophyModalProps) {
  // Escキーで閉じる
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* オーバーレイ */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* モーダル本体 */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto relative w-full sm:max-w-[640px] max-h-[92dvh] sm:max-h-[88vh] flex flex-col bg-bg rounded-t-[12px] sm:rounded-[12px] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ヘッダー */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 pt-6 pb-4 border-b border-divider">
                <div>
                  <p className="text-xs text-sub tracking-widest font-serif mb-0.5">
                    STANCE
                  </p>
                  <h2 className="font-serif text-lg font-black text-ink tracking-widest">
                    福助のスタンス
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="モーダルを閉じる"
                  className="w-9 h-9 rounded-full bg-divider/30 hover:bg-main/10 text-graytext hover:text-main flex items-center justify-center transition-colors text-lg leading-none"
                >
                  ✕
                </button>
              </div>

              {/* スクロールエリア */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-8 py-10">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative text-sm sm:text-base text-ink"
                >
                  {/* 導入 */}
                  <div className="mb-12">
                    <p className="font-bold text-lg text-ink mb-4">実は、あなたの足は軽いんです。</p>
                    <p className="leading-[2.2] mb-4">
                      重いのは、足そのものではありません。<br />
                      一日分の疲れが、上に乗っているだけです。
                    </p>
                    <p className="leading-[2.2]">
                      イタキモは、その乗っているものを<br />
                      降ろすための場所です。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* イタキモという体験 */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">イタキモという体験</h3>
                    <p className="leading-[2.2] mb-4">
                      当店のテーマは、<br />
                      <strong className="border-b border-divider pb-0.5">「痛いのに、意識が溶けていく」</strong>。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      不思議に聞こえるかもしれません。<br />
                      痛いのに、なぜか呼吸が深くなる。<br />
                      痛いのに、なぜか目を開けていられなくなる。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      施術は左足から始めます。<br />
                      左足が終わる頃、多くの方はもう、<br />
                      うとうとし始めています。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      それでいいんです。<br />
                      むしろ、そのための施術をしています。
                    </p>
                    <p className="leading-[2.2]">
                      イタ気持ちいい圧は、身体の力をほどいていきます。<br />
                      力みが抜けた身体は、休むことを思い出します。<br />
                      眠ってしまっても、圧は最後まで変わりません。<br />
                      安心して、溶けてください。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 反射区について、正直に */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">反射区について、正直に</h3>
                    <p className="leading-[2.2] mb-4">
                      「ここは胃のツボですね」という説明を、<br />
                      当店ではしません。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      足を揉んでいると、たしかに面白い一致に出会います。<br />
                      けれど、それを「足のここが内臓のあそこにつながっている」と<br />
                      言い切ることは、今の私には誠実だと思えません。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      私が確かに言えるのは、目の前の足の状態だけです。<br />
                      硬いところ、冷えているところ、圧を待っているところ。<br />
                      それを見つけて、ほどいていく。<br />
                      それが私の仕事だと思っています。
                    </p>
                    <p className="leading-[2.2] font-bold text-ink">
                      分からないことを、分かると言わない。<br />
                      その代わり、分かることには全力を注ぐ。<br />
                      これが当店のスタンスです。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* なぜ、最後まで続くのか */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">なぜ、最後まで続くのか</h3>
                    <p className="leading-[2.2] mb-4">
                      私は腕の力で揉みません。<br />
                      体重とリズムで揉みます。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      だから何人揉んでも、ほとんど疲れません。<br />
                      あなたがその日の最後のお客様でも、<br />
                      最初のお客様と同じ圧でお迎えできます。
                    </p>
                    <p className="leading-[2.2]">
                      足を揉むことが、好きで仕方ないんです。<br />
                      同じ足は一つもないので、毎日が新しい発見です。<br />
                      この仕事に、ゴールはないと思っています。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* どんな方に来てほしいか */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">どんな方に来てほしいか</h3>
                    <p className="leading-[2.2] mb-4">
                      イタキモは、施術者一人の小さな店です。<br />
                      だからこそ、一枠一枠を大切にしたいと思っています。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      ご自身の身体に興味がある方。<br />
                      疲れを放置せず、ちゃんと降ろしに来られる方。<br />
                      予約の時間を、お互いに大切にできる方。
                    </p>
                    <p className="leading-[2.2] font-bold text-ink">
                      そういう方の足を、揉ませてください。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 結び */}
                  <div className="mb-6">
                    <p className="leading-[2.2] mb-4">
                      言葉で伝えられるのは、ここまでです。
                    </p>
                    <p className="leading-[2.2] font-bold text-ink">
                      「溶ける」がどういうことかは、<br />
                      あなたの足で確かめてください。
                    </p>
                    <p className="text-right text-graytext mt-8 tracking-widest">
                      店主 福助
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* フッター CTA */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-divider bg-bg">
                <a
                  href="https://itakimo-hibarigaoka.stores.jp/reserve/hibarigaoka_ashitsubo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-main text-white font-bold py-[14px] rounded-[6px] hover:bg-mainhover transition duration-200 text-sm tracking-[0.08em]"
                >
                  予約枠を確保する
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}