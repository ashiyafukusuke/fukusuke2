"use client";
import { motion } from "framer-motion";

export default function Philosophy() {
  const cards = [
    {
      title: "守",
      subtitle: "伝統の習得",
      color: "text-olive",
      border: "border-gray-100",
      content: "リフレクソロジーを基礎とし、足裏に触れる技術と経験をひたすらに積み上げる。"
    },
    {
      title: "破",
      subtitle: "科学へのシフト",
      color: "text-olive",
      border: "border-gray-100",
      content: "経験とともにおぼろげな反射区の理論に矛盾を抱き、身体の仕組み（神経系・筋肉）という絶対的なファクトへ舵を切る。"
    },
    {
      title: "離",
      subtitle: "独自の『足揉み』へ",
      color: "text-terracotta",
      border: "border-b-4 border-b-terracotta border-gray-100",
      content: "反射区だけに頼らず、身体の仕組みを多角的に捉える。伝統と科学を融合し、心身を再起動させる独自のスタイルを確立しました。"
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
          矛盾から生まれた、独自の「足揉み」
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
