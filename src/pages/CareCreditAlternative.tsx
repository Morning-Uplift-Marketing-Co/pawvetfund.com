import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import CareCreditHero from "@/components/carecredit/CareCreditHero";
import DeferredInterestTrap from "@/components/carecredit/DeferredInterestTrap";
import CareCreditComparison from "@/components/carecredit/CareCreditComparison";
import CareCreditTestimonial from "@/components/carecredit/CareCreditTestimonial";
import CareCreditDisclaimer from "@/components/carecredit/CareCreditDisclaimer";

const CareCreditAlternative = () => {
  const handleOpenForm = () => {
    window.location.href = "https://trk.pawvetfund.com/click";
  };

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
        <Header onOpenForm={handleOpenForm} />
        <main>
          <CareCreditHero onOpenForm={handleOpenForm} />
          <DeferredInterestTrap />
          <CareCreditComparison onOpenForm={handleOpenForm} />
          <CareCreditTestimonial />
          <CareCreditDisclaimer />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CareCreditAlternative;
