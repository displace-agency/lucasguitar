const push = (data: Record<string, unknown>) => {
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push(data);
};

export const trackPageView = (pageType: string, pageTitle: string) => {
  push({ event: 'spa_page_view', page_type: pageType, page_title: pageTitle });
};

export const trackCTAClick = (label: string, url: string) => {
  push({ event: 'cta_click', cta_label: label, cta_url: url });
};

export const trackSocialClick = (platform: string, url: string) => {
  push({ event: 'social_click', social_platform: platform, social_url: url });
};

export const trackWhatsAppClick = (pageType: string) => {
  push({ event: 'whatsapp_click', page_type: pageType });
};

export const trackContactClick = (method: string) => {
  push({ event: 'contact_click', contact_method: method });
};

export const trackScrollDepth = (depth: string, pageType: string) => {
  push({ event: 'scroll_depth', scroll_depth: depth, page_type: pageType });
};

export const trackCookieConsent = (action: string) => {
  push({ event: 'cookie_consent', consent_action: action });
};

export const trackWizardStep = (step: number, studentType: string) => {
  push({ event: 'wizard_step', wizard_step: step, student_type: studentType });
};

export const trackFormSubmit = (studentType: string) => {
  push({ event: 'form_submit', student_type: studentType });
};
