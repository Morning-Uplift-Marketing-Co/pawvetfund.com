import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";
import CareCreditHero from "@/components/carecredit/CareCreditHero";
import DeferredInterestTrap from "@/components/carecredit/DeferredInterestTrap";
import CareCreditComparison from "@/components/carecredit/CareCreditComparison";
import CareCreditTestimonial from "@/components/carecredit/CareCreditTestimonial";
import CareCreditDisclaimer from "@/components/carecredit/CareCreditDisclaimer";

const CareCreditAlternative = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>CareCredit Alternative for Vet Bills | Paw Vet Fund</title>
        <meta 
          name="description" 
          content="Denied by CareCredit? Get a personal cash loan for vet bills instead. Higher approval odds, fixed interest rates, and use at any veterinary clinic." 
        />
        <link rel="canonical" href="https://pawvetfund.com/carecredit-alternative" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <CareCreditHero onOpenForm={() => setIsFormOpen(true)} />
          <DeferredInterestTrap />
          <CareCreditComparison onOpenForm={() => setIsFormOpen(true)} />
          <CareCreditTestimonial />
          <CareCreditDisclaimer />
        </main>
        <Footer />
      </div>

      <LoanFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default CareCreditAlternative;
