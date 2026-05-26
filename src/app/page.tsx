import Hero from "@/components/Hero";
import Paradox from "@/components/Paradox";
import Introduction from "@/components/Introduction";
import Approach from "@/components/Approach";
import Process from "@/components/Process";
import Practitioner from "@/components/Practitioner";
import Menu from "@/components/Menu";
import Trust from "@/components/Trust";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <ScrollReveal>
      <main className="bg-[#FAFAFA] min-h-screen text-left">
        <Hero />
        <Paradox />
        <Introduction />
        <Approach />
        <Process />
        <Practitioner />
        <Menu />
        <Trust />
        <Footer />
      </main>
    </ScrollReveal>
  );
}
