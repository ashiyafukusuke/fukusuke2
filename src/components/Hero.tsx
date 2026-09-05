"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="bg-bg pt-4 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-start relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex justify-center mb-6 md:mb-10"
        >
          <div className="relative w-[min(480px,92vw)] aspect-[4/3] sm:aspect-[16/10] overflow-hidden flex items-center justify-center">
            {/* 
              画像をpublic/logo.pngとして上書き保存してください。
              画像周囲の余白が広いため、scaleで拡大してトリミング調整しています。
            */}
            <img 
              src="/logo.png" 
              alt="イタキモロゴ" 
              className="absolute w-full h-full object-cover scale-[1.65] md:scale-[1.75] origin-center mix-blend-multiply" 
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-4xl md:text-6xl font-sans text-ink font-black mb-6 leading-[1.3] md:leading-[1.4] tracking-wider"
        >
          最初から最後まで、<br />
          <span className="text-main">イタ気持ちいい</span>が続く。
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full text-center text-lg md:text-xl text-ink font-bold tracking-widest"
        >
          ひばりが丘の足つぼ専門店 イタキモ
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-main text-white font-bold py-[14px] px-[32px] rounded-[6px] hover:bg-mainhover transition duration-200 text-base tracking-[0.08em]"
          >
            予約枠を確保する
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center bg-transparent text-main border-2 border-main font-bold py-[12px] px-[28px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-sm tracking-wide"
          >
            メニューを見る ➔
          </a>
        </motion.div>
      </div>
    </header>
  );
}