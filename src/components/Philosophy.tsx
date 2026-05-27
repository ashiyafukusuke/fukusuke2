"use client";
import { motion } from "framer-motion";

export default function Philosophy() {
  const cards = [
    {
      title: "技",
      subtitle: "圧倒的な経験値",
      color: "text-olive",
      border: "border-gray-100",
      content: "何千人もの足を揉みほぐしてきた経験から、足裏に触れただけで、その方の疲れの芯を見つけ出します。"
    },
    {
      title: "理",
      subtitle: "科学的な裏付け",
      color: "text-olive",
      border: "border-gray-100",
      content: "反射区の言い伝えだけに頼るのではなく、筋肉や神経といった身体の仕組み（ファクト）に基づいた施術を行います。"
    },
    {
      title: "変",
      subtitle: "進化し続ける",
      color: "text-terracotta",
      border: "border-b-4 border-b-terracotta border-gray-100",
      content: "ただの足つぼでは終わらない。常にその日のベストを更新し続けることで、やみつきになる「イタキモ」体験を提供します。"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-offwhite">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl font-bold text-ink mb-16 border-l-4 border-terracotta pl-6 leading-tight"
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
              className={`bg-paper p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300 ${card.border}`}
            >
              <div className={`text-5xl font-serif mb-6 ${card.color}`}>{card.title}</div>
              <h3 className="text-xl font-bold text-ink mb-4">{card.subtitle}</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
