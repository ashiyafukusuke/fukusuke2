"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    icon: "✦",
    heading: null,
    body: (
      <>
        <p className="leading-loose text-gray-700">
          はじめまして。西東京市ひばりが丘の足つぼ専門店【イタキモ】<br />
          店主の福助です。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          「福助」は源氏名です。福助人形からとりました。<br />
          この名を使うと決めた日から、言い訳のきかない自分でいようと<br />
          思っています。
        </p>
      </>
    ),
  },
  {
    icon: "⊶",
    heading: null,
    body: (
      <>
        <p className="leading-loose text-gray-700">
          前職は全く別の仕事をしていました。<br />
          足つぼを受けたことすらないまま、この世界に飛び込みました。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          師匠にゼロから教わり、実際にお客様の足を揉み始めると、<br />
          疑問が出てきました。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          痛いのに、なぜ意識が溶けていくんだろう。<br />
          このゴリゴリは、本当に老廃物なのか。<br />
          反射区は、本当に臓器とつながっているのか。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          答えを探して、解剖生理学や自律神経の本を読みました。<br />
          今も読んでいます。完全な答えはまだ出ていません。
        </p>
      </>
    ),
  },
  {
    icon: "⊶",
    heading: null,
    body: (
      <>
        <p className="leading-loose text-gray-700">
          今のところ辿り着いているのは、足全体を深く丁寧に刺激する<br />
          ことで副交感神経が優位になり、意識が少しずつ溶けていくと<br />
          いう現象です。眠る人もいます。しゃべりながら目がトロンと<br />
          する人もいます。施術後に「なんか変わった気がする」という<br />
          感想は、ほぼ全員からいただきます。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          反射区については、全否定もしていません。<br />
          「ここを押せばこの臓器が治る」という因果関係には懐疑的です。<br />
          ただ、首肩がこっている方の僧帽筋の反射区が硬くなっている<br />
          ことは、実際によくある。体の負担が足裏に現れる「感性の地図」<br />
          として読む分には、意味があると思っています。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          信じていないことを売り文句にしたくないので、正直に書きました。
        </p>
      </>
    ),
  },
  {
    icon: "✿",
    heading: null,
    body: (
      <>
        <p className="leading-loose text-gray-700">
          足つぼにゴールはないと思っています。<br />
          次にお会いするときは、今日より上手くなっていたい。<br />
          そのために学び続けています。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          ひばりが丘HIBARIDO内の小さな一室で、お待ちしています。
        </p>
        <div className="mt-6 flex justify-end">
          <p className="font-serif text-ink tracking-widest text-sm border-b border-terracotta/40 pb-1">
            ── 福助
          </p>
        </div>
      </>
    ),
  },
];

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
              className="pointer-events-auto relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[88vh] flex flex-col bg-offwhite rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ヘッダー */}
              <div className="flex-shrink-0 flex items-center justify-between px-6 pt-6 pb-4 border-b border-gray-100">
                <div>
                  <p className="text-xs text-olive tracking-widest font-serif mb-0.5">
                    STANCE
                  </p>
                  <h2 className="font-serif text-lg font-bold text-ink tracking-wide">
                    福助のスタンス
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="モーダルを閉じる"
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-terracotta/10 text-gray-400 hover:text-terracotta flex items-center justify-center transition-colors text-lg leading-none"
                >
                  ✕
                </button>
              </div>

              {/* スクロールエリア */}
              <div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6 space-y-8">
                {sections.map((section, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                    className="relative"
                  >
                    {/* セクションヘッダー */}
                    {section.heading && (
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-terracotta/60 text-base select-none" aria-hidden>
                          {section.icon}
                        </span>
                        <h3 className="font-serif font-bold text-ink text-base tracking-wide">
                          {section.heading}
                        </h3>
                        <span className="flex-1 h-px bg-gray-200" />
                      </div>
                    )}

                    {/* 最初のセクションだけアイコン無し（挨拶文） */}
                    {!section.heading && i === 0 && (
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex-1 h-px bg-terracotta/20" />
                        <span className="text-terracotta/40 text-xs tracking-widest font-serif">
                          ── ご挨拶 ──
                        </span>
                        <span className="flex-1 h-px bg-terracotta/20" />
                      </div>
                    )}

                    <div className="text-sm sm:text-base">{section.body}</div>

                    {/* セクション間の装飾区切り（最後以外） */}
                    {i < sections.length - 1 && (
                      <div className="flex justify-center mt-8">
                        <span className="text-gray-200 tracking-[0.5em] text-xs select-none">
                          ✦ ✦ ✦
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* フッター CTA */}
              <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-offwhite">
                <a
                  href="https://reserva.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-vitality to-terracotta text-white font-bold py-3 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 text-sm tracking-wide"
                >
                  行く日を決める
                </a>
                <p className="text-center text-xs text-gray-400 mt-2">Powered by RESERVA</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}