"use client";
import { motion } from "framer-motion";

export default function ProcessCarousel() {
  const steps = [
    { title: "コースを決めて予約", desc: "メニューからコースを選び、予約ページで時間枠を確保します。" },
    { title: "ご来店・お着替え", desc: "入室後、靴を脱ぎ、必要に応じてお着替えをします。（膝上までめくれるズボンがおすすめです）" },
    { title: "施術", desc: "痛気持ちいい刺激から始まり、身体も意識もふっと軽くなり溶けていくような時間をお楽しみください。" },
    { title: "施術終了・お着替え", desc: "全身がスッキリと軽くなった状態でお着替えをしていただきます。" },
    { title: "お会計・ご退室", desc: "すべて「予約した時間枠の中」で完了します。遅刻した場合でも終了時間は遅れませんのでご安心を。" }
  ];

  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-vitality p-6 md:p-12 relative overflow-hidden">
      <div className="flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            ご利用の流れ
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-vitality rounded-full"></div>
          </h2>
        </motion.div>
        
        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[70vw] md:min-w-[280px] flex-1 shrink-0 snap-center rounded-2xl p-6 border-2 border-vitality/20 bg-vitality/5 flex flex-col justify-start relative overflow-hidden`}
            >
              <div className="text-6xl font-black text-vitality/10 absolute -top-2 -right-2">{`0${idx + 1}`}</div>
              <h3 className="text-lg font-bold text-ink mb-3 relative z-10"><span className="text-vitality mr-2">STEP {idx + 1}.</span><br className="md:hidden" />{item.title}</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
