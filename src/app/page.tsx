"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Profile from "@/components/Profile";
import Process from "@/components/Process";
import Menu from "@/components/Menu";
import System from "@/components/System";
import CancelPolicy from "@/components/CancelPolicy";
import Footer from "@/components/Footer";
import StickyNav from "@/components/StickyNav";
import PhilosophyModal from "@/components/PhilosophyModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <StickyNav onOpenPhilosophy={() => setModalOpen(true)} />
      <Hero />
      <Experience />
      <Philosophy />
      <Profile onOpenPhilosophy={() => setModalOpen(true)} />
      <Process />
      <Menu />
      <System />
      <CancelPolicy />
      <Footer />
      {/* モーダルはページ最上位でレンダリング */}
      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
