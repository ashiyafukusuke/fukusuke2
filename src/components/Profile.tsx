"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProfileProps {
  onOpenPhilosophy: () => void;
}

export default function Profile({ onOpenPhilosophy }: ProfileProps) {
  return (
    <section className="bg-card rounded-3xl shadow-lg shadow-black/5 border-t-8 border-sub p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-sub/20 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row-reverse gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gray-100 overflow-hidden flex-shrink-0 border-4 border-white shadow-xl relative"
        >
          <Image 
            src="/profile.jpg" 
            alt="店主 福助" 
            fill
            sizes="(max-width: 768px) 192px, 256px"
            className="object-cover"
            style={{ objectPosition: 'center 75%' }}
            priority
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-gray-500 font-bold mb-3 tracking-widest text-sm">店主 福助</p>
          <h2 className="text-2xl md:text-4xl font-sans font-black text-main mb-6 tracking-wide leading-relaxed">
            足を揉むのが、<br className="md:hidden" />好きで仕方ない。
          </h2>
          <div className="text-ink leading-loose space-y-4 text-sm md:text-base font-medium">
            <p>
              毎日、足を揉んでいます。<br />
              それでも飽きるどころか、毎日新しい発見があります。<br />
              同じ足は一つもないからです。
            </p>
            <p>
              足つぼにゴールはないと思っています。<br />
              次にお会いするときは、今日より上手くなっていたい。<br />
              そのために学び続けています。
            </p>
          </div>

          {/* 店主のスタンスページへのリンク */}
          <Link
            href="/stance"
            className="mt-8 inline-flex items-center justify-center bg-transparent text-main border-2 border-main font-bold py-[12px] px-[28px] rounded-[6px] hover:bg-main hover:text-white transition duration-200 text-sm tracking-wide"
          >
            <span>店主のスタンスを読む ➔</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}