import { lazy, Suspense, useCallback, useEffect } from "react";
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
// Simple loading fallback
const SectionFallback = () => <div className="min-h-[200px]" />;

const Index = () => {
  const handleOpenForm = useCallback((zipCode?: string) => {
    window.location.href = "https://trk.pawvetfund.com/click";
  }, []);

  // Inject Voluum tracking only after user interaction (with a short fallback)
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    let isInjected = false;

    const injectTracking = () => {
      if (isInjected) return;
      isInjected = true;

      // Add delegate-ch meta tag
      const metaTag = document.createElement("meta");
      metaTag.setAttribute("http-equiv", "delegate-ch");
      metaTag.setAttribute(
        "content",
        "sec-ch-ua https://trk.pawvetfund.com; sec-ch-ua-mobile https://trk.pawvetfund.com; sec-ch-ua-arch https://trk.pawvetfund.com; sec-ch-ua-model https://trk.pawvetfund.com; sec-ch-ua-platform https://trk.pawvetfund.com; sec-ch-ua-platform-version https://trk.pawvetfund.com; sec-ch-ua-bitness https://trk.pawvetfund.com; sec-ch-ua-full-version-list https://trk.pawvetfund.com; sec-ch-ua-full-version https://trk.pawvetfund.com"
      );
      document.head.appendChild(metaTag);

      // Add style to hide placeholders until script runs
      const style = document.createElement("style");
      style.textContent = ".dtpcnt{opacity: 0;}";
      document.head.appendChild(style);

      // Inject tracking script from external file to reduce inline script surface
      const script = document.createElement("script");
      script.src = "/voluum-init.js";
      script.defer = true;
      document.head.appendChild(script);

      // Add noscript fallback
      const noscript = document.createElement("noscript");
      const noscriptLink = document.createElement("link");
      noscriptLink.setAttribute("href", "https://trk.pawvetfund.com/d/.js?noscript=true&lpurl=");
      noscriptLink.setAttribute("rel", "stylesheet");
      noscript.appendChild(noscriptLink);
      document.head.appendChild(noscript);

      cleanup = () => {
        if (document.head.contains(metaTag)) document.head.removeChild(metaTag);
        if (document.head.contains(style)) document.head.removeChild(style);
        if (document.head.contains(script)) document.head.removeChild(script);
        if (document.head.contains(noscript)) document.head.removeChild(noscript);
      };
    };

    const idleWindow = window as typeof window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const firstInteraction = () => {
      injectTracking();
      window.removeEventListener("pointerdown", firstInteraction, { capture: true } as EventListenerOptions);
      window.removeEventListener("keydown", firstInteraction, true);
      window.removeEventListener("scroll", firstInteraction, { capture: true } as EventListenerOptions);
    };

    window.addEventListener("pointerdown", firstInteraction, { capture: true, once: true });
    window.addEventListener("keydown", firstInteraction, { capture: true, once: true });
    window.addEventListener("scroll", firstInteraction, { capture: true, once: true, passive: true });

    let idleId: number | undefined;
    let timeoutId: number | undefined;

    // Fallback: idle if available, else timeout to ensure tracking still runs on no-interaction views
    if (typeof idleWindow.requestIdleCallback === "function") {
      idleId = idleWindow.requestIdleCallback(() => injectTracking(), { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(() => injectTracking(), 2000);
    }

    return () => {
      if (idleId !== undefined && typeof idleWindow.cancelIdleCallback === "function") {
        idleWindow.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("pointerdown", firstInteraction, { capture: true } as EventListenerOptions);
      window.removeEventListener("keydown", firstInteraction, true);
      window.removeEventListener("scroll", firstInteraction, { capture: true } as EventListenerOptions);
      cleanup?.();
    };
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
        <Suspense fallback={<SectionFallback />}><Footer /></Suspense>
      </div>
    </>
  );
};

export default Index;
