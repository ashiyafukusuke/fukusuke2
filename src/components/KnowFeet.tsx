"use client";
import { motion } from "framer-motion";

export default function KnowFeet() {
  return (
    <section id="know-feet" className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-6 md:p-12 text-ink relative overflow-hidden">
      <div className="flex flex-col">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-sans font-black text-2xl md:text-3xl text-main inline-block relative tracking-widest">
            足を知る
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-main rounded-full"></div>
          </h2>
          <p className="text-sm md:text-base font-bold text-ink mt-6 leading-relaxed">
            病院に行くほどではない。でも、なんとなく気になる足。
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-6 text-xs md:text-sm text-gray-700 leading-loose"
        >
          <p>
            外反母趾のあたりが靴に当たって痛い。
            <br />
            足の裏のかかと寄りが、朝の一歩目だけピキッと痛む。
            <br />
            夕方になるとふくらはぎがパンパンになって、だる重い。
          </p>

          <p>
            これらは病気とまでは言えないけれど、確実に毎日の歩きやすさを奪っています。
          </p>

          <p>
            足のトラブルの多くは、「足の骨格の崩れ（アーチの低下）」と「筋肉の柔軟性の低下」から始まります。
          </p>

          <p>
            足には本来、体重の何倍もの衝撃を吸収する3つのアーチ（土踏まず・外側縦アーチ・横アーチ）があります。
            <br />
            日常の歩き方のくせや靴の影響、運動不足によってこのアーチが崩れると、衝撃を吸収しきれなくなり、足のあちこちに負担が集中します。
          </p>

          <p>
            イタキモの足つぼは、足裏からふくらはぎまでの筋肉と腱にしっかり圧を届け、固まった足を丁寧にゆるめていく施術です。
            <br />
            足の骨格のバランスを意識しながら、足本来の「しなやかさ」を取り戻す手助けをします。
          </p>

          <p>
            「自分の足のどこが硬くなっているのか」を知るだけでも、靴の選び方や歩き方の意識が変わります。
            <br />
            施術中に感じた足の状態は、きちんと言葉にしてお伝えします。
          </p>

          <div className="pt-4 border-t border-divider">
            <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
              ※痛みやしびれが続く場合は、整形外科（足の外科）の受診をおすすめします。
            </p>
          </div>

          {/* 将来の拡張用スロット（足圧測定・フットプリント等の計測機器や記事リンクなど） */}
          <div id="know-feet-extensions" className="mt-6" />
        </motion.div>
      </div>
    </section>
  );
}