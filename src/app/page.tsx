"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import Profile from "@/components/Profile";
import SystemCarousel from "@/components/SystemCarousel";
import MenuCarousel from "@/components/MenuCarousel";
import ProcessCarousel from "@/components/ProcessCarousel";
import Enjoy100 from "@/components/Enjoy100";
import PolicyCarousel from "@/components/PolicyCarousel";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";
import PhilosophyModal from "@/components/PhilosophyModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen pb-32">
      <StickyNav />
      
      <Hero />
      
      <div className="pt-16 px-4 md:px-8 space-y-16 max-w-5xl mx-auto">
        <FeaturesCarousel />
        <Profile onOpenPhilosophy={() => setModalOpen(true)} />
        <SystemCarousel />
        <MenuCarousel />
        <ProcessCarousel />
        <Enjoy100 />
        <PolicyCarousel />
      </div>

      <Footer />
      {/* モーダルはページ最上位でレンダリング */}
      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
