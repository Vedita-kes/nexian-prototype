import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import LeadMagnetSection from "@/components/LeadMagnetSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import CTAModal from "@/components/CTAModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onCTAClick={openModal} />
      <main>
        <HeroSection onCTAClick={openModal} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection onCTAClick={openModal} />
        <BenefitsSection />
        <LeadMagnetSection onCTAClick={openModal} />
        <TestimonialsSection />
        <FinalCTASection onCTAClick={openModal} />
      </main>
      <Footer />
      <CTAModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Index;
