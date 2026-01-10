import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import LoanFormDialog from "@/components/loan-form/LoanFormDialog";
import ScratchpayHero from "@/components/scratchpay/ScratchpayHero";
import CashIsKing from "@/components/scratchpay/CashIsKing";
import ScratchpayComparison from "@/components/scratchpay/ScratchpayComparison";
import ScratchpayTestimonial from "@/components/scratchpay/ScratchpayTestimonial";
import ScratchpayDisclaimer from "@/components/scratchpay/ScratchpayDisclaimer";

const ScratchpayAlternative = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Scratchpay Alternative for Vet Bills | Paw Vet Fund</title>
        <meta 
          name="description" 
          content="Vet doesn't accept Scratchpay? Get a personal cash loan instead. Use at any veterinarian, flexible terms up to 72 months, funds deposited to your bank." 
        />
        <link rel="canonical" href="https://pawvetfund.com/scratchpay-alternative" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <ScratchpayHero onOpenForm={() => setIsFormOpen(true)} />
          <CashIsKing />
          <ScratchpayComparison onOpenForm={() => setIsFormOpen(true)} />
          <ScratchpayTestimonial />
          <ScratchpayDisclaimer />
        </main>
        <Footer />
      </div>

      <LoanFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default ScratchpayAlternative;
