"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import MenuCarousel from "@/components/MenuCarousel";
import Profile from "@/components/Profile";
import Process from "@/components/Process";
import System from "@/components/System";
import CancelPolicy from "@/components/CancelPolicy";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";
import PhilosophyModal from "@/components/PhilosophyModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen pb-32">
      <StickyNav onOpenPhilosophy={() => setModalOpen(true)} />
      
      <Hero />
      
      <div className="pt-16 px-4 md:px-8 space-y-16 max-w-5xl mx-auto">
        <FeaturesCarousel />
        <MenuCarousel />
        <Profile onOpenPhilosophy={() => setModalOpen(true)} />
        <Process />
        <System />
        <CancelPolicy />
      </div>

      <Footer />
      {/* モーダルはページ最上位でレンダリング */}
      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
