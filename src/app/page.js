import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Pipeline from "@/components/Pipeline";
import Industries from "@/components/Industries";
import BonusStack from "@/components/BonusStack";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070d] text-white">
      <Navbar />

      <Hero />
      <ProofBar />
      <Problem />

      <Services />
      <Pipeline />
      <Industries />
      <BonusStack />
      <Packages />
      <Process />
      <FAQ />
      <FinalCTA />

      <Footer />
    </main>
  );
}