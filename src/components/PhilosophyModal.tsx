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
                  <p className="leading-[2.0] mb-[1.8em]">
                    はじめまして。西東京市ひばりが丘の足つぼ専門店【イタキモ】<br />
                    店主の福助です。
                  </p>
                  <p className="leading-[2.0] mb-[1.8em]">
                    「福助」は源氏名です。福助人形からとりました。<br />
                    この名を使うと決めた日から、言い訳のきかない自分でいようと<br />
                    思っています。
                  </p>

                  <div className="w-[40px] h-[2px] bg-main mx-auto my-8"></div>

                  <p className="leading-[2.0] mb-[1.8em]">
                    前職は全く別の仕事をしていました。<br />
                    足つぼを受けたことすらないまま、この世界に飛び込みました。
                  </p>
                  <p className="leading-[2.0] mb-[1.8em]">
                    師匠にゼロから教わり、実際にお客様の足を揉み始めると、<br />
                    疑問が出てきました。
                  </p>

                  <div className="border-l-[3px] border-main bg-cardlight px-4 py-3 rounded-r font-semibold mb-[1.8em]">
                    <p className="leading-[2.0] text-ink">痛いのに、なぜ意識が溶けていくんだろう。</p>
                    <p className="leading-[2.0] text-ink">このゴリゴリは、本当に老廃物なのか。</p>
                    <p className="leading-[2.0] text-ink">反射区は、本当に臓器とつながっているのか。</p>
                  </div>

                  <p className="leading-[2.0] mb-[1.8em]">
                    答えを探して、解剖生理学や自律神経の本を読みました。<br />
                    今も読んでいます。完全な答えはまだ出ていません。
                  </p>

                  <div className="w-[40px] h-[2px] bg-main mx-auto my-8"></div>

                  <p className="leading-[2.0] mb-[1.8em]">
                    今のところ辿り着いているのは、足全体を深く丁寧に刺激する<br />
                    ことで副交感神経が優位になり、意識が少しずつ溶けていくと<br />
                    いう現象です。眠る人もいます。しゃべりながら目がトロンと<br />
                    する人もいます。施術後に「なんか変わった気がする」という<br />
                    感想は、ほぼ全員からいただきます。
                  </p>
                  <p className="leading-[2.0] mb-[1.8em]">
                    反射区については、全否定もしていません。<br />
                    「ここを押せばこの臓器が治る」という因果関係には懐疑的です。<br />
                    ただ、首肩がこっている方の僧帽筋の反射区が硬くなっている<br />
                    ことは、実際によくある。体の負担が足裏に現れる<span className="text-main font-bold">感性の地図</span><br />
                    として読む分には、意味があると思っています。
                  </p>
                  <p className="leading-[2.0] mb-[1.8em]">
                    信じていないことを売り文句にしたくないので、正直に書きました。
                  </p>

                  <div className="w-[40px] h-[2px] bg-main mx-auto my-8"></div>

                  <p className="leading-[2.0] mb-[1.8em]">
                    足つぼにゴールはないと思っています。<br />
                    次にお会いするときは、今日より上手くなっていたい。<br />
                    そのために学び続けています。
                  </p>
                  <p className="leading-[2.0] mb-[1.8em]">
                    ひばりが丘HIBARIDO内の小さな一室で、お待ちしています。
                  </p>

                  <p className="text-right font-bold text-main mt-10 tracking-[0.1em]">
                    ── 福助
                  </p>
                </motion.div>
              </div>

              {/* フッター CTA */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-divider bg-bg">
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block w-full text-center bg-transparent text-main border-2 border-main font-semibold py-[14px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-sm tracking-[0.08em]"
                >
                  コースを選ぶ ➔
                </button>
                <p className="text-center text-xs text-graytext mt-2 font-medium">Powered by RESERVA</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}