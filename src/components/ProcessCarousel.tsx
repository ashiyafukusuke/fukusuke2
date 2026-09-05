"use client";
import { motion } from "framer-motion";

export default function ProcessCarousel() {
  const steps = [
    { 
      title: "コースを決めて予約", 
      desc: "メニューからコースを選び、予約ページで時間枠を確保します。" 
    },
    { 
      title: "ご来店・お着替え", 
      desc: "入室後、靴を脱ぎ、必要に応じてお着替えをします。（膝上までめくれるズボンがおすすめです）" 
    },
    { 
      title: "施術", 
      desc: "痛気持ちいい圧を、たっぷりどうぞ。強さはいつでも調整できます。遠慮なく言ってください。" 
    },
    { 
      title: "施術終了・お着替え", 
      desc: "足が軽くなった状態でお着替えいただきます。" 
    },
    { 
      title: "お会計・ご退室", 
      desc: "すべて「予約した時間枠の中」で完了します。遅刻した場合でも終了時間は変わりませんのでご安心を。" 
    }
  ];

  return (
    <section id="flow" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-main inline-block relative tracking-widest">
            ご利用の流れ
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
            ← 横にスクロールできます →
          </p>
        </div>

        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="min-w-[75vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-12px)] flex-1 shrink-0 snap-center rounded-3xl p-5 md:p-6 border-2 border-divider bg-cardlight flex flex-col justify-start relative overflow-hidden shadow-sm"
            >
              <div className="text-5xl font-black text-main/10 absolute -top-1 -right-1">
                {`0${idx + 1}`}
              </div>
              <h3 className="text-base md:text-lg font-sans font-black text-ink mb-3 relative z-10">
                <span className="text-main font-sans font-black mr-2">STEP {idx + 1}</span>
                <br />
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}