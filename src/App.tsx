import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

// Lazy load pages for better initial bundle size
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Apply = lazy(() => import("./pages/Apply"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CareCreditAlternative = lazy(() => import("./pages/CareCreditAlternative"));
const CareCreditAlternativeLanding = lazy(() => import("./pages/CareCreditAlternativeLanding"));
const ScratchpayAlternative = lazy(() => import("./pages/ScratchpayAlternative"));
const EmergencyVetFunding = lazy(() => import("./pages/EmergencyVetFunding"));
const CaliforniaPrivacyRights = lazy(() => import("./pages/CaliforniaPrivacyRights"));
const DoNotSellMyInfo = lazy(() => import("./pages/DoNotSellMyInfo"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Simple loading fallback
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/carecredit-alternative" element={<CareCreditAlternative />} />
            <Route path="/carecredit-alternative-landing" element={<CareCreditAlternativeLanding />} />
            <Route path="/scratchpay-alternative" element={<ScratchpayAlternative />} />
            <Route path="/emergency-vet-funding" element={<EmergencyVetFunding />} />
            <Route path="/california-privacy-rights" element={<CaliforniaPrivacyRights />} />
            <Route path="/do-not-sell-my-info" element={<DoNotSellMyInfo />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </HelmetProvider>
);

export default App;
