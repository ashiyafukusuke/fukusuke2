"use client";
import { motion } from "framer-motion";

export default function Menu() {
  const menus = [
    {
      title: "【 守破離 -SHUHARI- 】",
      time: "60分枠",
      badge: "看板メニュー",
      badgeColor: "bg-terracotta",
      border: "border-terracotta",
      desc: "当店の看板メニュー。足裏から膝下まで丁寧にほどき深い休息へ誘導。身構えを解く絶妙な痛気持ちよさが、心と身体の緊張をほどき、本来の身軽さへと導きます。",
      price: "6,500",
      note: "※継続特典 対象コース"
    },
    {
      title: "【 沼 - NUMA - 】",
      time: "90分枠",
      badge: "2回目以降ご利用の方対象",
      badgeColor: "bg-gray-500",
      border: "border-gray-500",
      desc: "『品定め』を終え、当店の足揉みにハマってしまった方のためのコース。もう「品定め」は終わりましたよね？見えない鎧も警戒心も入り口に置いて、ズブズブと底なし沼に沈んでください。",
      price: "9,500",
      note: null
    },
    {
      title: "【 お手並み拝見 】",
      time: "40分枠",
      badge: "※品定め制度対象",
      badgeColor: "bg-olive",
      border: "border-olive",
      desc: "いわゆる「お試しコース」です。まずは当店の手技があなたのお身体に合うかどうか、どうぞお気軽に品定めしてください。",
      price: "4,500",
      note: null
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-ink text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-4xl font-bold mb-16 border-l-4 border-olive pl-6"
        >
          お品書き
        </motion.h2>
        
        <div className="space-y-8">
          {menus.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className={`bg-[#363636] p-8 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-l-4 ${item.border} relative overflow-hidden group hover:bg-[#3D3D3D] transition-colors duration-300 shadow-xl`}
            >
              <div className="flex-1 z-10">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                  <h3 className="text-2xl font-serif font-bold text-white tracking-wide">{item.title}</h3>
                  <span className="text-lg font-sans text-gray-300">{item.time}</span>
                  <span className={`${item.badgeColor} text-xs text-white px-2 py-1 rounded shadow-sm`}>{item.badge}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
              <div className="text-left md:text-right flex-shrink-0 z-10 w-full md:w-auto mt-4 md:mt-0 border-t md:border-t-0 border-gray-600 pt-4 md:pt-0">
                <p className="text-3xl font-bold text-paper md:text-right tracking-tight">{item.price}<span className="text-base font-normal ml-1">円</span></p>
                {item.note && (
                  <p className="text-xs text-terracotta mt-2 md:mt-1 font-bold">{item.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
