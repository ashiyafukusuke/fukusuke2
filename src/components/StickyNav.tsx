"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyNav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 480);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="sticky top-[40px] z-[100] bg-[rgba(255,251,245,0.95)] backdrop-blur-[8px] border-b border-divider shadow-sm"
        >
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
            {/* ブランド名 */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center border border-divider/80 bg-white shadow-xs">
                <img 
                  src="/logo.png" 
                  alt="イタキモ" 
                  className="w-full h-full object-cover scale-[1.7] origin-center mix-blend-multiply" 
                />
              </div>
              <span className="font-sans font-black text-sm sm:text-base tracking-wider text-ink group-hover:text-main transition-colors">
                イタ<span className="text-main">キモ</span>
              </span>
            </a>

            <div className="flex items-center gap-1 sm:gap-3 overflow-x-auto scrollbar-none">
              <a
                href="#features"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                特徴
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#menu"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                メニュー
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#trial"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                お試し制度
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#tips"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                来店前に
              </a>
              <span className="text-divider hidden sm:inline">|</span>
              <a
                href="#access"
                className="text-[12px] sm:text-sm text-graytext hover:text-main transition-colors whitespace-nowrap px-1 py-1 rounded hover:bg-main/5 font-semibold"
              >
                アクセス
              </a>
            </div>

            <a
              href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-main text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-[4px] shadow hover:bg-mainhover transition-colors duration-200 whitespace-nowrap tracking-wide"
            >
              予約枠を確保する
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}