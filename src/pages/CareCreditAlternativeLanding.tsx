import { useState, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import CareCreditAltHero from "@/components/carecredit-alt/CareCreditAltHero";
import CareCreditAltTrustBar from "@/components/carecredit-alt/CareCreditAltTrustBar";

// Lazy load below-the-fold components
const CareCreditAltTrap = lazy(() => import("@/components/carecredit-alt/CareCreditAltTrap"));
const CareCreditAltTable = lazy(() => import("@/components/carecredit-alt/CareCreditAltTable"));
const CareCreditAltTestimonial = lazy(() => import("@/components/carecredit-alt/CareCreditAltTestimonial"));
const CareCreditAltCTA = lazy(() => import("@/components/carecredit-alt/CareCreditAltCTA"));
const CareCreditAltDisclaimer = lazy(() => import("@/components/carecredit-alt/CareCreditAltDisclaimer"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const LoanFormDialog = lazy(() => import("@/components/loan-form/LoanFormDialog"));

const SectionFallback = () => <div className="min-h-[200px]" />;

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
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltTrap />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltTable onOpenForm={() => setIsFormOpen(true)} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltTestimonial />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltCTA onOpenForm={() => setIsFormOpen(true)} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltDisclaimer />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <LoanFormDialog open={isFormOpen} onOpenChange={setIsFormOpen} />
      </Suspense>
    </>
  );
};

export default CareCreditAlternativeLanding;
