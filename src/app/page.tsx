"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Profile from "@/components/Profile";
import SystemCarousel from "@/components/SystemCarousel";
import MenuCarousel from "@/components/MenuCarousel";
import Enjoy100 from "@/components/Enjoy100";
import PolicyCarousel from "@/components/PolicyCarousel";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";
import PhilosophyModal from "@/components/PhilosophyModal";
import Access from "@/components/Access";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen pb-32">
      <div className="w-full bg-main text-white text-[13px] font-medium tracking-[0.05em] py-[10px] px-4 text-center leading-relaxed flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <span>6/17（水）テスト営業実施。特別価格・現金のみ・概ね60分。</span>
        <a 
          href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-main border border-white font-bold py-1.5 px-4 rounded hover:bg-transparent hover:text-white transition duration-200 text-xs tracking-wide shadow-sm"
        >
          詳細を確認して予約
        </a>
      </div>
      <StickyNav />
      
      <Hero />
      
      <div className="pt-16 px-4 md:px-8 space-y-16 max-w-5xl mx-auto">
        <FeaturesCarousel />
        <Profile onOpenPhilosophy={() => setModalOpen(true)} />
        <MenuCarousel />
        <SystemCarousel />
        <Enjoy100 />
        <Access />
        <PolicyCarousel />
      </div>

      <Footer />
      {/* モーダルはページ最上位でレンダリング */}
      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
