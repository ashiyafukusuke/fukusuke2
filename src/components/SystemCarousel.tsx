"use client";
import { motion } from "framer-motion";

export default function SystemCarousel() {
  const systems = [
    {
      title: "初回お試し制度",
      desc: "初回来店時限定",
      headline: "合わないと感じたなら、お代は頂戴しません。",
      content: "まずは左足から施術を開始します。片足が終わった段階で継続を確認し、合わなければ「今日はここまで」とお伝えください。その時点で直ちに終了し、お代は頂戴いたしません。",
      color: "border-divider",
      bg: "bg-card",
      badgeColor: "bg-main",
    },
    {
      title: "継続ご利用特典",
      desc: "60分枠限定",
      headline: "2回目以降はずっとお得に。",
      content: "2回目〜5回目は5,500円（1,000円OFF）、6回目以降は5,000円（さらに500円OFF）でご利用いただけます。※現在は60分枠のみが対象となります。",
      color: "border-divider",
      bg: "bg-cardlight",
      badgeColor: "bg-sub",
    }
  ];

  return (
    <section className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest">
            安心と継続の仕組み
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
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[80vw] sm:min-w-[50vw] md:min-w-[calc(50%-12px)] flex-1 shrink-0 snap-center rounded-2xl p-5 md:p-8 border-2 ${item.color} ${item.bg} flex flex-col justify-start`}
            >
              <div className="mb-4 flex items-center flex-wrap gap-2">
                <h3 className="text-lg md:text-2xl font-black font-serif text-ink">{item.title}</h3>
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