import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { About } from "@/components/About";
import { Strengths } from "@/components/Strengths";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { AreaOfBenefit } from "@/components/AreaOfBenefit";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Welcome />
      <About />
      <Strengths />
      <Services />
      <HowItWorks />
      <AreaOfBenefit />
      <Contact />
      <Footer />
    </main>
  );
}
