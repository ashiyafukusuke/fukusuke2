"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PhilosophyModal from "./PhilosophyModal";

export default function Profile() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6 md:px-12 bg-white bg-opacity-50 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-olive/10 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 overflow-hidden flex-shrink-0 border-4 border-white shadow-xl"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-serif">
              福助の写真
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-olive font-serif mb-2 tracking-widest text-sm">足揉み職人</p>
            <h2 className="font-serif text-3xl font-bold text-ink mb-6 flex items-baseline">
              福助 
              <span className="text-lg font-sans font-normal text-gray-400 ml-3 tracking-widest">Fukusuke</span>
            </h2>
            <p className="text-gray-700 leading-loose">
              「人を幸せにしたい」という、あまりにシンプルな願い。古くから愛される福助人形のように、訪れる人に安心と福を届けたい。確かな技術と、包み隠さない誠実さを、一揉みごとに込めています。<br/><br/>
              ガチガチに強張った日常の重圧を、確かな手の感覚で受け止め、見違えるように軽やかな足取りへと戻します。
            </p>

            {/* 哲学モーダルを開くボタン */}
            <motion.button
              onClick={() => setModalOpen(true)}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="mt-6 inline-flex items-center gap-2 text-sm text-terracotta hover:text-terracotta/70 font-serif tracking-wide transition-colors group"
              id="open-philosophy-modal"
            >
              <span className="border-b border-terracotta/40 group-hover:border-terracotta/70 transition-colors pb-0.5">
                店主の哲学を読む
              </span>
              <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">→</span>
            </motion.button>
          </motion.div>

        </div>
      </section>

      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
