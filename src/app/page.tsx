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

export default function Home() {
  return (
    <main className="min-h-screen">
      <StickyNav />
      <Hero />
      <Experience />
      <Philosophy />
      <Profile />
      <Process />
      <Menu />
      <System />
      <CancelPolicy />
      <Footer />
    </main>
  );
}
