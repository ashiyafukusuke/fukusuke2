"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StickyNavProps {
  onOpenPhilosophy: () => void;
}

export default function StickyNav({ onOpenPhilosophy }: StickyNavProps) {
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
          className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
        >
          <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
            {/* ブランド名 */}
            <span className="font-serif text-sm font-bold text-ink tracking-wide whitespace-nowrap">
              【イタキモ】
            </span>

            <div className="flex items-center gap-1 sm:gap-3 overflow-x-auto scrollbar-none">
              <a
                href="#features"
                className="text-xs sm:text-sm text-gray-500 hover:text-terracotta transition-colors whitespace-nowrap px-2 py-1 rounded hover:bg-terracotta/5"
              >
                特徴
              </a>
              <span className="text-gray-200 hidden sm:inline">|</span>
              <a
                href="#menu"
                className="text-xs sm:text-sm text-gray-500 hover:text-terracotta transition-colors whitespace-nowrap px-2 py-1 rounded hover:bg-terracotta/5"
              >
                メニュー
              </a>
              <span className="text-gray-200 hidden sm:inline">|</span>
              <a
                href="#cancel-policy"
                className="text-xs sm:text-sm text-gray-500 hover:text-terracotta transition-colors whitespace-nowrap px-2 py-1 rounded hover:bg-terracotta/5"
              >
                ポリシー
              </a>
            </div>

            {/* 予約ボタン */}
            <a
              href="#"
              className="flex-shrink-0 bg-gradient-to-r from-vitality to-terracotta text-white text-xs sm:text-sm font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition-transform duration-200 whitespace-nowrap"
            >
              予約枠を確保する
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}