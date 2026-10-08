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
          className="max-w-3xl mx-auto space-y-6 text-xs md:text-sm text-gray-700 leading-loose"
        >
          <p>
            よく勘違いされますが、足を触っただけで体の不調がわかる、ということはありません。<br />
            分かるのは、足の硬さや張り、左右の違いといった「足そのものの状態」です。<br />
            そこに、お困りのことや普段の靴・歩き方・お仕事の姿勢などを重ねて、足から日々の過ごし方を一緒に考えることはできます。
          </p>

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