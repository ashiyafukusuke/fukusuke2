"use client";
import { motion } from "framer-motion";
import ProcessCarousel from "./ProcessCarousel";

export default function MenuCarousel() {
  const menus = [
    {
      title: "40分枠",
      price: "4,500円",
      desc: "サクッとリセット",
      content: "お仕事帰りや隙間時間に。足裏からふくらはぎまでをテンポ良く揉みほぐし、短時間でもスッキリ軽くなる感覚を味わえます。",
      color: "border-olive",
      bg: "bg-olive/5",
      badge: "お試し・クイック",
      badgeColor: "bg-olive text-white"
    },
    {
      title: "60分枠",
      price: "6,500円",
      desc: "定番の全身アプローチ",
      content: "当店の一番人気。台湾式足揉みの手技をベースに、神経生理学的な視点を重ねた独自のスタイルです。足裏に深く、丁寧に圧をかけていくことで、副交感神経が優位になり、全身の緊張がほどけていきます。左足が終わる頃には、多くの方の意識がふっと溶け始めます。",
      color: "border-terracotta",
      bg: "bg-terracotta/5",
      badge: "王道・一番人気",
      badgeColor: "bg-terracotta text-white",
      isPopular: true
    },
    {
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
    <section id="menu" className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-olive p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            メニュー・料金
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-olive rounded-full"></div>
          </h2>
        </div>

        {/* ご利用の流れカルーセルをここに組み込む */}
        <ProcessCarousel />

        <div className="text-left mb-4">
          <p className="text-gray-400 text-[10px] md:text-xs tracking-widest font-bold">
            メニュー（← 横にスクロールできます →）
          </p>
        </div>

        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {menus.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[70vw] sm:min-w-[45vw] md:min-w-[calc(25%-12px)] flex-1 shrink-0 snap-center rounded-2xl p-5 md:p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-between`}
            >
              <div>
                {item.badge && (
                  <span className={`inline-block text-[10px] md:text-xs font-bold px-2 py-1 rounded-full mb-3 ${item.badgeColor}`}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}