"use client";
import { motion } from "framer-motion";

export default function CombinedCarousel() {
  const cards = [
    // 特徴・体験
    {
      type: "feature",
      title: "刺激と癒やしの両立",
      content: "痛気持ちいい刺激と、意識がふっと溶ける感覚の両立。ただ痛いだけでも、優しいだけでもない「ちょうどいい」を目指しています。",
      color: "border-terracotta/30",
      bg: "bg-terracotta/10"
    },
    {
      type: "feature",
      title: "究極のリセット",
      content: "「ガチガチの疲れを、ふっとほどく」ことを重視。足裏から全身がじんわり温まり、気づけば頭の中のノイズまで消え去る体験を。",
      color: "border-olive/30",
      bg: "bg-olive/10"
    },
    // メニュー
    {
      type: "menu",
      title: "40分枠",
      price: "4,500円",
      desc: "サクッとリセット",
      content: "お仕事帰りや隙間時間に。足裏からふくらはぎまでテンポ良く揉みほぐし、短時間でもスッキリ軽くなる感覚を味わえます。",
      color: "border-olive",
      bg: "bg-olive/5",
      badge: "お試し・クイック",
      badgeColor: "bg-olive text-white"
    },
    {
      type: "menu",
      title: "60分枠",
      price: "6,500円",
      desc: "定番の全身アプローチ",
      content: "当店の一番人気。リフレクソロジー特有の反射区への刺激も交えながら、全身を深いリセットへと導く足揉みをご提供します。",
      color: "border-terracotta",
      bg: "bg-terracotta/5",
      badge: "王道・一番人気",
      badgeColor: "bg-terracotta text-white",
      isPopular: true
    },
    {
      type: "menu",
      title: "90分枠",
      price: "9,000円",
      desc: "極上のリセット",
      content: "慢性的な疲れが抜けきらない方に。時間をかけて細部まで徹底的にほぐし切る、至福のコースです。",
      color: "border-vitality",
      bg: "bg-vitality/5",
      badge: "足つぼ沼へようこそ",
      badgeColor: "bg-vitality text-ink"
    }
  ];

  return (
    <section id="menu" className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-terracotta p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            特徴・体験・メニュー
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-terracotta rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 text-xs md:text-sm tracking-widest font-bold">
            ← 横にスクロールできます →
          </p>
        </motion.div>
        
        {/* 統合横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {cards.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[65vw] sm:min-w-[45vw] md:min-w-[300px] flex-1 shrink-0 snap-center rounded-2xl p-5 border-2 ${item.color} ${item.bg} flex flex-col justify-between`}
            >
              {item.type === "feature" ? (
                <div>
                  <div className="text-sm font-bold text-terracotta mb-2">特徴・体験</div>
                  <h3 className="text-lg md:text-xl font-bold font-serif mb-4">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-full justify-between">
                  <div>
                    {item.badge && (
                      <span className={`inline-block text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 rounded-full mb-3 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    )}
                    <h3 className="text-lg md:text-xl font-bold font-serif mb-1">{item.title}</h3>
                    <p className="text-xs font-bold text-gray-500 mb-3">{item.desc}</p>
                    <div className="text-xl md:text-2xl font-black text-ink mb-4">{item.price}</div>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6">
                      {item.content}
                    </p>
                  </div>
                  <a 
                    href="#"
                    className={`block text-center w-full py-3 rounded-xl font-bold transition-all duration-300 text-xs md:text-sm ${
                      item.isPopular 
                      ? "bg-terracotta text-white shadow-lg hover:bg-[#C6674B]" 
                      : "bg-white text-ink border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    予約枠を確保する
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
