import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";
import EmergencyVetHero from "@/components/emergency-vet/EmergencyVetHero";
import EmergencyVetTrustBar from "@/components/emergency-vet/EmergencyVetTrustBar";
import EmergencyVetHowItWorks from "@/components/emergency-vet/EmergencyVetHowItWorks";
import EmergencyVetComparison from "@/components/emergency-vet/EmergencyVetComparison";
import EmergencyVetBenefits from "@/components/emergency-vet/EmergencyVetBenefits";
import EmergencyVetTestimonial from "@/components/emergency-vet/EmergencyVetTestimonial";
import EmergencyVetFAQ from "@/components/emergency-vet/EmergencyVetFAQ";
import EmergencyVetCTA from "@/components/emergency-vet/EmergencyVetCTA";

const EmergencyVetFunding = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Pet Emergency Funding | Fast Personal Loans for Vet Bills | Paw Vet Fund</title>
        <meta
          name="description"
          content="Get funds for emergency vet bills in as little as 24 hours. All credit types considered. Soft credit check won't affect your score. Compare multiple lender options."
        />
        <link rel="canonical" href="https://pawvetfund.com/emergency-vet-funding" />
        <meta property="og:title" content="Pet Emergency Funding | Fast Personal Loans for Vet Bills" />
        <meta property="og:description" content="Get funds for emergency vet bills in as little as 24 hours. All credit types considered." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <EmergencyVetHero onOpenForm={() => setIsFormOpen(true)} />
          <EmergencyVetTrustBar />
          <EmergencyVetHowItWorks />
          <EmergencyVetComparison onOpenForm={() => setIsFormOpen(true)} />
          <EmergencyVetBenefits />
          <EmergencyVetTestimonial />
          <EmergencyVetFAQ />
          <EmergencyVetCTA onOpenForm={() => setIsFormOpen(true)} />
        </main>
        <Footer />
      </div>

      <LoanFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default EmergencyVetFunding;
