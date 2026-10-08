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
import Outcome from "@/components/Outcome";
import KnowFeet from "@/components/KnowFeet";

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
      
      {/* 1. ヒーロー */}
      <Hero />
      
      <div className="px-4 md:px-8 space-y-16 max-w-5xl mx-auto pt-16">
        {/* 2. お客様の声 */}
        <VoicesCarousel />

        {/* 3. 奥までしみわたる理由 */}
        <FeaturesCarousel />
      </div>

      {/* 4. 続いた先に、あるもの。 */}
      <div className="my-16">
        <Outcome />
      </div>

      <div className="px-4 md:px-8 space-y-16 max-w-5xl mx-auto">
        {/* 5. 店主プロフィール */}
        <Profile onOpenPhilosophy={() => setModalOpen(true)} />

        {/* 6. メニュー・料金（料金表、予約ボタン、2回目からのイタキモ含む） */}
        <MenuCarousel />

        {/* 7. 安心して試せる仕組み */}
        <SystemCarousel />

        {/* 8. 足を知る */}
        <KnowFeet />

        {/* 9. ご利用の流れ */}
        <ProcessCarousel />

        {/* 10. イタキモを100％楽しむために */}
        <Enjoy100 />

        {/* 11. アクセス */}
        <Access />

        {/* 12. キャンセルポリシー */}
        <PolicyCarousel />
      </div>

      {/* 13. フッター */}
      <Footer />
      {/* モーダルはページ最上位でレンダリング */}
      <PhilosophyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
