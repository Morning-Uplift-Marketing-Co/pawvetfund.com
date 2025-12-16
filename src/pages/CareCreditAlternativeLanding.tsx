import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";
import CareCreditAltHero from "@/components/carecredit-alt/CareCreditAltHero";
import CareCreditAltTrustBar from "@/components/carecredit-alt/CareCreditAltTrustBar";
import CareCreditAltTrap from "@/components/carecredit-alt/CareCreditAltTrap";
import CareCreditAltTable from "@/components/carecredit-alt/CareCreditAltTable";
import CareCreditAltTestimonial from "@/components/carecredit-alt/CareCreditAltTestimonial";
import CareCreditAltCTA from "@/components/carecredit-alt/CareCreditAltCTA";
import CareCreditAltDisclaimer from "@/components/carecredit-alt/CareCreditAltDisclaimer";

const CareCreditAlternativeLanding = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>CareCredit Alternative for Vet Bills | Paw Vet Fund - Personal Loans for Pet Care</title>
        <meta name="description" content="Denied by CareCredit? Get a personal cash loan for vet bills instead. All credit types considered. No deferred interest traps. Use at ANY vet clinic." />
        <link rel="canonical" href="https://pawvetfund.com/carecredit-alternative-landing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <CareCreditAltHero onOpenForm={() => setIsFormOpen(true)} />
          <CareCreditAltTrustBar />
          <CareCreditAltTrap />
          <CareCreditAltTable onOpenForm={() => setIsFormOpen(true)} />
          <CareCreditAltTestimonial />
          <CareCreditAltCTA onOpenForm={() => setIsFormOpen(true)} />
          <CareCreditAltDisclaimer />
        </main>
        <Footer />
      </div>

      <LoanFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default CareCreditAlternativeLanding;
