"use client";
import { motion } from "framer-motion";

export default function FeaturesCarousel() {
  const features = [
    {
      title: "圧が落ちない体の使い方",
      content: "腕の力ではなく、体重移動とリズムで揉みます。この揉み方だと、何人揉んでも疲れません。だから、最後の10分も最初の10分と同じ圧です。途中で圧が軽くなった経験のある方ほど、違いが分かると思います。",
      bg: "bg-cardlight",
      borderColor: "border-sub"
    },
    {
      title: "反射区にこだわらない",
      content: "反射区の位置だけを追うのではなく、筋肉や神経の状態を見ながら、その足に必要な圧を届けます。「なぜ気持ちいいのか」を現場から考え続けています。",
      bg: "bg-cardlight",
      borderColor: "border-sub"
    },
    {
      title: "台湾式がベース",
      content: "台湾式の手技を土台に、身体の構造と神経の働きの知見を重ねています。強いだけの圧ではなく、奥まで届く圧を目指しています。",
      bg: "bg-cardlight",
      borderColor: "border-sub"
    }
  ];

  return (
    <section id="features" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading text-2xl md:text-3xl text-main inline-block relative tracking-widest">
            なぜ、続くのか。
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-sub rounded-full"></div>
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
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`min-w-[75vw] sm:min-w-[45vw] md:min-w-[calc(33.333%-12px)] flex-1 shrink-0 snap-center rounded-3xl p-5 md:p-6 border-2 ${feature.borderColor} ${feature.bg} flex flex-col justify-start shadow-sm`}
            >
              <h3 className="text-base md:text-lg text-main font-heading mb-3 md:mb-4">{feature.title}</h3>
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