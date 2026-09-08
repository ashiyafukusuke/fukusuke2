"use client";
import { motion } from "framer-motion";

export default function Outcome() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-sans font-black text-xl md:text-2xl text-ink tracking-widest mb-8 md:mb-12">
          続いた先に、あるもの。
        </h2>
        <div className="space-y-6 text-sm md:text-base text-gray-700 leading-[2.2] md:leading-[2.4] tracking-wider">
          <p>
            同じ質の圧で最後まで足を揉み続けます。<br />
            ふくらはぎの張りも、足裏の硬さも、<br />
            指先で確かめながら順番にほどいていきます。
          </p>
          <p>
            施術が終わって立ち上がったとき、<br />
            来た時とは違う足が、そこにあります。
          </p>
          <p className="text-main font-bold text-base md:text-lg pt-2">
            帰り道で、ぜひ、その違いを確かめてください。
          </p>
        </div>
      </motion.div>
    </section>
  );
}
