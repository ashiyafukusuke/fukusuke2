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
          className="font-heading text-3xl md:text-4xl text-main mb-8 tracking-widest drop-shadow-sm"
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
          <p className="text-gray-700 leading-loose text-sm md:text-base font-bold text-left inline-block">
            日々の疲れをリセットし、本来の身軽さを取り戻す場所。<br />
            HIBARIDOの決して大きくはない一室ですが、<br className="hidden md:block" />
            だからこそ、あなたの足だけに全力を注げます。
          </p>
        </motion.div>
        

        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent" 
          target="_blank"
          rel="noopener noreferrer"
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
          <p><strong>所在地:</strong> 〒202-0001 東京都西東京市ひばりが丘3丁目2−51 HIBARIDO 2F R-09</p>
          <div className="mt-2 text-center leading-relaxed">
            <p><strong>営業日:</strong> 水・木 9:00〜22:40</p>
            <p className="text-xs mt-1 text-gray-500">（その他曜日は夜のみ、予約ページの空き枠をご確認ください）</p>
          </div>
          <div className="mt-6 flex flex-col items-center w-full">
            <p className="text-[13px] font-bold text-gray-700 mb-2">お問い合わせ</p>
            <div className="flex flex-col gap-2 w-max text-left">
              <a href="https://www.instagram.com/fukusuke.ashiya/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-main underline hover:no-underline block">
                ・Instagram DM
              </a>
              <a href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/contact" target="_blank" rel="noopener noreferrer" className="text-[13px] text-main underline hover:no-underline block">
                ・お問い合わせフォーム
              </a>
            </div>
          </div>
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
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-[11px] text-[#5C5C5C] text-left inline-block mt-4 leading-[1.8]"
        >
          当店の施術はリラクゼーションを目的としたものであり、<br />
          医療行為・治療行為にはあたりません。<br />
          疾病の診断・治療・予防を目的とするものではございません。<br />
          体調に不安のある方は、事前に医師にご相談ください。
        </motion.p>
      </div>
    </footer>
  );
}