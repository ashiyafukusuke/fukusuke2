"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="bg-paper pt-4 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex justify-center mb-6 md:mb-10"
        >
          <div className="relative w-[min(230px,62vw)] sm:w-[270px] md:w-[280px] aspect-square flex items-center justify-center">
            <img 
              src="/logo.svg" 
              alt="足つぼ専門店 イタキモ" 
              className="w-full h-full object-contain" 
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full text-center mb-6 md:mb-8"
        >
          <h1 className="text-2xl min-[390px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-ink font-semibold mb-6 md:mb-8 leading-[1.35] md:leading-[1.4] tracking-[0.04em] whitespace-nowrap">
            足にご褒美を。
          </h1>
          <div className="text-base min-[390px]:text-lg sm:text-xl md:text-2xl font-sans text-ink-700 font-normal tracking-wider leading-[1.9] space-y-2 sm:space-y-3">
            <p className="whitespace-nowrap">じっくり、ゆっくり、奥深く。</p>
            <p className="whitespace-nowrap">痛いけど、でも、気持ち良い。</p>
            <p className="whitespace-nowrap">そして帰り道は、足が軽い。</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full text-center text-xs min-[390px]:text-[13px] sm:text-sm md:text-base text-ink-600 font-medium tracking-wide mt-6 md:mt-8 space-y-1.5"
        >
          <p className="whitespace-nowrap">西東京市ひばりが丘の足つぼ専門店</p>
          <p className="whitespace-nowrap">完全予約制・初回お試し制度あり（60分・90分）</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011/book/course_type?courseCanonicalId=947238"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand text-white font-bold py-[14px] px-[32px] rounded-[6px] hover:bg-brand-hover transition duration-200 text-base tracking-[0.08em]"
          >
            イタキモを体験してみる
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center bg-transparent text-brand border-2 border-brand font-bold py-[12px] px-[28px] rounded-[6px] hover:bg-brand hover:text-white transition duration-200 text-sm tracking-wide"
          >
            メニューを見る ➔
          </a>
        </motion.div>
      </div>
    </header>
  );
}