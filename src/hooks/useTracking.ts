import { useEffect, useRef } from 'react';
import {
  storeTrackingParams,
  getClickId,
  getGclid,
  getSessionId,
  pushToDataLayer,
  fireGoogleConversion
} from '@/utils/tracking';

// ============================================
// ⚠️ CONFIGURATION - UPDATE THESE VALUES
// ============================================
const GOOGLE_ADS = {
  conversionId: 'AW-778689947',      // ← เปลี่ยนเป็น Conversion ID จริง
  formStartLabel: 'poFqCKrt7OYbEJu7p_MC',     // ← เปลี่ยนเป็น Label จริง (Secondary)
  formSubmitLabel: 'hz4HCK3t7OYbEJu7p_MC',    // ← เปลี่ยนเป็น Label จริง (Secondary)
};

// ============================================
// TRACKING HOOK
// ============================================
export const useTracking = () => {
  const formStartTracked = useRef(false);
  const formSubmitTracked = useRef(false);
  const initialized = useRef(false);

  // Initialize tracking on mount
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Store URL parameters
    storeTrackingParams();

    // Push initial page_view event
    const clickId = getClickId();
    const gclid = getGclid();
    const sessionId = getSessionId();

    pushToDataLayer({
      'event': 'page_view',
      'click_id': clickId,
      'gclid': gclid,
      'session_id': sessionId,
    });

    console.log('✅ Tracking initialized:', { clickId, gclid, sessionId });
  }, []);

  /**
   * Track form start (first input focus)
   * Fires only once per session
   */
  const trackFormStart = () => {
    if (formStartTracked.current) return;
    formStartTracked.current = true;

    pushToDataLayer({
      'event': 'form_start',
      'form_type': 'leadsgate',
      'click_id': getClickId(),
      'session_id': getSessionId(),
    });

    fireGoogleConversion(GOOGLE_ADS.conversionId, GOOGLE_ADS.formStartLabel);
    console.log('✅ Form Start tracked');
  };

  /**
   * Track form submit click
   * Fires only once per session
   */
  const trackFormSubmit = () => {
    if (formSubmitTracked.current) return;
    formSubmitTracked.current = true;

    pushToDataLayer({
      'event': 'form_submit_click',
      'form_type': 'leadsgate',
      'click_id': getClickId(),
      'session_id': getSessionId(),
    });

    fireGoogleConversion(GOOGLE_ADS.conversionId, GOOGLE_ADS.formSubmitLabel);
    console.log('✅ Form Submit tracked');
  };

  return {
    trackFormStart,
    trackFormSubmit,
    clickId: getClickId(),
    gclid: getGclid(),
    sessionId: getSessionId(),
  };
};
