"use client";
import { motion } from "framer-motion";

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
      content: "当店の一番人気。リフレクソロジー特有の反射区への刺激も交えながら、全身を深いリセットへと導きます。足揉みの醍醐味をしっかり味わえる、迷ったらまずはこれ。",
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
      content: "慢性的な疲れが抜けきらない方に。足先から膝上まで、時間をかけて細部まで徹底的にほぐし切る至福のコースです。",
      color: "border-vitality",
      bg: "bg-vitality/5",
      badge: "足つぼ沼へようこそ",
      badgeColor: "bg-vitality text-ink"
    }
  ];

  const steps = [
    { title: "コースを決めて予約", desc: "下のメニューからコースを選び、予約ページで時間枠を確保します。" },
    { title: "ご来店・お着替え", desc: "入室後、靴を脱ぎ、必要に応じてお着替えをします。（膝上までめくれるズボンがおすすめです）" },
    { title: "施術", desc: "痛気持ちいい刺激から始まり、身体も意識もふっと軽くなり溶けていくような時間をお楽しみください。" },
    { title: "施術終了・お着替え", desc: "全身がスッキリと軽くなった状態でお着替えをしていただきます。" },
    { title: "お会計・ご退室", desc: "すべて「予約した時間枠の中」で完了します。遅刻した場合でも終了時間は遅れませんのでご安心を。" }
  ];

  return (
    <section id="menu" className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-olive p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            メニュー
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-olive rounded-full"></div>
          </h2>
        </motion.div>
        
        {/* 施術の流れ 横スクロールコンテナ（メニューの上に配置） */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 mb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
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

        {/* メニュー 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {menus.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[85vw] md:min-w-[320px] flex-1 shrink-0 snap-center rounded-2xl p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-between`}
            >
              <div>
                {item.badge && (
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
                <h3 className="text-xl md:text-2xl font-bold font-serif mb-2">{item.title}</h3>
                <p className="text-sm font-bold text-gray-500 mb-4">{item.desc}</p>
                <div className="text-2xl font-black text-ink mb-6">{item.price}</div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-8">
                  {item.content}
                </p>
              </div>
              <a 
                href="#"
                className={`block text-center w-full py-3 rounded-full font-bold transition-all duration-300 ${
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
