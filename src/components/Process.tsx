"use client";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { title: "1. 枠のご予約", desc: "LINEにて、ご希望の時間を確保いたします。" },
    { title: "2. ご来店・準備", desc: "お着替えを済ませ、まずは日常のノイズを遮断。スイッチを完全にオフにします。" },
    { title: "3. ほぐし・整え", desc: "足全体を優しく捉え、お身体の状態に合わせて深くまで響く圧で丁寧にほどき始めます。" },
    { title: "4. まどろみの「あわい」へ", desc: "途中から身体がふっと緩み、頭の中の余白が静かに広がっていく不思議な感覚へ…。" },
    { title: "5. 心身の再起動", desc: "見えない鎧を脱ぎ捨て、まっさらな身体へ。見違えるように軽やかな足取りでお帰りいただきます。" }
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
            <h4 className="text-xl font-serif font-bold text-terracotta mb-6">独自の「あわい」体験</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-terracotta mr-3 mt-1">・</span>
                <span>ただ痛いだけではない、脳が「安全」と認識する極限の心地よさ。</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3 mt-1">・</span>
                <span>痛みがストレスに変わる一歩手前で、ふっと身体が緩む特有の感覚。</span>
              </li>
              <li className="flex items-start">
                <span className="text-terracotta mr-3 mt-1">・</span>
                <span>眠っているのか起きているのかわからない、不思議なまどろみの時間。</span>
              </li>
            </ul>
            <p className="mt-8 text-gray-600 text-sm leading-loose">
              現代社会で知らず知らずのうちに着込んでしまった「見えない鎧」を剥がし、自覚すらなかった緊張をまるごと鎮める。奥底からイタ気持ち良くふっと抜ける、当店特有の深いリセット感をお届けします。
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
