"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-paper py-24 px-6 border-t border-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olive to-terracotta"></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-ink mb-8 tracking-wide"
        >
          【守破離 -SHUHARI- 】
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-12 leading-loose max-w-xl text-sm md:text-base"
        >
          日常のノイズを遮断し、本来の自分へと還る場所。<br/>
          HIBARIDOUの決して大きくはない一室ではありますが、全身全霊を込めて足揉みさせて頂きます。
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-vitality to-terracotta hover:from-[#FF7A50] hover:to-[#C6674B] text-white font-bold py-4 px-16 rounded-full transition-all duration-300 shadow-xl shadow-vitality/30 hover:shadow-vitality/50 text-lg tracking-wider"
        >
          LINEで予約する
        </motion.a>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-xs text-gray-400 tracking-widest"
        >
          西東京市 ひばりヶ丘 HIBARIDO 内 ｜ 足揉み職人 福助
        </motion.p>
      </div>
    </footer>
  );
}
