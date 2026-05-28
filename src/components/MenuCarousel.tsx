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
      color: "border-divider",
      bg: "bg-card",
      badge: "お試し・クイック",
      badgeColor: "bg-main text-white font-bold rounded-[4px]"
    },
    {
      title: "60分枠",
      price: "6,500円",
      desc: "定番の全身アプローチ",
      content: "当店の一番人気。台湾式の手技をベースに、神経と血流への働きかけを意識した施術で全身を深いリセットへ導きます。左足が終わる頃には、多くの方の意識がゆっくりと溶け始めます。",
      color: "border-divider",
      bg: "bg-cardlight",
      badge: "王道・一番人気",
      badgeColor: "bg-main text-white font-bold rounded-[4px]",
      isPopular: true
    },
    {
      title: "90分枠",
      price: "9,000円",
      desc: "極上のリセット",
      content: "慢性的な疲れが抜けきらない方に。時間をかけて細部まで徹底的にほぐし切る、至福のコースです。",
      color: "border-divider",
      bg: "bg-card",
      badge: "足つぼ沼へようこそ",
      badgeColor: "bg-main text-white font-bold rounded-[4px]"
    }
  ];

  return (
    <section id="menu" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest">
            メニュー・料金
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
        </div>

        {/* ご利用の流れカルーセルをここに組み込む */}
        <ProcessCarousel />

        <div className="text-left mb-4">
          <p className="text-gray-400 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
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
                className={`block text-center w-full py-[14px] rounded-[6px] font-bold transition-all duration-200 text-sm tracking-[0.08em] ${
                  item.isPopular 
                  ? "bg-main text-white shadow-lg hover:bg-mainhover" 
                  : "bg-transparent text-main border-2 border-main hover:bg-main hover:text-white"
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