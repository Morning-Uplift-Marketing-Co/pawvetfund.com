import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Apply = () => {
  const [searchParams] = useSearchParams();

  // Extract data from URL parameters (matching API Keep parameter names)
  const formData = {
    requested_amount: searchParams.get("requested_amount") || "",
    first_name: searchParams.get("first_name") || "",
    last_name: searchParams.get("last_name") || "",
    email: searchParams.get("email") || "",
    home_phone: searchParams.get("home_phone") || "",
    zip: searchParams.get("zip") || "",
  };

  const hasFormData = Object.values(formData).some(value => value !== "");

  // Inject Voluum Offer Tracking Script
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
    script.textContent = `(function(b,d,g,k,u,e,p,v,l,m,n,f,q,w,r){function t(a){var c=d.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return c?c.pop():g.getItem(a+"-expires")&&+g.getItem(a+"-expires")>(new Date).getTime()?g.getItem(a):null}r="https:"===b.location.protocol?"secure; ":"";b[e]||(b[e]=function(a){b[e].state.callbackQueue.push(a)},b[e].state={callbackQueue:[]},b[e].registerConversion=function(a){b[e].state.callbackQueue.push(a)},function(){(n=RegExp("[?&]cpid(=([^&#]*)|&|#|$)").exec(b.location.href))&&n[2]&&(f=n[2],q=t("vl-"+f));var a=t("vl-cid"),c;"savedCid"!==v||!a||f&&"undefined"!==typeof f||(c=a);l=d.createElement("script");m=d.scripts[0];l.src=p+(-1===p.indexOf("?")?"?":"&")+"oref="+k(d.referrer)+"&ourl="+k(location[u])+"&opt="+k(d.title)+"&vtm="+(new Date).getTime()+(c?"&cid="+c:"")+(q?"&uw=no":"");m.parentNode.insertBefore(l,m);if(f){a="vl-"+f;c=r;var h=new Date;h.setTime(h.getTime()+864E5);d.cookie=a+"=1; "+c+"samesite=Strict; expires="+h.toGMTString()+"; path=/";g.setItem(a,"1");g.setItem(a+"-expires",h.getTime())}}())})(window,document,localStorage,encodeURIComponent,"href","dtpCallback","https://trk.pawvetfund.com/d/.js","savedCid");`;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    const noscriptLink = document.createElement('link');
    noscriptLink.setAttribute('href', 'https://trk.pawvetfund.com/d/.js?noscript=true&ourl=');
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

  useEffect(() => {
    // Build the API Keep form URL with parameters
    let formUrl = "https://apikeep.com/form/applicationInit.js";

    if (hasFormData) {
      const params = new URLSearchParams();
      if (formData.requested_amount) params.append("requested_amount", formData.requested_amount);
      if (formData.first_name) params.append("first_name", formData.first_name);
      if (formData.last_name) params.append("last_name", formData.last_name);
      if (formData.email) params.append("email", formData.email);
      if (formData.home_phone) params.append("home_phone", formData.home_phone);
      if (formData.zip) params.append("zip", formData.zip);

      if (params.toString()) {
        formUrl = `${formUrl}?${params.toString()}`;
      }
    }

    // Initialize the form configuration
    (window as any)._lg_form_init_ = {
      aid: "14881",
      template: "fresh"
    };

    // Load the form script with parameters
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = formUrl;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      // Remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Clean up global variable
      delete (window as any)._lg_form_init_;
    };
  }, [hasFormData, formData.requested_amount, formData.first_name, formData.last_name, formData.email, formData.home_phone, formData.zip]);

  return (
    <>
      <Helmet>
        <title>Apply Now - PawPet Fund</title>
        <meta name="description" content="Apply for pet care financing with PawPet Fund. Quick and easy application process with instant decisions." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          {/* Form Container */}
          <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Apply for Financing
              </h1>
              <p className="text-muted-foreground text-lg">
                Complete the form below to get started. It only takes a few minutes.
              </p>
            </div>

            {/* API Keep Form */}
            <div id="_lg_form_" className="w-full"></div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-trust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Secure Application</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-trust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-trust" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Instant Decision</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center mt-6">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apply;
