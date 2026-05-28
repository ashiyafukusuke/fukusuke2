"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "1. ご予約", desc: "予約ページからオンラインで時間枠を確保します。" },
    { title: "2. ご来店・お着替え", desc: "入室後、靴を脱ぎ、必要に応じてお着替えをします。" },
    { title: "3. 施術", desc: "ホットタオルで足を拭き、まどろみのイタキモ体験へ。" },
    { title: "4. お目覚め・お着替え", desc: "スッキリ目覚めたらお着替えを。" },
    { title: "5. お会計・ご退室", desc: "すべて「予約した時間枠の中」で完了します。" }
  ];

  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-vitality p-8 md:p-12 relative overflow-hidden">
      <div className="flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6 border-l-4 border-terracotta pl-6"
        >
          施術の流れ
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-12 text-lg"
        >
          入室から退室まで、日常の重圧を優しく解放するゆったりとしたお時間です。
        </motion.p>
        
        <div className="bg-paper p-8 md:p-12 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-50 flex flex-col md:flex-row gap-12 relative overflow-hidden">
          
          <div className="md:w-1/2 relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-10 py-2 z-10">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`relative pl-8 timeline-dot group ${isLast ? 'mt-12' : ''}`}
                >
                  {isLast && (
                    <div className="absolute -left-8 top-1 w-6 h-6 bg-vitality/20 rounded-full blur-md animate-pulse"></div>
                  )}
                  <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isLast ? 'text-vitality group-hover:text-orange-500' : 'text-ink group-hover:text-terracotta'}`}>
                    {step.title}
                  </h4>
                  <p className={`text-sm leading-relaxed ${isLast ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 flex flex-col justify-center bg-offwhite/80 p-8 rounded-xl z-10"
          >
            <h4 className="text-xl font-serif font-bold text-terracotta mb-6">イタキモを100%楽しむために</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-bold text-ink border-b-2 border-olive inline-block mb-2">⏱️ お着替えタイムの短縮</h5>
                <p className="text-sm text-gray-700 leading-loose">
                  施術時間を最大限に確保するため、**「膝上までめくれるズボン」**でのご来店がおすすめです。
                </p>
              </div>

              <div>
                <h5 className="font-bold text-ink border-b-2 border-terracotta inline-block mb-2">🏃 遅刻してしまったら</h5>
                <p className="text-sm text-gray-700 leading-loose">
                  当店のコースは「枠内完了」システムです。終了時間は遅れませんので、後の方にご迷惑はかかりません。焦らずご来店ください。
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
