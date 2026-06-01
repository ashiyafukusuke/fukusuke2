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
      <div className="w-full bg-main text-white text-[13px] font-medium tracking-[0.05em] py-[10px] px-4 text-center leading-relaxed">
        まもなく、痛気持ちいいが始まります。<br />
        ― 2026年6月中旬 プレオープン予定
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
