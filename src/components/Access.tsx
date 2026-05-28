"use client";
import { motion } from "framer-motion";

export default function Access() {
  const routes = [
    {
      station: "西武池袋線 ひばりヶ丘駅",
      info: "徒歩17分\nまたは\n西武バス「境04」武蔵境駅行き\n「交番前」下車 徒歩1分",
    },
    {
      station: "西武新宿線 田無駅",
      info: "西武バス「境04」ひばりヶ丘駅行き\n「交番前」下車 徒歩1分",
    },
    {
      station: "JR中央線 武蔵境駅",
      info: "西武バス「境04」ひばりヶ丘駅行き\n「交番前」下車 徒歩1分",
    },
    {
      station: "JR中央線 三鷹駅",
      info: "西武バス「鷹22」ひばりヶ丘駅行き\n「交番前」下車 徒歩1分",
    },
  ];

  return (
    <section id="access" className="bg-bg rounded-3xl shadow-lg shadow-black/5 p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-ink inline-block relative tracking-widest">
            アクセス
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {/* マップと所在地 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg text-ink mb-2">📍 所在地</h3>
              <p className="text-graytext leading-relaxed">
                〒202-0001<br />
                東京都西東京市ひばりが丘3丁目2−51<br />
                HIBARIDO 2F R-09
              </p>
            </div>
            
            <div className="w-full my-6">
              <iframe
                src="https://maps.google.co.jp/maps?output=embed&q=東京都西東京市ひばりが丘3丁目2-51 HIBARIDO"
                width="100%"
                height="360"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps: イタキモ HIBARIDO"
              ></iframe>
            </div>
          </motion.div>

          {/* 交通案内 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-bold text-lg text-ink mb-4">🚃 交通案内</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {routes.map((route, idx) => (
                <div key={idx} className="bg-card border border-divider rounded-lg px-5 py-4">
                  <h4 className="font-bold text-ink mb-2">{route.station}</h4>
                  <p className="text-graytext whitespace-pre-wrap leading-relaxed text-sm">
                    {route.info}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 駐車場案内 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg text-ink mb-2">🅿️ 駐車場</h3>
            <p className="text-graytext text-sm leading-relaxed">
              駐車場はございません。<br />
              近隣のコインパーキングをご利用ください。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
