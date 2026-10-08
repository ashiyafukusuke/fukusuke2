"use client";
import { motion } from "framer-motion";

export default function KnowFeet() {
  return (
    <section id="know-feet" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-main inline-block relative tracking-widest">
            足を知る
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
          <p className="text-sm md:text-base font-bold text-ink mt-6 leading-relaxed">
            病院に行くほどではない。でも、なんとなく気になる足。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-8 text-sm md:text-base text-gray-700 leading-[2.2] md:leading-[2.4]"
        >
          {/* 問いかけ（1行ずつ独立させ、本文より少しだけ目立たせる。細い左線で控えめに） */}
          <div className="space-y-3.5 my-6">
            <p className="border-l-2 border-main pl-3.5 font-bold text-ink text-sm md:text-base leading-relaxed">
              自分の足が硬いか柔らかいか、気にしたことはありますか？
            </p>
            <p className="border-l-2 border-main pl-3.5 font-bold text-ink text-sm md:text-base leading-relaxed">
              利き足と軸足、どちらか知っていますか？
            </p>
            <p className="border-l-2 border-main pl-3.5 font-bold text-ink text-sm md:text-base leading-relaxed">
              立っているとき、前重心ですか？後ろ重心ですか？
            </p>
          </div>

          <div className="space-y-6">
            <p>
              毎日使っているのに、足のことは意外と知らないものです。<br />
              足に意識を向けることも、イタキモの足つぼの大切な目的のひとつです。
            </p>

            <p>
              足を触っていると、硬さや張り、左右の違いなど、その方の足の「今」が見えてきます。<br />
              体の不調まで言い当てることはできませんが、お困りのことや、普段の靴・歩き方・お仕事の姿勢を伺いながら、足から日々の過ごし方を一緒に考えることはできます。<br />
              気になることがあれば、施術中に気軽に話してみてください。こちらからも、気づいたことをお伝えします。
            </p>
          </div>

          <div className="pt-4 border-t border-divider">
            <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
              ※痛みやしびれが続く場合は、整形外科（足の外科）の受診をおすすめします。
            </p>
          </div>

          {/* 将来の拡張用スロット（カードやリンク追加用） */}
          <div id="know-feet-extensions" className="mt-6" />
        </motion.div>
      </div>
    </section>
  );
}