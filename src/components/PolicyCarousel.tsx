"use client";
import { motion } from "framer-motion";

export default function PolicyCarousel() {
  const policiesGroup2 = [
    {
      situation: "当日キャンセル（連絡あり）",
      rule: "キャンセル料は頂きません",
      note: "通算3回目以降は、以降のご予約をお断りいたします",
      color: "border-hairline",
      bg: "bg-paper-alt",
      isRed: false,
    },
    {
      situation: "当日無断キャンセル",
      rule: "即時、以降のご予約をお断りいたします",
      note: "",
      color: "border-brand",
      bg: "bg-surface",
      isRed: true,
    },
  ];

  return (
    <section id="cancel-policy" className="bg-surface rounded-3xl shadow-lg shadow-black/5 border-t-8 border-hairline p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest">
            キャンセルポリシー
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-hairline rounded-full"></div>
          </h2>
          <p className="text-[13px] text-ink-muted mb-[16px] text-center mt-10 leading-relaxed">
            キャンセルは、予約確認メールのリンクよりお手続きください。<br />
            予約の変更は、ご予約後に直接ご連絡ください。
          </p>
          <p className="text-ink-500 mt-2 text-xs md:text-sm leading-loose max-w-xl mx-auto">
            限られた枠を大切にしたいと思っています。<br/>
            お互いの時間を誠実に扱うためのお約束として、お読みください。
          </p>
        </div>
        
        {/* スマホ縦積み / PC グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* グループ1: 予約の変更について */}
          <div className="flex flex-col">
            <h3 className="font-bold text-ink text-sm md:text-base mb-4 border-l-4 border-hairline pl-3 ml-1">予約の変更について</h3>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-5 md:p-6 border-2 border-hairline bg-paper-alt flex flex-col justify-start"
            >
              <p className="text-xs md:text-sm text-ink-700 leading-relaxed">
                ご予約後に、メール・Instagram DM・お問い合わせフォームのいずれかから直接ご連絡ください。
              </p>
            </motion.div>
          </div>

          {/* グループ2: キャンセルについて */}
          <div className="flex flex-col relative pl-0 md:pl-8 md:border-l border-hairline">
            <h3 className="font-bold text-ink text-sm md:text-base mb-4 border-l-4 border-brand pl-3 ml-1">キャンセルについて</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              {policiesGroup2.map((item, idx) => (
                <motion.div
                  key={`g2-${idx}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (idx + 2) * 0.1 }}
                  className={`rounded-2xl p-5 md:p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-start`}
                >
                  <p className="text-[10px] md:text-xs text-ink-500 tracking-wider mb-2 font-bold">
                    {item.situation}
                  </p>
                  <h3 className={`text-base md:text-lg font-black mb-3 ${item.isRed ? "text-brand" : "text-ink"}`}>{item.rule}</h3>
                  {item.note && (
                    <p className="text-xs md:text-sm text-ink-600 leading-relaxed mt-auto">
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
          className="mt-4 p-5 md:p-6 rounded-xl border border-hairline"
        >
          <p className="text-[10px] md:text-xs text-ink-400 leading-loose">
            ※「以降のご予約をお断りいたします」とは、当店との施術のご縁を終了することを意味します。<br/>
            ルールを設けているのは、罰のためではありません。枠を押さえたまま来られない方がいると、その時間を本当に必要としている別の誰かが機会を失うからです。<br/>
            お互いが気持ちよく過ごすためのルールとして、ご協力いただけますと幸いです。
          </p>
        </motion.div>
      </div>
    </section>
  );
}