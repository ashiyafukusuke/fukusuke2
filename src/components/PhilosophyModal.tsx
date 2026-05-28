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
        <p className="text-sm text-olive font-serif tracking-widest mb-3">
          足つぼ専門店 イタキモ について
        </p>
        <p className="leading-loose text-gray-700">
          はじめまして。西東京市ひばりヶ丘の足つぼ・足揉み専門店
          <span className="text-ink font-semibold">【イタキモ】</span>
          店主の福助です。
        </p>
        <p className="mt-3 leading-loose text-gray-700">
          「福助」は、私の源氏名。日本の伝統的な縁起物「福助人形」にあやかって名付けました。
          この名を背負うことで、素のだらしない自分を切り離し、みんなに喜ばれる足揉み師として全力で振る舞う——
          <span className="italic text-terracotta">私にとっての、覚悟のスイッチです。</span>
        </p>
      </>
    ),
  },
  {
    icon: "⊶",
    heading: "ガチガチの疲れを、足元から引き剥がす",
    body: (
      <>
        <p className="leading-loose text-gray-700">
          スマホ、PC、絶え間ない通知、締め切り……。常に「ON」を強制される日々の中で、私たちは
          無意識に疲れを溜め込んでいます。その疲れを足元から解きほぐし、
          全身スッキリとした状態へリセットさせること——それが、私の使命です。
        </p>
        <p className="mt-3 text-sm italic text-gray-400">
          （大げさに聞こえたかもしれませんが、本気です。）
        </p>
      </>
    ),
  },
  {
    icon: "⊶", // 元のicon: "⊷" から修正
    heading: "正直な話をします",
    body: (
      <>
        <p className="leading-loose text-gray-700">
          私は「ここを押せばこの内臓が治る」といった治療行為にはこだわりません。
          足裏の「反射区」は身体の負担を感じ取る「感性の地図」として今も価値がある。
          ただ、足裏刺激で内臓を直接治療するエビデンスは、現代科学では十分ではない。
        </p>
        <p className="mt-3 text-sm italic text-gray-400">
          （業界的に言いにくいことですが、正直に言います。）
        </p>
        <p className="mt-3 leading-loose text-gray-700">
          私が大切にしているのは——足全体を深く丁寧に刺激することで副交感神経を優位にし、
          意識が「ふっと」溶けていくような状態へ導くこと。伝統を尊重しながら、
          身体のファクトに正直であること。これが私のスタンスです。
        </p>
      </>
    ),
  },
  {
    icon: "⊸",
    heading: "体感できること",
    body: (
      <>
        <p className="leading-loose text-gray-700">
          肩こり、腰痛、慢性的な疲労感、自律神経の乱れ。足裏がほぐれるにつれ、身体の奥底からじんわりと温まり、気づけば頭の中のノイズが消え去り、首・肩・腰までも軽くなっている—— これが<span className="font-semibold text-terracotta">「痛いのに、なぜか眠くなる」</span>という体験です。
        </p>
        <p className="mt-3 text-sm italic text-gray-400 font-medium">
          （「足をもむだけでそんなに変わる？」と半信半疑の方へ。本当に変わるかどうか、まずは『初回お試し制度』でご自身の身体でお確かめください。）
        </p>
      </>
    ),
  },
  {
    icon: "✿",
    heading: "最後に",
    body: (
      <>
        <p className="leading-loose text-gray-700">
          お金を払ってくれさえすれば誰の足でも揉むぜ！というスタンスではありません。
          気持ちの籠らない足揉みには何の意味もないと思います。
        </p>
        <p className="mt-1 text-sm italic text-gray-400">
          （正直すぎますか？でも本当のことです。）
        </p>
        <p className="mt-3 leading-loose text-gray-700">
          限られた時間の中でご自身を大切にしようとする方、ご自身のために時間を使おうとしている方にこそ、
          持てる技術のすべてをお届けしたいと考えています。
        </p>
        <p className="mt-4 leading-loose text-gray-700">
          少し生意気な店主ではございますが、ひばりヶ丘HIBARIDO内の静かな一室で、お待ちしております。
        </p>
        <div className="mt-6 flex justify-end">
          <p className="font-serif text-ink tracking-widest text-sm border-b border-terracotta/40 pb-1">
            ―― 福助
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