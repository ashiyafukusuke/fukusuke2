"use client";
import { motion } from "framer-motion";

interface ProfileProps {
  onOpenPhilosophy: () => void;
}

export default function Profile({ onOpenPhilosophy }: ProfileProps) {
  return (
    <section className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sub/20 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          style={{ display: 'none' }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 overflow-hidden flex-shrink-0 border-4 border-white shadow-xl"
        >
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-main font-serif mb-2 tracking-widest text-sm font-bold">店主 福助</p>
          <h2 className="text-3xl md:text-4xl font-serif font-black text-ink mb-6 tracking-widest">
            福助
            <span className="text-lg font-sans font-normal text-gray-400 ml-3 tracking-widest">Fukusuke</span>
          </h2>
          <div className="text-ink leading-loose space-y-4 text-sm md:text-base font-medium">
            <p>
              足つぼにゴールはないと思っています。<br />
              次にお会いするときは、今日より上手くなっていたい。<br />
              そのために学び続けています。
            </p>
          </div>

          {/* 哲学モーダルを開くボタン */}
          <motion.button
            onClick={onOpenPhilosophy}
            whileHover={{ y: -2 }}
            className="mt-7 inline-flex items-center justify-center bg-transparent text-main border-2 border-main font-semibold py-[12px] px-[28px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-sm tracking-wide"
          >
            <span>店主のスタンスを読む ➔</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}