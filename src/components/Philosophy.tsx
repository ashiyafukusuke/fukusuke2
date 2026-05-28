"use client";
import { motion } from "framer-motion";

export default function Philosophy() {
  const cards = [
    {
      title: "技",
      subtitle: "圧倒的な経験値",
      color: "text-olive",
      border: "border-gray-700",
      content: "数千人もの足を揉みほぐしてきた圧倒的な経験。足裏に触れるだけで、その方の疲れの芯を的確に見つけ出します。"
    },
    {
      title: "理",
      subtitle: "科学的な裏付け",
      color: "text-olive",
      border: "border-gray-700",
      content: "伝統的な反射区理論だけでなく、筋肉や神経といった身体の仕組み（ファクト）も融合。独自の足つぼスタイル理論で施術を行います。"
    },
    {
      title: "変",
      subtitle: "進化し続ける",
      color: "text-terracotta",
      border: "border-b-4 border-b-terracotta border-gray-700",
      content: "毎日人の足に触れ、上達し続ける技術。常にその日のベストを更新し続け、やみつきになる「イタキモ」体験を提供します。"
    }
  ];

  return (
    <section className="bg-ink rounded-3xl shadow-xl shadow-black/20 p-8 md:p-12 text-white">
      <div className="flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl font-bold text-white mb-16 border-l-4 border-terracotta pl-6 leading-tight"
        >
          ただの足つぼではない、独自のスタイル
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`bg-[#2a2a2a] p-8 rounded-xl shadow-lg border hover:border-gray-500 transition-colors duration-300 ${card.border}`}
            >
              <div className={`text-5xl font-serif mb-6 ${card.color}`}>{card.title}</div>
              <h3 className="text-xl font-bold text-white mb-4">{card.subtitle}</h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
