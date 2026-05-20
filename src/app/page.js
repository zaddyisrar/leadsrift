import TrustStrip from "@/components/TrustStrip";
import MiniProcess from "@/components/MiniProcess";
import StickyBookCall from "@/components/StickyBookCall";
import RealConversations from "@/components/RealConversations";
import ReviewSection from "@/components/ReviewSection";
import BonusStack from "@/components/BonusStack";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Problem from "@/components/Problem";
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
      <TrustStrip />
      <ProofBar />
      <Problem />
      <Services />
      <Industries />
      <ReviewSection />
      <RealConversations />
      <MiniProcess />
      <Packages />
      <BonusStack />
      <FinalCTA />
      <Footer />
      <StickyBookCall />
    </main>
  );
}