"use client";
import { motion } from "framer-motion";

export default function FeaturesCarousel() {
  const features = [
    {
      title: "意識が溶けていく",
      content: "痛いのに、意識が遠くなる。これがイタキモの施術の核心です。左足が終わる頃には、ほとんどの方の意識がゆっくりと溶け始めます。",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    },
    {
      title: "独自のスタイル",
      content: "反射区（ツボ）にこだわりすぎないアプローチ。筋肉や神経といった身体の仕組みも捉え、あなたの足に本当に必要な刺激を届けます。\n「強ければ効く」は誤解です。必要な圧を、必要な場所に。",
      bg: "bg-card",
      borderColor: "border-divider"
    },
    {
      title: "台湾式×神経の働き",
      content: "伝統的な反射区の考え方を否定するつもりはありません。\nただ、私は「足裏を刺激すると身体全体がどう反応するか」を、\n今わかっている生理学や神経科学の知見を基に丁寧に施術しています。\n\n血流を促したり、深部の筋肉を緩めたり、\n自律神経のバランスを整えたり——\nそうした「実際に体感できる変化」を積み重ねることで、\n足元からふっと軽くなるリセットを目指しています。\n\n科学がこれからさらに進むかもしれないし、\n考え方が更新されるかもしれない。\nその可能性も大切にしながら、\n今できる最善の方法で向き合いたいと思っています。",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    }
  ];

  return (
    <section id="features" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest">
            施術の特徴
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
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
              <h3 className="text-base md:text-lg font-black font-serif mb-3 md:mb-4">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                {feature.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}