"use client";
import { motion } from "framer-motion";

export default function Menu() {
  const menus = [
    {
      title: "【 ザ・イタキモ 60分 】",
      time: "標準",
      badge: "看板メニュー",
      badgeColor: "bg-terracotta",
      border: "border-terracotta",
      desc: "当店の看板メニュー。絶妙な痛気持ちよさで、気づけばうとうと夢見心地に。ガチガチの疲れを底から引き剥がし、本来の身軽さへと導きます。",
      price: "6,500",
      note: "※継続特典 対象コース",
      highlight: false,
      firstTimeBadge: false,
    },
    {
      title: "【 どっぷりイタキモ 90分 】",
      time: "ロング",
      badge: "2回目以降ご利用の方対象",
      badgeColor: "bg-gray-500",
      border: "border-gray-500",
      desc: "『品定め』を終え、イタキモの虜になってしまった方のためのコース。日々の疲れを徹底的に解きほぐし、ズブズブと底なし沼のような深いリラックスへ沈んでください。",
      price: "9,500",
      note: null,
      highlight: false,
      firstTimeBadge: false,
    },
    {
      title: "【 ぷちイタキモ 40分 】",
      time: "お試し",
      badge: "※品定め制度対象",
      badgeColor: "bg-olive",
      border: "border-olive",
      desc: "いわゆる「お試しコース」です。まずは当店の手技があなたのお身体に合うかどうか、どうぞお気軽にお試しください。",
      price: "4,500",
      note: null,
      highlight: true,
      firstTimeBadge: true,
    }
  ];

  return (
    <section id="menu" className="py-24 px-6 md:px-12 bg-ink text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold mb-16 border-l-4 border-olive pl-6"
        >
          お品書き
        </motion.h2>
        
        <div className="space-y-8">
          {menus.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`relative p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 ${item.border} overflow-hidden group transition-colors duration-300 shadow-xl
                ${item.highlight
                  ? "bg-[#3a3020] hover:bg-[#433824] ring-1 ring-olive/40"
                  : "bg-[#363636] hover:bg-[#3D3D3D]"
                }`}
            >
              {/* 初回おすすめリボン */}
              {item.firstTimeBadge && (
                <div className="absolute top-0 right-0 bg-olive text-white text-xs font-bold px-4 py-1 rounded-bl-xl tracking-widest">
                  はじめての方へ
                </div>
              )}

              <div className="flex-1 z-10">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <h3 className="text-2xl font-serif font-bold text-white tracking-wide">{item.title}</h3>
                  <span className="text-lg font-sans text-gray-300">{item.time}</span>
                  <span className={`${item.badgeColor} text-xs text-white px-2 py-1 rounded shadow-sm`}>{item.badge}</span>
                </div>
                <p className={`leading-relaxed text-sm md:text-base ${item.highlight ? "text-gray-200" : "text-gray-300"}`}>
                  {item.desc}
                </p>

                {/* ハイライトカード専用：品定め制度の補足 */}
                {item.highlight && (
                  <p className="mt-4 text-olive text-xs font-bold tracking-wide">
                    ▶ 合わなければ、お代は頂きません。（品定め制度）
                  </p>
                )}
              </div>

              <div className="text-left md:text-right flex-shrink-0 z-10 w-full md:w-auto mt-4 md:mt-0 border-t md:border-t-0 border-gray-600 pt-4 md:pt-0">
                <p className="text-3xl font-bold text-paper md:text-right tracking-tight">{item.price}<span className="text-base font-normal ml-1">円</span></p>
                {item.note && (
                  <p className="text-xs text-terracotta mt-2 md:mt-1 font-bold">{item.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
