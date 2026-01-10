import { lazy, Suspense } from "react";
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

const SectionFallback = () => <div className="min-h-[200px]" />;

const CareCreditAlternativeLanding = () => {
  const handleOpenForm = () => {
    window.location.href = "https://trk.pawvetfund.com/click";
  };

  return (
    <>
      <Helmet>
        <title>CareCredit Alternative for Vet Bills | Paw Vet Fund - Personal Loans for Pet Care</title>
        <meta name="description" content="Denied by CareCredit? Get a personal cash loan for vet bills instead. All credit types considered. No deferred interest traps. Use at ANY vet clinic." />
        <link rel="canonical" href="https://pawvetfund.com/carecredit-alternative-landing" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header onOpenForm={handleOpenForm} />
        <main>
          <CareCreditAltHero onOpenForm={handleOpenForm} />
          <CareCreditAltTrustBar />
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltTrap />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltTable onOpenForm={handleOpenForm} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltTestimonial />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltCTA onOpenForm={handleOpenForm} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CareCreditAltDisclaimer />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      </div>
    </>
  );
};

export default CareCreditAlternativeLanding;
