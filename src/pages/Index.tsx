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

  // Inject Voluum Lander Tracking Script
  useEffect(() => {
    // Add delegate-ch meta tag
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'delegate-ch');
    metaTag.setAttribute('content', 'sec-ch-ua https://trk.pawvetfund.com; sec-ch-ua-mobile https://trk.pawvetfund.com; sec-ch-ua-arch https://trk.pawvetfund.com; sec-ch-ua-model https://trk.pawvetfund.com; sec-ch-ua-platform https://trk.pawvetfund.com; sec-ch-ua-platform-version https://trk.pawvetfund.com; sec-ch-ua-bitness https://trk.pawvetfund.com; sec-ch-ua-full-version-list https://trk.pawvetfund.com; sec-ch-ua-full-version https://trk.pawvetfund.com');
    document.head.appendChild(metaTag);

    // Add style
    const style = document.createElement('style');
    style.textContent = '.dtpcnt{opacity: 0;}';
    document.head.appendChild(style);

    // Inject tracking script
    const script = document.createElement('script');
    script.textContent = `(function(e,d,k,n,u,v,g,w,C,f,p,x,D,c,q,r,h,t,y,G,z){function A(){for(var a=d.querySelectorAll(".dtpcnt"),b=0,l=a.length;b<l;b++)a[b][w]=a[b][w].replace(/(^|\\s+)dtpcnt($|\\s+)/g,"")}function E(a,b,l,F){var m=new Date;m.setTime(m.getTime()+(F||864E5));d.cookie=a+"="+b+"; "+l+"samesite=Strict; expires="+m.toGMTString()+"; path=/";k.setItem(a,b);k.setItem(a+"-expires",m.getTime())}function B(a){var b=d.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return b?b.pop():k.getItem(a+"-expires")&&+k.getItem(a+"-expires")>(new Date).getTime()?k.getItem(a):null}z="https:"===e.location.protocol?"secure; ":"";e[f]||(e[f]=function(){(e[f].q=e[f].q||[]).push(arguments)},r=d[u],d[u]=function(){r&&r.apply(this,arguments);if(e[f]&&!e[f].hasOwnProperty("params")&&/loaded|interactive|complete/.test(d.readyState))for(;c=d[v][p++];)/\\/\\/?click\\/\\?($|(\\/[0-9]+)?$)/.test(c.pathname)&&(c[g]="javascrip"+e.postMessage.toString().slice(4,5)+":"+f+'.l="'+c[g]+'",void 0')},setTimeout(function(){(t=RegExp("[?&]cpid(=([^&#]*)|&|#|$)").exec(e.location.href))&&t[2]&&(h=t[2],y=B("vl-"+h));var a=B("vl-cep"),b=location[g];if("savedCep"===D&&a&&(!h||"undefined"===typeof h)&&0>b.indexOf("cep=")){var l=-1<b.indexOf("?")?"&":"?";b+=l+a}c=d.createElement("script");q=d.scripts[0];c.defer=1;c.src=x+(-1===x.indexOf("?")?"?":"&")+"lpref="+n(d.referrer)+"&lpurl="+n(b)+"&lpt="+n(d.title)+"&vtm="+(new Date).getTime()+(y?"&uw=no":"");c[C]=function(){for(p=0;c=d[v][p++];)/dtpCallback\\.l/.test(c[g])&&(c[g]=decodeURIComponent(c[g]).match(/dtpCallback\\.l="([^"]+)/)[1]);A()};q.parentNode.insertBefore(c,q);h&&E("vl-"+h,"1",z)},0),setTimeout(A,7E3))})(window,document,localStorage,encodeURIComponent,"onreadystatechange","links","href","className","onerror","dtpCallback",0,"https://trk.pawvetfund.com/d/.js","savedCep");`;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const noscriptLink = document.createElement('link');
    noscriptLink.setAttribute('href', 'https://trk.pawvetfund.com/d/.js?noscript=true&lpurl=');
    noscriptLink.setAttribute('rel', 'stylesheet');
    noscript.appendChild(noscriptLink);
    document.head.appendChild(noscript);

    return () => {
      // Cleanup
      if (document.head.contains(metaTag)) document.head.removeChild(metaTag);
      if (document.head.contains(style)) document.head.removeChild(style);
      if (document.head.contains(script)) document.head.removeChild(script);
      if (document.head.contains(noscript)) document.head.removeChild(noscript);
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
