"use client";
import { motion } from "framer-motion";

export default function Enjoy100() {
  const points = [
    {
      title: "お着替えについて",
      icon: "👖",
      content: `施術では足元にクリームを使用します。
膝上まで出していただく必要があるため、
めくりやすいズボンでお越しいただくか、
貸し出し用のひざ掛けをお使いください。
クリームが洋服につくことを気にされない方は
そのままでも構いません。`
    },
    {
      title: "遅刻について",
      icon: "⏰",
      content: "当サロンは「枠単位制」となっており、遅刻された場合でも終了時間は変わりません。後ろのお客様にご迷惑がかからない仕組みですので、万が一遅れそうな場合でも焦らず安全第一でお越しください。"
    },
    {
      title: "強さについて",
      icon: "💪",
      content: `強く押すことはできますし、
必要に応じてしっかりした圧もかけます。
ただ「痛くても無視してもっと強く」には
お応えしていません。
足に力が入った状態では逆効果だからです。
「もう少し強く」はいつでもどうぞ。`
    },
    {
      title: "初めての方へ",
      icon: "🔰",
      content: "「足つぼって痛いのかな…」と緊張される方も多いですが、強さは必ず伺いながら調整します。合わなければ初回無料でお帰りいただける制度もありますので、気負わずリラックスしていらしてください。"
    }
  ];

  return (
    <section id="tips" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest mb-6">
            イタキモを100％楽しむために
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sub rounded-full"></div>
          </h2>
          <p className="text-[14px] text-[#5C5C5C] text-center mb-6 leading-relaxed">
            初めての方もご安心ください。<br />
            来店前に知っておくと、より体験が深まります。
          </p>
          <p className="text-gray-400 mt-6 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
            ← 横にスクロールできます →
          </p>
        </div>
        
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[70vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-11px)] flex-1 shrink-0 snap-center p-6 bg-cardlight rounded-2xl border-2 border-divider flex flex-col sm:flex-row gap-4 items-start"
            >
              <div className="text-5xl">{point.icon}</div>
              <div>
                <h3 className="font-black text-lg text-ink mb-2">{point.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed font-medium whitespace-pre-wrap">
                  {point.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
