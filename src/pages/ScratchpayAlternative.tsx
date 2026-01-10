import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ScratchpayHero from "@/components/scratchpay/ScratchpayHero";
import CashIsKing from "@/components/scratchpay/CashIsKing";
import ScratchpayComparison from "@/components/scratchpay/ScratchpayComparison";
import ScratchpayTestimonial from "@/components/scratchpay/ScratchpayTestimonial";
import ScratchpayDisclaimer from "@/components/scratchpay/ScratchpayDisclaimer";

const ScratchpayAlternative = () => {
  const handleOpenForm = () => {
    window.location.href = "https://trk.pawvetfund.com/click";
  };

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
        <Header onOpenForm={handleOpenForm} />
        <main>
          <ScratchpayHero onOpenForm={handleOpenForm} />
          <CashIsKing />
          <ScratchpayComparison onOpenForm={handleOpenForm} />
          <ScratchpayTestimonial />
          <ScratchpayDisclaimer />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ScratchpayAlternative;
