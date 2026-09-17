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
                  {/* 1. 実は、あなたの足は軽いんです。 */}
                  <div className="mb-12">
                    <p className="font-bold text-lg text-ink mb-4">実は、あなたの足は軽いんです。</p>
                    <p className="leading-[2.2] mb-4">
                      重いのは、足そのものではありません。<br />
                      積み重なった物理的な疲労と、<br />
                      そこに乗っている精神的な疲労が、<br />
                      足を重くしています。
                    </p>
                    <p className="leading-[2.2]">
                      イタキモは、その乗っているものを<br />
                      降ろすための場所です。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 2. 当店のテーマ */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">当店のテーマ</h3>
                    <p className="leading-[2.2] mb-4">
                      当店のテーマは、<br />
                      「この人に喜んでもらいたい」と思う人の足を揉む、<br />
                      ということです。
                    </p>
                    <p className="leading-[2.2]">
                      技術の話でも、価格の話でもありません。<br />
                      誰の足を揉むか、という話です。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 3. 気持ちが入らなければ、結果は変わる */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">気持ちが入らなければ、結果は変わる</h3>
                    <p className="leading-[2.2] mb-4">
                      揉む場所も、手順も、圧の入れ方も同じ。<br />
                      それでも、気持ちの入らない足揉みでは、<br />
                      結果が変わります。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      圧の届き方が変わります。<br />
                      気づける場所が変わります。<br />
                      時間の使い方が変わります。
                    </p>
                    <p className="leading-[2.2] font-bold text-ink">
                      技術は同じでも、施術は同じになりません。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 4. だから、ルールがうるさい */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">だから、ルールがうるさい</h3>
                    <p className="leading-[2.2] mb-4">
                      当店は、他店よりルールやシステムがうるさいと思います。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      完全予約制で、WEBからのご予約のみ。<br />
                      キャンセルポリシーも、決して緩くはありません。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      当店のルールを「普通のことじゃない？」と思える方こそ、<br />
                      私が喜んでほしいと思う方々です。
                    </p>
                    <p className="leading-[2.2]">
                      「自分一人が良ければいい」という方には厳しいルールですが、<br />
                      「自分勝手なことをすると他の方に迷惑がかかる」という感覚を<br />
                      持っている方にとっては、<br />
                      特に気になることすら無い常識だと思います。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 5. 施術の調整は、遠慮なくお伝えください */}
                  <div className="mb-12">
                    <h3 className="font-bold text-base text-ink mb-4">施術の調整は、遠慮なくお伝えください</h3>
                    <p className="leading-[2.2] mb-4">
                      どんなに手が上達しても、<br />
                      私一人では良い施術になりません。
                    </p>
                    <p className="leading-[2.2] mb-4">
                      「もう少し強く」「そこは弱めで」。<br />
                      あなたの声が入るたび、圧は正確になっていきます。
                    </p>
                    <p className="leading-[2.2]">
                      左足が終わったら、右足と見比べてみてください。<br />
                      その違いを一緒に面白がれたら、<br />
                      もう施術は半分成功しています。
                    </p>
                  </div>

                  <div className="w-8 h-px bg-divider my-8"></div>

                  {/* 6. 結び */}
                  <div className="mb-6">
                    <p className="leading-[2.2] mb-4">
                      言葉で伝えられるのは、ここまでです。
                    </p>
                    <p className="leading-[2.2] font-bold text-ink">
                      あとは、あなたの足で確かめてください。
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