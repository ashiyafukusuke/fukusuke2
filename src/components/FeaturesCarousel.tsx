"use client";
import { motion } from "framer-motion";

export default function FeaturesCarousel() {
  const features = [
    {
      title: "刺激と癒やしの両立",
      content: "痛気持ちいい刺激と、意識がふっと溶ける感覚の両立。ただ痛いだけでも、優しいだけでもない「ちょうどいい」を目指しています。",
      color: "bg-terracotta/10",
      borderColor: "border-terracotta/30"
    },
    {
      title: "独自のスタイル",
      content: "反射区（ツボ）にこだわりすぎないアプローチ。筋肉や神経といった身体の仕組みも捉え、あなたの足に本当に必要な刺激を届けます。",
      color: "bg-vitality/10",
      borderColor: "border-vitality/30"
    },
    {
      title: "究極のリセット",
      content: "「ガチガチの疲れを、ふっとほどく」ことを重視。足裏から全身がじんわり温まり、気づけば頭の中のノイズまで消え去る体験を。",
      color: "bg-olive/10",
      borderColor: "border-olive/30"
    }
  ];

  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-terracotta p-6 md:p-12 relative overflow-hidden">
      <div className="flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-3xl font-bold text-ink mb-8 md:mb-12 border-l-4 border-terracotta pl-4"
        >
          イタキモ施術の特徴
        </motion.h2>

        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[85vw] md:min-w-[300px] flex-1 shrink-0 snap-center rounded-2xl p-6 border-2 ${feature.borderColor} ${feature.color} flex flex-col justify-start`}
            >
              <div className="text-4xl font-black text-ink/20 mb-4">{`0${idx + 1}`}</div>
              <h3 className="text-xl font-bold text-ink mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
