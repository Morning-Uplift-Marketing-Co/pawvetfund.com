import { useEffect, useRef } from 'react';
import { useTracking } from '@/hooks/useTracking';
import { getClickId, getGclid } from '@/utils/tracking';

// ============================================
// ⚠️ CONFIGURATION - UPDATE THESE VALUES
// ============================================
const LEADSGATE_CONFIG = {
  aid: 'YOUR_AID',        // ← เปลี่ยนเป็น LeadsGate Affiliate ID
  template: 'fresh',       // ← template: fresh, classic, modern
};

// ============================================
// APPLY PAGE COMPONENT
// ============================================
export default function Apply() {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const scriptLoaded = useRef(false);
  const { trackFormStart, trackFormSubmit } = useTracking();

  useEffect(() => {
    // Prevent double initialization
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const clickId = getClickId();
    const gclid = getGclid();

    // ============================================
    // 1. Initialize LeadsGate Form Config
    // ============================================
    (window as any)._lg_form_init_ = {
      aid: LEADSGATE_CONFIG.aid,
      template: LEADSGATE_CONFIG.template,
      click_id: clickId,           // ส่ง Voluum Click ID
      source: gclid || 'google',   // ถ้า GCLID เป็น source (ถ้ามี)
    };

    console.log('✅ LeadsGate Form Init:', (window as any)._lg_form_init_);

    // ============================================
    // 2. Load LeadsGate Script
    // ============================================
    const script = document.createElement('script');
    script.src = 'https://apikeep.com/form/applicationInit.js';
    script.async = true;
    document.body.appendChild(script);

    // ============================================
    // 3. Setup Form Tracking with MutationObserver
    // ============================================
    const setupFormTracking = () => {
      const formContainer = formContainerRef.current;
      if (!formContainer || observerRef.current) return;

      observerRef.current = new MutationObserver(() => {
        // -----------------------------------------
        // Track Form Start (เมื่อ focus input)
        // -----------------------------------------
        const inputs = formContainer.querySelectorAll(
          'input:not([type="hidden"]), select, textarea'
        );
        inputs.forEach((input) => {
          if (!input.hasAttribute('data-track-start')) {
            input.setAttribute('data-track-start', 'true');
            input.addEventListener('focus', trackFormStart, { once: true });
          }
        });

        // -----------------------------------------
        // Track Form Submit (เมื่อ click submit button)
        // -----------------------------------------
        const submitBtn = formContainer.querySelector(
          'button[type="submit"], input[type="submit"], button:not([type="button"])'
        );
        if (submitBtn && !submitBtn.hasAttribute('data-track-submit')) {
          submitBtn.setAttribute('data-track-submit', 'true');
          submitBtn.addEventListener('click', trackFormSubmit);
        }
      });

      // Start observing
      observerRef.current.observe(formContainer, {
        childList: true,
        subtree: true,
      });

      console.log('✅ MutationObserver started');
    };

    // Setup หลัง script load
    script.onload = () => {
      setTimeout(setupFormTracking, 500);
    };

    // Fallback ถ้า script โหลดช้า
    const fallbackTimeout = setTimeout(setupFormTracking, 2000);

    // ============================================
    // 4. Cleanup
    // ============================================
    return () => {
      clearTimeout(fallbackTimeout);
      observerRef.current?.disconnect();
    };
  }, [trackFormStart, trackFormSubmit]);

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Apply Now</h1>
        </div>
      </header>

      {/* Form Container */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {/* LeadsGate Form จะ render ที่นี่ */}
          <div id="_lg_form_" ref={formContainerRef}></div>
        </div>
      </main>
    </div>
  );
}
