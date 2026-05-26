import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Approach from "@/components/Approach";
import Practitioner from "@/components/Practitioner";
import Logic from "@/components/Logic";
import Experience from "@/components/Experience";
import Menu from "@/components/Menu";
import Impact from "@/components/Impact";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <ScrollReveal>
      <main>
        <Hero />
        <Concept />
        <Approach />
        <Practitioner />
        <Logic />
        <Experience />
        <Menu />
        <Impact />
        <Benefits />
        <Footer />
      </main>
    </ScrollReveal>
  );
}
