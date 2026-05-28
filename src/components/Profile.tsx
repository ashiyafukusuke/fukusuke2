"use client";
import { motion } from "framer-motion";

interface ProfileProps {
  onOpenPhilosophy: () => void;
}

export default function Profile({ onOpenPhilosophy }: ProfileProps) {
  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-olive p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-olive/10 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 overflow-hidden flex-shrink-0 border-4 border-white shadow-xl"
        >
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-serif">
            福助の写真
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-olive font-serif mb-2 tracking-widest text-sm font-bold">イタキモの伝道師</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-ink mb-6">
            福助
            <span className="text-lg font-sans font-normal text-gray-400 ml-3 tracking-widest">Fukusuke</span>
          </h2>
          <div className="text-gray-700 leading-loose space-y-4 text-sm md:text-base">
            <p>
              全くの異業種から、足揉みを受けた経験すらなくこの世界へ入りました。現場で「なぜ効くのか」を考え続け、痛みを感じるのは神経では？といった疑問から自律神経や体の仕組みを独学で学び直しました。
            </p>
            <p>
              反射区という感性の地図を大切にしながらも、原因ではなく相関として捉えるようにしています。足揉みにゴールはありません。「次に会う時は今日より上手くなっている」。そう信じて、日々足と向き合っています。
            </p>
          </div>

          {/* 哲学モーダルを開くボタン */}
          <motion.button
            onClick={onOpenPhilosophy}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-7 inline-flex items-center gap-2 text-sm text-terracotta hover:text-terracotta/70 font-serif tracking-wide transition-colors group"
          >
            <span className="border-b border-terracotta/40 group-hover:border-terracotta/70 transition-colors pb-0.5">
              店主のスタンスを読む
            </span>
            <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">→</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}