"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white bg-opacity-70 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-offwhite/50 to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl font-bold text-ink mb-16 border-l-4 border-terracotta pl-6"
        >
          痛いのに眠くなる、3つのヒミツ
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* 1 */}
          <motion.div variants={item} className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-serif text-terracotta font-bold group-hover:translate-x-2 transition-transform duration-300">神経へのアプローチ</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 leading-loose text-lg">
                ただゴリゴリと力任せに押すわけではありません。足裏への刺激を通じて副交感神経を優位にし、身体を「おやすみモード」へと導きます。
              </p>
            </div>
          </motion.div>
          
          <div className="w-full h-px bg-gray-200"></div>
          
          {/* 2 */}
          <motion.div variants={item} className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-serif text-terracotta font-bold group-hover:translate-x-2 transition-transform duration-300">絶妙な「イタキモ」加減</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 leading-loose text-lg">
                奥深くまで響く圧なのに、体が力まない。痛みがストレスに変わる一歩手前、脳が「安全で気持ちいい」と感じるギリギリのラインを狙い続けます。
              </p>
            </div>
          </motion.div>
          
          <div className="w-full h-px bg-gray-200"></div>
          
          {/* 3 */}
          <motion.div variants={item} className="flex flex-col md:flex-row gap-8 items-start group">
            <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-serif text-terracotta font-bold group-hover:translate-x-2 transition-transform duration-300">うとうと夢見心地</h3>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 leading-loose text-lg">
                眠っているのか、起きているのかわからない不思議な感覚。「イタタ…」と「スヤァ…」の繰り返しの中で、頭の中の雑念が静かに消えていきます。
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
