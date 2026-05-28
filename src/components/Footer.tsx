"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#3d2b2b] to-ink py-24 px-6 relative overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-2 bg-white/20"></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 tracking-wide drop-shadow-sm"
        >
          【足つぼ専門店 イタキモ】
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 mb-12 leading-loose max-w-xl text-sm md:text-base font-medium"
        >
          日々の疲れをリセットし、本来の身軽さを取り戻す場所。<br/>
          HIBARIDOの決して大きくはない一室ではありますが、全身全霊を込めて足揉みさせて頂きます。
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xs text-white/60 tracking-widest mb-4 uppercase"
        >
          Powered by RESERVA
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#" 
          className="inline-flex items-center justify-center bg-white text-terracotta hover:bg-gray-50 font-bold py-4 px-16 rounded-full transition-all duration-300 shadow-xl shadow-black/20 text-lg tracking-widest"
        >
          行く日を決める
        </motion.a>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm text-white/80 leading-loose flex flex-col items-center"
        >
          <p><strong>所在地:</strong> 〒202-0001 東京都西東京市ひばりが丘3丁目2−51 2番 51号 2F R-09</p>
          <p className="mt-2"><strong>営業日:</strong> 水・木 6時30分～21時30分</p>
          <p className="text-xs mt-1 text-white/70">※その他曜日は予約ページにてご確認ください。予約枠がある日時は営業日となります。</p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-xs text-white/60 tracking-widest"
        >
          西東京市 ひばりが丘 HIBARIDO 内 / 福助
        </motion.p>
      </div>
    </footer>
  );
}
