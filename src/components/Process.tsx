"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "1. 枠のご予約", desc: "LINEでご希望の枠を確保します。" },
    { title: "2. ご来店・準備", desc: "お時間に合わせてご案内。お着替えを済ませ、まずは日常のスイッチをオフに。" },
    { title: "3. ほぐし・整え", desc: "足全体を優しく捉え、強さを丁寧に調整しながらほぐし始めます。" },
    { title: "4. まどろみ", desc: "途中から身体がふっと緩み、頭が空っぽになる感覚へ…。" },
    { title: "5. ニュートラルへ", desc: "枠内でスッキリと終了。見違えるように軽くなった足取りで。" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
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
          入室から退室まで、日常の重さを優しく解放するゆったりとしたお時間です。
        </motion.p>
        
        <div className="bg-paper p-8 md:p-12 rounded-2xl shadow-lg shadow-gray-100/50 border border-gray-50 flex flex-col md:flex-row gap-12 relative overflow-hidden">
          
          <div className="md:w-1/2 relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-10 py-2 z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-8 timeline-dot group"
              >
                <h4 className="text-lg font-bold text-ink mb-2 group-hover:text-terracotta transition-colors duration-300">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 flex flex-col justify-center bg-offwhite/80 p-8 rounded-xl z-10"
          >
            <h4 className="text-xl font-serif font-bold text-terracotta mb-6">施術のポイント</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-terracotta mr-3 mt-1">・</span>
                <span>強さはあなたに合わせて調整します。</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3 mt-1">・</span>
                <span>途中から体がふっと緩み、頭が空っぽになる感覚…。</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3 mt-1">・</span>
                <span>不思議だけど心地いいですよね。</span>
              </li>
            </ul>
            <p className="mt-8 text-gray-600 text-sm leading-loose">
              現代社会で知らず知らずのうちに着込んでしまった「見えない鎧」を剥がし、本来の身軽さを取り戻す。奥底からイタ気持ち良くふっと抜ける特有のリセット感をお届けします。
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
