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
      </div>
    </header>
  );
}
