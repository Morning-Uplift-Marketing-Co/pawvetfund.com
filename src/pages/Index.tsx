import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import TrustBar from "@/components/landing/TrustBar";
import HowItWorks from "@/components/landing/HowItWorks";
import ComparisonSection from "@/components/landing/ComparisonSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
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
        <link rel="canonical" href="https://petfund.com" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <TrustBar />
          <HowItWorks />
          <ComparisonSection />
          <TestimonialSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
