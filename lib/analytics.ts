declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/** Fire a GA4 event (no-op if analytics isn't configured). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params ?? {});
  }
}

/** Standard GA4 lead conversion, tagged with the funnel that produced it. */
export function trackLead(source: string, params?: Record<string, unknown>) {
  trackEvent('generate_lead', { source, ...params });
}
