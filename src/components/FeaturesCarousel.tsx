"use client";
import { motion } from "framer-motion";

export default function FeaturesCarousel() {
  const features = [
    {
      title: "意識が溶けていく",
      content: "痛いのに、意識が遠くなる。これがイタキモの施術の核心です。左足が終わる頃には、ほとんどの方の意識がゆっくりと溶け始めます。",
      bg: "bg-terracotta/5",
      borderColor: "border-terracotta/30"
    },
    {
      title: "独自のスタイル",
      content: "反射区（ツボ）にこだわりすぎないアプローチ。筋肉や神経といった身体の仕組みも捉え、あなたの足に本当に必要な刺激を届けます。",
      bg: "bg-vitality/5",
      borderColor: "border-vitality/30"
    },
    {
      title: "台湾式×神経生理学",
      content: "台湾式の手技をベースに、解剖生理学・自律神経の知見を重ねた独自スタイル。「なぜ効くのか」を現場から自分で考え続けた施術者が届ける、根拠のある足つぼです。",
      bg: "bg-olive/5",
      borderColor: "border-olive/30"
    }
  ];

  return (
    <section id="features" className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-terracotta p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            施術の特徴
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-terracotta rounded-full"></div>
          </h2>
          <p className="text-gray-400 mt-6 text-[10px] md:text-xs tracking-widest font-bold md:hidden">
            ← 横にスクロールできます →
          </p>
        </div>

        {/* 横スクロールコンテナ */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide items-stretch">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`min-w-[70vw] sm:min-w-[45vw] md:min-w-[calc(25%-12px)] flex-1 shrink-0 snap-center rounded-2xl p-5 md:p-6 border-2 ${feature.borderColor} ${feature.bg} flex flex-col justify-start`}
            >
              <h3 className="text-base md:text-lg font-bold font-serif mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}