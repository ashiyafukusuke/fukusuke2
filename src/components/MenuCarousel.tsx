"use client";
import { motion } from "framer-motion";
import ProcessCarousel from "./ProcessCarousel";

export default function MenuCarousel() {
  const menus = [
    {
      title: "40分枠",
      price: "4,500円",
      desc: "短時間で足をリセット",
      content: "足裏とふくらはぎを中心に、手早くほぐします。仕事前後や時間が取れない日に。サクッと済ませたい方向けのコースです。",
      color: "border-divider",
      bg: "bg-card",
      badges: [
        { text: "クイック", color: "bg-main text-white font-bold rounded-[4px]" }
      ]
    },
    {
      title: "60分枠",
      price: "6,500円",
      desc: "はじめての方におすすめ",
      content: "足裏から全身にかけて、じっくり圧をかけていきます。左足が終わる頃には、多くの方がうとうとし始めます。初回お試し制度の対象コースです。",
      color: "border-divider",
      bg: "bg-cardlight",
      badges: [
        { text: "イタキモの真骨頂", color: "bg-main text-white font-bold rounded-[4px]" },
        { text: "初回お試し対象", color: "bg-white text-main border border-main font-bold rounded-[4px]" }
      ],
      isPopular: true
    },
    {
      title: "90分枠",
      price: "9,000円",
      desc: "ゆっくり時間をかけたい方へ",
      content: "足裏から全身まで、60分よりもゆっくりとした時間の流れで進めます。急がず、その感覚をじっくり味わいたい方に。",
      color: "border-divider",
      bg: "bg-card",
      badges: [
        { text: "足つぼ沼へようこそ", color: "bg-main text-white font-bold rounded-[4px]" }
      ]
    }
  ];

  return (
    <section id="menu" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest mb-6">
            メニュー・料金
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
          <p className="text-[14px] text-[#5C5C5C] text-center mb-4 leading-relaxed">
            はじめての方には60分コースがおすすめです。<br />
            左足が終わる頃には、多くの方の意識が<br className="md:hidden" />ゆっくりと溶け始めます。
          </p>
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
                {item.badges && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.badges.map((b, i) => (
                      <span key={i} className={`inline-block text-[10px] md:text-xs px-2 py-1 ${b.color}`}>
                        {b.text}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-black font-serif text-ink mb-1">{item.title}</h3>
                <p className="text-xs font-bold text-gray-500 mb-3">{item.desc}</p>
                <div className="text-xl md:text-2xl font-black text-ink mb-4">{item.price}</div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6">
                  {item.content}
                </p>
              </div>
              <a 
                href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent"
                target="_blank"
                rel="noopener noreferrer"
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