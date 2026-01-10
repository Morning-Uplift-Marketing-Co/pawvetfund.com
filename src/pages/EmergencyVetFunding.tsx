import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import EmergencyVetHero from "@/components/emergency-vet/EmergencyVetHero";
import EmergencyVetTrustBar from "@/components/emergency-vet/EmergencyVetTrustBar";

// Lazy load below-the-fold components
const EmergencyVetHowItWorks = lazy(() => import("@/components/emergency-vet/EmergencyVetHowItWorks"));
const EmergencyVetComparison = lazy(() => import("@/components/emergency-vet/EmergencyVetComparison"));
const EmergencyVetBenefits = lazy(() => import("@/components/emergency-vet/EmergencyVetBenefits"));
const EmergencyVetTestimonial = lazy(() => import("@/components/emergency-vet/EmergencyVetTestimonial"));
const EmergencyVetFAQ = lazy(() => import("@/components/emergency-vet/EmergencyVetFAQ"));
const EmergencyVetCTA = lazy(() => import("@/components/emergency-vet/EmergencyVetCTA"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const SectionFallback = () => <div className="min-h-[200px]" />;

const EmergencyVetFunding = () => {
  const handleOpenForm = () => {
    window.location.href = "https://trk.pawvetfund.com/click";
  };

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
        <Header onOpenForm={handleOpenForm} />
        <main>
          <EmergencyVetHero onOpenForm={handleOpenForm} />
          <EmergencyVetTrustBar />
          <Suspense fallback={<SectionFallback />}>
            <EmergencyVetHowItWorks />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <EmergencyVetComparison onOpenForm={handleOpenForm} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <EmergencyVetBenefits />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <EmergencyVetTestimonial />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <EmergencyVetFAQ />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <EmergencyVetCTA onOpenForm={handleOpenForm} />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      </div>
    </>
  );
};

export default EmergencyVetFunding;
