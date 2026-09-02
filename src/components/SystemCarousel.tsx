"use client";
import { motion } from "framer-motion";

export default function SystemCarousel() {
  const systems = [
    {
      title: "初回お試し制度",
      desc: "60分枠限定",
      headline: "合わないと感じたなら、お代は頂戴しません。",
      content: "まず左足から始めます。片足が終わった時点で「合わない」と感じたら、そこで終了。お代は頂きません。足つぼが初めての方こそ、気負わず使ってください。",
      color: "border-divider",
      bg: "bg-cardlight",
      badgeColor: "bg-main",
    },
    {
      title: "枠単位制",
      desc: "延長なし",
      headline: "すべて予約した枠の中で完了します。",
      content: "施術・お着替え・お会計まで、すべて予約した枠の中で完了します。延長のおすすめはしません。終わる時間が読めるので、仕事前や予定の合間でも安心です。",
      color: "border-divider",
      bg: "bg-card",
      badgeColor: "bg-sub",
    },
    {
      title: "完全予約制の一人店",
      desc: "貸切空間",
      headline: "あなたの足だけに全力を注ぎます。",
      content: "施術者は店主一人。あなたの枠の間、この部屋は貸切です。他のお客様と顔を合わせることはありません。小さな部屋で、あなたの足だけに全力を注ぎます。",
      color: "border-divider",
      bg: "bg-cardlight",
      badgeColor: "bg-main",
    }
  ];

  return (
    <section id="trial" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-2xl md:text-3xl text-main inline-block relative tracking-widest">
            安心して試せる仕組み
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sub rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
            ← 横にスクロールできます →
          </p>
        </div>
        
        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {systems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`min-w-[80vw] sm:min-w-[45vw] md:min-w-[calc(33.33%-12px)] flex-1 shrink-0 snap-center rounded-3xl p-5 md:p-8 border-2 ${item.color} ${item.bg} flex flex-col justify-start shadow-sm`}
            >
              <div className="mb-4 flex items-center flex-wrap gap-2">
                <h3 className="text-lg md:text-xl font-heading text-main">{item.title}</h3>
                <span className={`text-[10px] md:text-xs font-bold text-white px-2.5 py-1 rounded-[4px] ${item.badgeColor}`}>{item.desc}</span>
              </div>
              <p className="text-base md:text-lg font-bold text-ink mb-4">{item.headline}</p>
              <p className="text-xs md:text-base text-gray-700 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}