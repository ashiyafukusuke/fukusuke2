"use client";
import { motion } from "framer-motion";

export default function MenuCarousel() {
  const reserveUrl = "https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent";

  const menus = [
    {
      title: "30分枠",
      price: "3,500円",
      desc: "短時間で足をリセット",
      content: "足裏を中心に、手早くほぐします。仕事前後や、時間が取れない日に。",
      color: "border-divider",
      bg: "bg-card",
      badges: [
        { text: "クイック", color: "bg-main text-white font-bold rounded-[4px]" }
      ]
    },
    {
      title: "60分枠",
      price: "初回 6,500円",
      desc: "はじめての方におすすめ",
      content: "足裏からふくらはぎ・膝裏まで、ゆっくり深くほぐしていきます。イタキモの施術を一番バランスよく味わえる60分。初回お試し制度の対象コースです。",
      color: "border-divider",
      bg: "bg-cardlight",
      badges: [
        { text: "イタキモの真骨頂", color: "bg-main text-white font-bold rounded-[4px]" },
        { text: "初回お試し対象", color: "bg-white text-main border border-main font-bold rounded-[4px]" }
      ],
      isPopular: true
    },
    {
      title: "90分枠",
      price: "初回 9,000円",
      desc: "ゆっくり時間をかけたい方へ",
      content: "足裏からふくらはぎ・膝裏まで、60分よりゆったりした流れで進めます。急がず、じっくり味わいたい方に。",
      color: "border-divider",
      bg: "bg-card",
      badges: [
        { text: "実は1番人気", color: "bg-sub text-white font-bold rounded-[4px]" },
        { text: "初回お試し対象", color: "bg-white text-main border border-main font-bold rounded-[4px]" }
      ]
    }
  ];

  const repeatBenefits = [
    {
      title: "好みの圧から始まる",
      content: "前回の圧の好みや、足の状態を踏まえたところから始められます。"
    },
    {
      title: "枠の時間を、まるごと施術に",
      content: "初回のヒアリングやお試しの区切りがないぶん、時間をそのまま足に使えます。"
    },
    {
      title: "前回との違いをお伝えします",
      content: "前回と比べて、足の硬さや張りがどう違うかをお伝えします。"
    }
  ];

  return (
    <section id="menu" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-main p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        {/* セクションヘッダー */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-main inline-block relative tracking-widest mb-6">
            メニュー・料金
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
          <p className="text-[14px] text-ink font-bold text-center mb-4 leading-relaxed">
            はじめての方には60分枠がおすすめです。<br />
            足の奥までしみわたる感覚を、一番味わいやすい長さです。
          </p>
        </div>

        {/* メニューカード一覧（スマホ縦積み、PC3列グリッド） */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 items-stretch mb-14">
          {menus.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`w-full rounded-2xl p-5 md:p-6 border-2 ${item.color} ${item.bg} flex flex-col justify-between shadow-sm`}
            >
              <div>
                {item.badges && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.badges.map((b, i) => (
                      <span key={i} className={`inline-block text-[10px] md:text-xs px-2 py-1 ${b.color}`}>
                        {b.text}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-sans font-black text-main mb-1">{item.title}</h3>
                <p className="text-xs font-bold text-gray-500 mb-3">{item.desc}</p>
                <div className="text-xl md:text-2xl font-black text-ink mb-4">{item.price}</div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-6">
                  {item.content}
                </p>
              </div>
              <a 
                href={reserveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center w-full py-[14px] rounded-[6px] font-bold transition-all duration-200 text-sm tracking-[0.08em] ${
                  item.isPopular 
                  ? "bg-main text-white shadow-lg hover:bg-mainhover" 
                  : "bg-transparent text-main border-2 border-main hover:bg-main hover:text-white"
                }`}
              >
                予約枠を確保する
              </a>
            </motion.div>
          ))}
        </div>

        {/* 料金表エリア */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <h3 className="font-sans font-black text-xl md:text-2xl text-ink inline-block relative tracking-wider">
              料金表
            </h3>
          </div>

          {/* テーブルコンテナ（375px幅でも横スクロールせず収まる設計） */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-center border-collapse text-[11px] sm:text-sm md:text-base border border-divider rounded-xl overflow-hidden shadow-xs">
              <thead>
                <tr className="bg-cardlight border-b border-divider text-ink font-bold">
                  <th className="py-2.5 px-1 sm:py-3.5 sm:px-3 border-r border-divider w-[18%]">コース</th>
                  <th className="py-2.5 px-1 sm:py-3.5 sm:px-3 border-r border-divider w-[24%]">初回</th>
                  <th className="py-2.5 px-1 sm:py-3.5 sm:px-3 border-r border-divider w-[28%] bg-main/[0.06] text-main font-black">2回目以降</th>
                  <th className="py-2.5 px-0.5 sm:py-3.5 sm:px-3 w-[30%] leading-tight bg-main/[0.12] text-main font-black">
                    2回目以降＋<br />クレジット決済
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-divider bg-white text-ink">
                <tr>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 font-bold border-r border-divider bg-cardlight/50">30分</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 border-r border-divider">3,500円</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 border-r border-divider bg-main/[0.06] text-main font-black">3,300円</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 bg-main/[0.12] text-main font-black">3,000円</td>
                </tr>
                <tr>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 font-bold border-r border-divider bg-cardlight/50">60分</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 border-r border-divider">6,500円</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 border-r border-divider bg-main/[0.06] text-main font-black">5,500円</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 bg-main/[0.12] text-main font-black">5,000円</td>
                </tr>
                <tr>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 font-bold border-r border-divider bg-cardlight/50">90分</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 border-r border-divider">9,000円</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 border-r border-divider bg-main/[0.06] text-main font-black">8,000円</td>
                  <td className="py-3 px-1 sm:py-3.5 sm:px-3 bg-main/[0.12] text-main font-black">7,500円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 料金表の注記 */}
          <div className="mt-4 text-left text-[11px] sm:text-xs text-gray-600 leading-relaxed space-y-1">
            <p>※前回から間隔が空いても、2回目以降はずっと継続料金です。</p>
            <p>※ご予約時にクレジット決済された場合の料金です。施術後はお会計なし、ゆるんだ状態のままお帰りいただけます。</p>
            <p>※初回お試し制度は60分枠・90分枠が対象です。</p>
          </div>

          {/* 予約ボタン（料金表・注記の直下） */}
          <div className="mt-6 text-center">
            <a
              href={reserveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-main text-white font-bold py-[14px] px-[36px] rounded-[6px] hover:bg-mainhover transition duration-200 text-sm tracking-[0.08em] shadow-md w-full sm:w-auto"
            >
              予約枠を確保する
            </a>
          </div>
        </div>

        {/* 2回目からのイタキモ（通うメリット） */}
        <div className="pt-6 border-t border-divider">
          <div className="text-center mb-8">
            <h3 className="font-sans font-black text-xl md:text-2xl text-main inline-block relative tracking-wider">
              2回目からのイタキモ
            </h3>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 items-stretch">
            {repeatBenefits.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="w-full rounded-2xl p-5 md:p-6 border-2 border-divider bg-cardlight flex flex-col justify-start shadow-xs"
              >
                <h4 className="text-base md:text-lg font-sans font-black text-ink mb-3">
                  【{item.title}】
                </h4>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}