import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Introduction from "@/components/Introduction";
import Approach from "@/components/Approach";
import Process from "@/components/Process";
import Practitioner from "@/components/Practitioner";
import Logic from "@/components/Logic";
import Menu from "@/components/Menu";
import Trust from "@/components/Trust";
import Data from "@/components/Data";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <ScrollReveal>
      <main className="bg-white min-h-screen text-left">
        <Hero />
        <Concept />
        <Introduction />
        <Approach />
        <Process />
        <Practitioner />
        <Logic />
        <Menu />
        <Trust />
        <Data />
        <Benefits />
        <Footer />
      </main>
    </ScrollReveal>
  );
}
