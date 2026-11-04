"use client";
import { motion } from "framer-motion";

export default function Access() {
  const routes = [
    {
      station: "西武池袋線 ひばりヶ丘駅からお越しの場合",
      info: "徒歩17分\nまたは\n西武バス「境04」武蔵境駅行き\n「交番前」下車 徒歩1分",
    },
    {
      station: "西武新宿線 田無駅からお越しの場合",
      info: "西武バス「境04」ひばりヶ丘駅行き\n「交番前」下車 徒歩1分",
    },
    {
      station: "JR中央線 武蔵境駅からお越しの場合",
      info: "西武バス「境04」ひばりヶ丘駅行き\n「交番前」下車 徒歩1分",
    },
    {
      station: "JR中央線 三鷹駅からお越しの場合",
      info: "西武バス「鷹22」ひばりヶ丘駅行き\n「交番前」下車 徒歩1分",
    },
  ];

  return (
    <section id="access" className="bg-paper rounded-3xl shadow-lg shadow-black/5 p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-brand inline-block relative tracking-widest">
            アクセス
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brand rounded-full"></div>
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
              <p className="text-ink-muted leading-relaxed">
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
                <div key={idx} className="bg-surface border border-hairline rounded-lg px-5 py-4">
                  <h4 className="font-bold text-ink mb-2">{route.station}</h4>
                  <p className="text-ink-muted whitespace-pre-wrap leading-relaxed text-sm">
                    {route.info}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-8">
            {/* 駐車場案内 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1"
            >
              <h3 className="font-bold text-lg text-ink mb-2">🅿️ 駐車場</h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                イタキモ専用の駐車場はありませんが、お車でもお越しいただけます。<br />
                近くの目安は次の2か所です（どちらもイタキモから約500m・徒歩約10分）。<br />
                ・西友隣接の有料コインパーキング<br />
                ・コープ隣接の有料コインパーキング<br />
                枠単位制のため、予約時間に遅れた場合も終了時間は変わりません。雨の日などは、余裕を持ってお越しいただくことをお勧めします。<br />
                なお、当店専用の待合スペースはございません。到着は予約時間の10分前ごろまでなら大丈夫です。それより早く着いた場合は、近くで少し時間を調整してからお越しください。
              </p>
            </motion.div>

            {/* 駐輪場案内 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex-1"
            >
              <h3 className="font-bold text-lg text-ink mb-2">🚲 駐輪場</h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                建物前にHIBARIDOが用意した<br />
                駐輪スペースがございます。<br />
                マナーを守ってご利用ください。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
