/**
 * Matomo tracking configuration
 */

// Replace with your Matomo instance URL and site ID
export const MATOMO_URL = "https://hashtagselfiehu.matomo.cloud/";
export const MATOMO_SITE_ID = "1";

// Track page view
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && (window as any)._paq) {
    const _paq = (window as any)._paq;
    _paq.push(["setCustomUrl", url]);
    _paq.push(["setDocumentTitle", document.title]);
    _paq.push(["trackPageView"]);
  }
};

// Track event
export const trackEvent = (
  category: string,
  action: string,
  name?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && (window as any)._paq) {
    const _paq = (window as any)._paq;
    _paq.push(["trackEvent", category, action, name, value]);
    console.log(`Matomo Event: ${category} - ${action} - ${name} - ${value}`);
  }
};
