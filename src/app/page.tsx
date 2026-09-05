"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Profile from "@/components/Profile";
import VoicesCarousel from "@/components/VoicesCarousel";
import SystemCarousel from "@/components/SystemCarousel";
import MenuCarousel from "@/components/MenuCarousel";
import Enjoy100 from "@/components/Enjoy100";
import PolicyCarousel from "@/components/PolicyCarousel";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";
import PhilosophyModal from "@/components/PhilosophyModal";
import Access from "@/components/Access";
import ProcessCarousel from "@/components/ProcessCarousel";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen pb-32">
      <div className="sticky top-0 z-[110] w-full bg-main text-white text-[13px] font-medium tracking-[0.05em] py-[8px] px-4 text-center flex flex-row items-center justify-center gap-4 shadow-md">
        <span>ご予約受付中</span>
        <a 
          href="https://itakimo-hibarigaoka.stores.jp/reserve/itakimo_hibarigaoka/1983011#pageContent"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-main border border-white font-bold py-1 px-4 rounded hover:bg-transparent hover:text-white transition duration-200 text-xs tracking-wide shadow-sm whitespace-nowrap"
        >
          予約ページへ ➔
        </a>
      </div>
      <StickyNav />
      
      <Hero />
      
      <div className="pt-16 px-4 md:px-8 space-y-16 max-w-5xl mx-auto">
        <FeaturesCarousel />
        <Profile onOpenPhilosophy={() => setModalOpen(true)} />
        <VoicesCarousel />
        <SystemCarousel />
        <MenuCarousel />
        <ProcessCarousel />
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
