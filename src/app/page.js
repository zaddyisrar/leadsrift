import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Packages from "@/components/Packages";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#05070d] text-white">
      <Navbar />

      <Hero />
      <ProofBar />
      <Problem />
      <Process />
      <Services />
      <Industries />
      <Packages />
      <FinalCTA />

      <Footer />
    </main>
  );
}