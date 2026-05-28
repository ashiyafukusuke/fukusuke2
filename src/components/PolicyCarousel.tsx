"use client";
import { motion } from "framer-motion";

export default function PolicyCarousel() {
  const policies = [
    {
      situation: "前日までの予約変更",
      rule: "3回まで承ります",
      note: "4回目以降は、以降のご予約をお断りいたします",
      color: "border-gray-200",
      bg: "bg-gray-50",
    },
    {
      situation: "当日の予約変更",
      rule: "1回まで承ります",
      note: "2回目以降は「当日連絡ありキャンセル」として扱います（ただし事情による）",
      color: "border-gray-200",
      bg: "bg-gray-50",
    },
    {
      situation: "当日キャンセル（連絡あり）",
      rule: "キャンセル料は頂きません",
      note: "ただし3回目以降は、以降のご予約をお断りいたします",
      color: "border-gray-200",
      bg: "bg-gray-50",
    },
    {
      situation: "当日無断キャンセル",
      rule: "即時、以降のご予約をお断りいたします",
      note: "",
      color: "border-terracotta",
      bg: "bg-terracotta/5",
    },
  ];

  return (
    <section id="cancel-policy" className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-gray-300 p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            キャンセルポリシー
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 rounded-full"></div>
          </h2>
          <p className="text-gray-500 mt-6 text-xs md:text-sm leading-loose max-w-xl mx-auto">
            限られた枠を大切にしたいと思っています。<br/>
            お互いの時間を誠実に扱うためのお約束として、お読みください。
          </p>
          <p className="text-gray-400 mt-4 text-[10px] md:text-xs tracking-widest font-bold">
            ← 横にスクロールできます →
          </p>
        </div>
        
        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {policies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[70vw] sm:min-w-[45vw] md:min-w-[calc(25%-12px)] flex-1 shrink-0 snap-center rounded-2xl p-5 md:p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-start`}
            >
              <p className="text-[10px] md:text-xs text-gray-500 tracking-wider mb-2 font-bold">
                {item.situation}
              </p>
              <h3 className={`text-base md:text-lg font-bold mb-3 ${idx === 3 ? "text-terracotta" : "text-ink"}`}>{item.rule}</h3>
              {item.note && (
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-auto">
                  ※{item.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* 補足 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4 p-5 md:p-6 bg-offwhite rounded-xl border border-gray-100"
        >
          <p className="text-[10px] md:text-xs text-gray-400 leading-loose">
            ※「以降のご予約をお断りいたします」とは、当店との施術のご縁を終了することを意味します。<br/>
            ルールを設けているのは、罰のためではありません。枠を押さえたまま来られない方がいると、その時間を本当に必要としている別の誰かが機会を失うからです。<br/>
            お互いが気持ちよく過ごすためのルールとして、ご協力いただけますと幸いです。
          </p>
        </motion.div>
      </div>
    </section>
  );
}