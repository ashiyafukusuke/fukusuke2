"use client";
import { motion } from "framer-motion";

export default function VoicesCarousel() {
  const voices = [
    {
      content: "「店名の通り、イタキモの絶妙な心地良さを味わうことができました」",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    },
    {
      content: "「風が通るような綺麗な作りで、居心地が良かったです」",
      bg: "bg-card",
      borderColor: "border-divider"
    },
    {
      content: "「足だけでなく、気持ちまで軽くなりました」",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    }
  ];

  return (
    <section id="voices" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-main inline-block relative tracking-widest mb-3">
            足をお任せいただいた方の声
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
          <div className="mt-5 flex items-center justify-center gap-1">
            <span className="text-[#fbbc04] text-lg tracking-widest">★★★★★</span>
            <span className="text-xs font-bold text-gray-500 ml-1">Googleクチコミ 5.0</span>
          </div>
          <p className="text-gray-400 mt-6 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
            ← 横にスクロールできます →
          </p>
        </div>

        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {voices.map((voice, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`min-w-[70vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-12px)] flex-1 shrink-0 snap-center rounded-3xl p-5 md:p-6 border-2 ${voice.borderColor} ${voice.bg} flex flex-col justify-between shadow-sm`}
            >
              <p className="text-[13px] md:text-sm font-bold text-gray-700 leading-loose whitespace-pre-wrap mb-4">
                {voice.content}
              </p>
              <p className="text-[10px] md:text-xs text-gray-400 text-right mt-auto">
                — Googleクチコミより
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-2 text-center flex flex-col items-center">
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            こちらからクチコミをお願いすることは致しませんが、<br className="md:hidden" />ご感想を頂けるとやはり嬉しいです。ありがとうございます！
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="https://share.google/hoX4rSA5QB2lNpmHH" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-main border-2 border-main font-bold py-[10px] px-[24px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-xs tracking-wide"
            >
              Googleクチコミを見る ➔
            </a>
            <a
              href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/reviews" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-main border-2 border-main font-bold py-[10px] px-[24px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-xs tracking-wide"
            >
              STORESレビューを見る ➔
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
