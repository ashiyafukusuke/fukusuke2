import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Concept from "@/components/Concept";
import Approach from "@/components/Approach";
import Practitioner from "@/components/Practitioner";
import Logic from "@/components/Logic";
import Menu from "@/components/Menu";
import Data from "@/components/Data";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <ScrollReveal>
      <main className="bg-white min-h-screen">
        <Hero />
        <Introduction />
        <Concept />
        <Approach />
        <Practitioner />
        <Logic />
        <Menu />
        <Data />
        <Benefits />
        <Footer />
      </main>
    </ScrollReveal>
  );
}
