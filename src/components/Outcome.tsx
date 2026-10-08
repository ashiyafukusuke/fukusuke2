"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Outcome() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/bridge-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-center"
        quality={80}
      />
      {/* 黒の半透明オーバーレイ（55%） */}
      <div className="absolute inset-0 bg-black/55" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-sans font-black text-xl md:text-2xl text-[#FFFFFF] tracking-widest mb-8 md:mb-12">
            ほどけた先に、あるもの。
          </h2>
          <div className="space-y-6 text-sm md:text-base text-[#FFFFFF] leading-[2.2] md:leading-[2.4] tracking-wider font-normal">
            <p>
              ゆっくり深い圧で、最後まで足を揉み続けます。<br />
              ふくらはぎの張りも、足裏の硬さも、<br />
              指先で確かめながら順番にほどいていきます。
            </p>
            <p>
              施術が終わって立ち上がったとき、<br />
              来た時とは違う足が、そこにあります。
            </p>
            <p className="text-[#FF3B30] font-bold text-base md:text-lg pt-2">
              帰り道で、ぜひ、その違いを確かめてください。<br />
              思わずスキップしたくなった、と言ってくださる方もいます。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
