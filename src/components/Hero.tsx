"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="gradient-border bg-offwhite pt-24 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-start relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive font-serif text-lg md:text-xl tracking-widest mb-4"
        >
          足つぼ・足揉み専門店
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold text-ink leading-tight mb-6 tracking-wide"
        >
          【守破離】<br/>
          <span className="text-3xl md:text-4xl text-terracotta mt-2 block">-SHUHARI-</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-serif text-ink mb-10 leading-relaxed"
        >
          痛気持ちいいのに、<br className="md:hidden" />意識が溶ける足揉み
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 leading-loose max-w-2xl"
        >
          現代社会で着込んでしまった「見えない鎧」を優しく剥がし、<br/>
          自覚すらなかった緊張や疲れをまるごと鎮める。<br/>
          覚醒と睡眠の『あわい』をたゆたうような心地よさで、<br/>
          あなたを、まっさらな身体へと還します。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center bg-gradient-to-r from-vitality to-terracotta text-white font-bold py-4 px-10 rounded-full shadow-lg shadow-vitality/25 hover:shadow-vitality/40 hover:scale-105 transition-all duration-300 text-base tracking-wider"
          >
            足揉みを予約する
          </a>
          <a
            href="#menu"
            className="text-sm text-gray-500 hover:text-terracotta underline underline-offset-4 decoration-dotted transition-colors duration-200 tracking-wider"
          >
            まずはお品書きを見る →
          </a>
        </motion.div>
      </div>
    </header>
  );
}
