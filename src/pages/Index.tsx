import { useState, lazy, Suspense, useCallback } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import { Helmet } from "react-helmet-async";

// Lazy load below-the-fold components for better performance
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks"));
const ComparisonSection = lazy(() => import("@/components/landing/ComparisonSection"));
const TestimonialSection = lazy(() => import("@/components/landing/TestimonialSection"));
const FAQSection = lazy(() => import("@/components/landing/FAQSection"));
const CTASection = lazy(() => import("@/components/landing/CTASection"));
const Footer = lazy(() => import("@/components/landing/Footer"));
const LoanFormDialog = lazy(() => import("@/components/loan-form/LoanFormDialog"));

// Simple loading fallback
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [prefillZipCode, setPrefillZipCode] = useState<string | undefined>();

  const handleOpenForm = useCallback((zipCode?: string) => {
    setPrefillZipCode(zipCode);
    setFormOpen(true);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pet Financing | Fast Vet Bill Loans | Funds in 24 Hours</title>
        <meta
          name="description"
          content="Get fast financing for unexpected vet bills. Funds as quick as 24 hours. All credit types considered. Soft credit check won't affect your score. Compare rates from $500-$10,000."
        />
        <meta property="og:title" content="Pet Financing | Fast Vet Bill Loans" />
        <meta
          property="og:description"
          content="Don't let money stand between your pet and care. Get funds in 24 hours for vet bills up to $10,000."
        />
        <link rel="canonical" href="https://pawvetfund.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header onOpenForm={handleOpenForm} />
        <main className="flex-1">
          <HeroSection onOpenForm={handleOpenForm} />
          <TrustBar />
          <Suspense fallback={<SectionFallback />}>
            <HowItWorks onOpenForm={handleOpenForm} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <ComparisonSection onOpenForm={handleOpenForm} />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <TestimonialSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <FAQSection />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <CTASection onOpenForm={handleOpenForm} />
          </Suspense>
        </main>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <LoanFormDialog open={formOpen} onOpenChange={setFormOpen} prefillZipCode={prefillZipCode} />
      </Suspense>
    </>
  );
};

export default Index;
