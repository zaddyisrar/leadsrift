import Reveal from "@/components/Reveal";
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

      <Reveal y={28}>
        <ProofBar />
      </Reveal>

      <Reveal x={-35}>
        <Problem />
      </Reveal>

      <Reveal x={35}>
        <Services />
      </Reveal>

      {/* Industries baad mein special upgrade hoga */}
      <Industries />

      <Reveal y={34}>
        <ReviewSection />
      </Reveal>

      <Reveal x={-35}>
        <RealConversations />
      </Reveal>
      <Reveal y={34}>
        <Packages />
      </Reveal>

      <Reveal y={34}>
        <BonusStack />
      </Reveal>

      {/* FinalCTA baad mein special upgrade hoga */}
      <FinalCTA />

      <Reveal y={24}>
        <Footer />
      </Reveal>

      <StickyBookCall />
    </main>
  );
}