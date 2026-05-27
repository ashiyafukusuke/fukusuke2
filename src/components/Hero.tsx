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
          足つぼ専門店
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-bold text-ink leading-tight mb-6 tracking-wide"
        >
          【イタキモ】<br/>
          <span className="text-3xl md:text-4xl text-terracotta mt-2 block">-ITAKIMO-</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-serif text-ink mb-10 leading-relaxed tracking-wide"
        >
          痛いのに、<br className="md:hidden" />なぜか眠くなる。
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 leading-loose max-w-2xl"
        >
          足つぼ特有の「痛気持ちいい」刺激なのに、<br />
          気づけばうとうと、夢見心地。<br />
          ガチガチの疲れを底から引き剥がし、<br /><br />
          あなたを、全身スッキリとした状態へリセットします。
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
