"use client";
import { motion } from "framer-motion";

export default function System() {
  return (
    <section className="bg-white rounded-3xl shadow-lg shadow-black/5 border-t-8 border-olive p-8 md:p-12 text-ink">
      <div className="flex flex-col">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold text-ink mb-16 border-l-4 border-terracotta pl-6"
        >
          安心と継続の仕組み
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-paper p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-terracotta flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-2xl font-bold text-ink inline-block">初回お試し制度</h3>
              <span className="text-sm font-bold text-terracotta ml-3 inline-block bg-terracotta/10 px-2 py-1 rounded">※初回来店時限定</span>
            </div>
            <p className="text-lg font-bold text-ink mb-6">合わないと感じたなら、お代は頂戴しません。</p>
            <p className="text-gray-700 leading-loose text-sm md:text-base flex-grow">
              ※理由は問いません。<br/>
              ・左足の施術後に継続を確認します。<br/>
              ・合わなければお伝えください。<br/><br/>
              <span className="font-bold text-ink">直ちに終了し、お代は頂戴いたしません。</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-paper p-8 md:p-10 rounded-2xl shadow-sm border-t-4 border-olive flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <div className="mb-8 border-b border-gray-100 pb-4">
              <h3 className="text-2xl font-bold text-ink inline-block">継続ご利用特典</h3>
              <span className="text-sm font-normal text-gray-500 ml-2 inline-block">（60分枠限定）</span>
            </div>
            
            <ul className="space-y-6 text-gray-700 text-sm md:text-base mb-8 flex-grow">
              <li className="flex items-center justify-between border-b border-gray-50 pb-4">
                <span className="font-bold text-lg">2回目〜5回目</span>
                <div className="text-right">
                  <span className="font-bold text-xl text-ink">5,500円</span>
                  <span className="text-xs text-gray-500 block mt-1">（通常6,500円 → 1,000円OFF）</span>
                </div>
              </li>
              <li className="flex items-center justify-between border-b border-gray-50 pb-4">
                <span className="font-bold text-lg">6回目以降</span>
                <div className="text-right">
                  <span className="font-bold text-xl text-terracotta">5,000円</span>
                  <span className="text-xs text-gray-500 block mt-1">（さらに500円OFF）</span>
                </div>
              </li>
            </ul>
            
            <p className="text-xs text-gray-400 leading-relaxed">
              ※現在は60分枠のみが対象となります
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
