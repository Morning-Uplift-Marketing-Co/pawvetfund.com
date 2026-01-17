/**
 * Tracking Utilities
 * Manages URL parameter storage, dataLayer, and Google Ads conversions
 */

// ============================================
// URL PARAMETER STORAGE
// ============================================

/**
 * Store tracking parameters from URL to cookies and sessionStorage
 * Call this on page load
 */
export function storeTrackingParams(): void {
  const params = new URLSearchParams(window.location.search);
  
  // Voluum Click ID
  const clickId = params.get('clickid');
  if (clickId) {
    document.cookie = `voluum_cid=${clickId};max-age=${30 * 24 * 60 * 60};path=/`;
    sessionStorage.setItem('voluum_clickid', clickId);
  }
  
  // Google Ads Click ID
  const gclid = params.get('gclid');
  if (gclid) {
    document.cookie = `gclid=${gclid};max-age=${90 * 24 * 60 * 60};path=/`;
    sessionStorage.setItem('gclid', gclid);
  }
  
  // UTM Parameters
  const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  utmParams.forEach(param => {
    const value = params.get(param);
    if (value) {
      sessionStorage.setItem(param, value);
    }
  });
}

// ============================================
// GETTER FUNCTIONS
// ============================================

/**
 * Get Voluum Click ID from URL, sessionStorage, or cookie
 */
export function getClickId(): string {
  // 1. Try URL first
  const params = new URLSearchParams(window.location.search);
  const urlClickId = params.get('clickid');
  if (urlClickId) return urlClickId;
  
  // 2. Try sessionStorage
  const sessionClickId = sessionStorage.getItem('voluum_clickid');
  if (sessionClickId) return sessionClickId;
  
  // 3. Try cookie
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'voluum_cid') return value;
  }
  
  return '';
}

/**
 * Get Google Ads Click ID from URL, sessionStorage, or cookie
 */
export function getGclid(): string {
  // 1. Try URL first
  const params = new URLSearchParams(window.location.search);
  const urlGclid = params.get('gclid');
  if (urlGclid) return urlGclid;
  
  // 2. Try sessionStorage
  const sessionGclid = sessionStorage.getItem('gclid');
  if (sessionGclid) return sessionGclid;
  
  // 3. Try cookie
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'gclid') return value;
  }
  
  return '';
}

/**
 * Get or create unique session ID
 */
export function getSessionId(): string {
  let sessionId = sessionStorage.getItem('tracking_session_id');
  if (!sessionId) {
    sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('tracking_session_id', sessionId);
  }
  return sessionId;
}

// ============================================
// DATALAYER & CONVERSIONS
// ============================================

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Push event to GTM dataLayer
 */
export function pushToDataLayer(data: Record<string, any>): void {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
  console.log('📊 DataLayer Push:', data);
}

/**
 * Fire Google Ads conversion directly via gtag
 */
export function fireGoogleConversion(conversionId: string, label: string): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${label}`,
    });
    console.log('🎯 Google Conversion:', `${conversionId}/${label}`);
  } else {
    console.warn('⚠️ gtag not available');
  }
}
