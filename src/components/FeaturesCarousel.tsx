"use client";
import { motion } from "framer-motion";

export default function FeaturesCarousel() {
  const features = [
    {
      title: "反射区を狙わない",
      content: "反射区をピンポイントで狙ってグリグリ押すのではなく、気持ち良さを目印に、ゆっくり深く、広く流していきます。それでも「ピンポイントで押されているみたい」と言われることがよくあります。",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    },
    {
      title: "体重移動とリズムで揉む",
      content: "腕の力ではなく、体重移動とリズムで揉みます。だから、ゆっくり深い圧が最後まで同じ質で続きます。途中で圧が軽くなった経験のある方ほど、違いが分かると思います。",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    },
    {
      title: "台湾式がベース",
      content: "台湾式の手技を土台に、身体の構造と神経の働きの知見を重ねています。強いだけの圧ではなく、奥まで届く圧を目指しています。",
      bg: "bg-cardlight",
      borderColor: "border-divider"
    }
  ];

  return (
    <section id="features" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-main inline-block relative tracking-widest">
            奥までしみわたる理由
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
        </div>

        {/* グリッド/縦積みコンテナ */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 items-stretch">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`w-full rounded-3xl p-5 md:p-6 border-2 ${feature.borderColor} ${feature.bg} flex flex-col justify-start shadow-sm`}
            >
              <h3 className="text-base md:text-lg text-main font-sans font-black mb-3 md:mb-4">{feature.title}</h3>
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