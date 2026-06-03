"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="bg-bg pt-24 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-start relative">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 md:mb-12"
        >
          {/* 
            TODO: base64データが長すぎて途切れてしまったため、
            代わりに画像ファイル（/logo.png）を読み込むようにしています。
            publicフォルダに「logo.png」という名前でロゴ画像を配置してください。
            または、直接ここにbase64データを貼り付けてください。
          */}
          <img 
            src="/logo.png" 
            alt="イタキモロゴ" 
            className="w-[280px] md:w-[400px] h-auto object-contain mt-2 mb-4" 
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl md:text-5xl font-serif text-main font-black mb-10 leading-relaxed tracking-widest"
        >
          痛いのに、<br className="md:hidden" />意識が溶けていく。
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-ink font-medium leading-[1.8] md:leading-loose max-w-2xl"
        >
          強い刺激を受けているはずなのに、<br />
          気づくと、頭の中が静かになっていく。<br />
          <br />
          眠る人もいます。しゃべりながら<br />
          目がトロンとする人もいます。<br />
          <br />
          疲れが抜けない。眠りが浅い。<br />
          何をしても、奥の疲れだけが残る。<br />
          <br />
          そんな方に、一度だけ試してほしい。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
        >
          <a
            href="https://itakimo-hibarigaoka.stores.jp/reserve/hibarigaoka_ashitsubo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-main text-white font-bold py-[14px] px-[32px] rounded-[6px] hover:bg-mainhover transition duration-200 text-base tracking-[0.08em]"
          >
            予約枠を確保する
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center bg-transparent text-main border-2 border-main font-semibold py-[12px] px-[28px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-sm tracking-wide"
          >
            メニューを確認 ➔
          </a>
        </motion.div>
      </div>
    </header>
  );
}