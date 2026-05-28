"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-bg py-24 px-6 border-t-8 border-sub relative overflow-hidden text-ink">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sub to-main"></div>
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-black text-ink mb-8 tracking-widest drop-shadow-sm"
        >
          【足つぼ専門店 イタキモ】
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 max-w-xl mx-auto"
        >
          <p className="text-gray-700 leading-loose text-sm md:text-base font-medium text-left inline-block">
            日々の疲れをリセットし、本来の身軽さを取り戻す場所。<br/>
            HIBARIDOの決して大きくはない一室ではありますが、<br className="hidden md:block" />全身全霊を込めて足揉みさせて頂きます。
          </p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-xs text-gray-500 tracking-widest mb-4 uppercase"
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
          className="inline-flex items-center justify-center bg-main hover:bg-mainhover text-white font-bold py-[14px] px-[32px] rounded-[6px] transition-all duration-200 shadow-xl shadow-main/30 hover:shadow-main/50 text-lg tracking-[0.08em]"
        >
          予約枠を確保する
        </motion.a>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm text-gray-600 leading-loose flex flex-col items-center"
        >
          <p><strong>所在地:</strong> 〒202-0001 東京都西東京市ひばりが丘3丁目2−51 2番 51号 2F R-09</p>
          <p className="mt-2"><strong>営業日:</strong> 水・木 6時30分～21時30分</p>
          <p className="text-xs mt-1 text-gray-500">※その他曜日は予約ページにてご確認ください。予約枠がある日時は営業日となります。</p>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-xs text-gray-400 tracking-widest"
        >
          西東京市 ひばりが丘 HIBARIDO 内 / 福助
        </motion.p>
      </div>
    </footer>
  );
}