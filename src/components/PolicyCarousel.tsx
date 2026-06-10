"use client";
import { motion } from "framer-motion";

export default function PolicyCarousel() {
  const policiesGroup1 = [
    {
      situation: "前日までの予約変更",
      rule: "1回のご予約につき3回まで承ります",
      note: "同一予約での4回目以降の変更はお断りいたします",
      color: "border-divider",
      bg: "bg-cardlight",
      isRed: false,
    },
    {
      situation: "当日の予約変更",
      rule: "1回のご予約につき1回まで承ります",
      note: "2回目以降は当日キャンセル扱いとなります",
      color: "border-divider",
      bg: "bg-cardlight",
      isRed: false,
    },
  ];

  const policiesGroup2 = [
    {
      situation: "当日キャンセル（連絡あり）",
      rule: "キャンセル料は頂きません",
      note: "通算3回目以降は、以降のご予約をお断りいたします",
      color: "border-divider",
      bg: "bg-cardlight",
      isRed: false,
    },
    {
      situation: "当日無断キャンセル",
      rule: "即時、以降のご予約をお断りいたします",
      note: "",
      color: "border-main",
      bg: "bg-card",
      isRed: true,
    },
  ];

  return (
    <section id="cancel-policy" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-divider p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest">
            キャンセルポリシー
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-divider rounded-full"></div>
          </h2>
          <p className="text-[13px] text-[#5C5C5C] mb-[16px] text-center mt-10">
            予約の変更・キャンセルは、<br className="sm:hidden" />
            予約確認メールのリンクよりお手続きください。
          </p>
          <p className="text-gray-500 mt-2 text-xs md:text-sm leading-loose max-w-xl mx-auto">
            限られた枠を大切にしたいと思っています。<br/>
            お互いの時間を誠実に扱うためのお約束として、お読みください。
          </p>
          <p className="text-gray-400 mt-4 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
            ← 横にスクロールできます →
          </p>
        </div>
        
        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          
          {/* グループ1: 予約の変更について */}
          <div className="flex flex-col shrink-0">
            <h3 className="font-bold text-ink text-sm md:text-base mb-4 border-l-4 border-divider pl-3 ml-1">予約の変更について</h3>
            <div className="flex gap-4 h-full items-stretch">
              {policiesGroup1.map((item, idx) => (
                <motion.div
                  key={`g1-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`w-[75vw] sm:w-[40vw] md:w-[220px] lg:w-[260px] shrink-0 snap-center rounded-2xl p-5 md:p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-start`}
                >
                  <p className="text-[10px] md:text-xs text-gray-500 tracking-wider mb-2 font-bold">
                    {item.situation}
                  </p>
                  <h3 className={`text-base md:text-lg font-black mb-3 ${item.isRed ? "text-main" : "text-ink"}`}>{item.rule}</h3>
                  {item.note && (
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-auto">
                      ※{item.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* グループ2: キャンセルについて */}
          <div className="flex flex-col shrink-0 relative pl-0 md:pl-8 md:border-l border-gray-200">
            <h3 className="font-bold text-ink text-sm md:text-base mb-4 border-l-4 border-main pl-3 ml-1">キャンセルについて</h3>
            <div className="flex gap-4 h-full items-stretch">
              {policiesGroup2.map((item, idx) => (
                <motion.div
                  key={`g2-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
                  className={`w-[75vw] sm:w-[40vw] md:w-[220px] lg:w-[260px] shrink-0 snap-center rounded-2xl p-5 md:p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-start`}
                >
                  <p className="text-[10px] md:text-xs text-gray-500 tracking-wider mb-2 font-bold">
                    {item.situation}
                  </p>
                  <h3 className={`text-base md:text-lg font-black mb-3 ${item.isRed ? "text-main" : "text-ink"}`}>{item.rule}</h3>
                  {item.note && (
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-auto">
                      ※{item.note}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

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