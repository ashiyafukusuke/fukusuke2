"use client";
import { motion } from "framer-motion";

interface ProfileProps {
  onOpenPhilosophy: () => void;
}

export default function Profile({ onOpenPhilosophy }: ProfileProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-white bg-opacity-50 relative overflow-hidden">
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
          <p className="text-olive font-serif mb-2 tracking-widest text-sm">足揉みバカ</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-6 flex items-baseline">
            福助 
            <span className="text-lg font-sans font-normal text-gray-400 ml-3 tracking-widest">Fukusuke</span>
          </h2>
          <div className="text-gray-700 leading-loose space-y-4">
            <p>
              古くから愛される福助人形のように、訪れる人に安心と福を届けたい。確かな技術と包み隠さない誠実さを一揉みごとに込めています。
            </p>
            <p>
              反射区理論と科学的根拠。その間で葛藤した時期もありましたが、今では両方の良い面を素直に認め、ただの「足つぼ」ではないイタキモスタイルへと進化しました。
            </p>
            <p>
              足揉みという仕事にはゴールがありません。面白さは毎日確実に上達できること。一日中揉んでいても身体は疲れず、むしろ施術中に「あ、今上手くなった！」と感じる瞬間がたまらなく楽しいのです。
            </p>
            <p>
              今日この瞬間も持てるすべての技術を出し尽くします。でも次にお会いする時はもっと上手くなっているはず。<br />
              <span className="font-bold text-ink">終わりのない探求が楽しくてしかたありません！</span>
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
