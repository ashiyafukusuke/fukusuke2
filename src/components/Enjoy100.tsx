"use client";
import { motion } from "framer-motion";

export default function Enjoy100() {
  const points = [
    {
      title: "お着替えについて",
      icon: "👖",
      content: "入室後、専用スペースでのお着替えが可能です。膝上までめくれる柔らかいズボンがおすすめですが、無料の貸し出し用お着替えもご用意しておりますので、手ぶらでもお気軽にお越しください。"
    },
    {
      title: "遅刻について",
      icon: "⏰",
      content: "当サロンは「枠単位制」となっており、遅刻された場合でも終了時間は変わりません。後ろのお客様にご迷惑がかからない仕組みですので、万が一遅れそうな場合でも焦らず安全第一でお越しください。"
    },
    {
      title: "初めての方へ",
      icon: "🔰",
      content: "「足つぼって痛いのかな…」と緊張される方も多いですが、強さは必ず伺いながら調整します。合わなければ初回無料でお帰りいただける制度もありますので、気負わずリラックスしていらしてください。"
    }
  ];

  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-[#F5A623] p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink inline-block relative">
            イタキモを100％楽しむために
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#F5A623] rounded-full"></div>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-offwhite rounded-2xl border border-gray-100 flex flex-col sm:flex-row gap-4 items-start"
            >
              <div className="text-4xl">{point.icon}</div>
              <div>
                <h3 className="font-bold text-lg text-ink mb-2">{point.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
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
