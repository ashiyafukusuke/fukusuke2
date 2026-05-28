"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import MenuCarousel from "@/components/MenuCarousel";
import Profile from "@/components/Profile";
import ProcessCarousel from "@/components/ProcessCarousel";
import SystemCarousel from "@/components/SystemCarousel";
import PolicyCarousel from "@/components/PolicyCarousel";
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
        <Profile onOpenPhilosophy={() => setModalOpen(true)} />
        <SystemCarousel />
        <MenuCarousel />
        <ProcessCarousel />
        <PolicyCarousel />
      </div>

      <Footer />
      {/* モーダルはページ最上位でレンダリング */}
      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
