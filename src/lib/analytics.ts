import ReactGA from 'react-ga4';

const isDev = import.meta.env.DEV;

// Google Analytics 초기화
export const initGA = (measurementId: string) => {
  if (isDev) console.log('🚀 Initializing Google Analytics with ID:', measurementId);
  
  ReactGA.initialize(measurementId);
  
  if (isDev) console.log('✅ Google Analytics initialized successfully');
  
  // 초기 페이지뷰 전송
  trackPageView(window.location.pathname + window.location.search);
};

// 페이지뷰 추적
export const trackPageView = (path: string, title?: string) => {
  if (isDev) console.log('📊 Tracking page view:', { path, title });
  
  ReactGA.send({ 
    hitType: "pageview", 
    page: path,
    title: title 
  });
};

// 이벤트 추적
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  ReactGA.event({
    action,
    category,
    label,
    value
  });
};

// 커스텀 이벤트들
export const analytics = {
  // 폼 제출 추적
  trackFormSubmit: (formName: string, success: boolean) => {
    trackEvent('form_submit', 'engagement', `${formName}_${success ? 'success' : 'error'}`);
  },
  
  // 버튼 클릭 추적
  trackButtonClick: (buttonName: string, location: string) => {
    trackEvent('button_click', 'engagement', `${buttonName}_${location}`);
  },
  
  // 섹션 뷰 추적
  trackSectionView: (sectionName: string) => {
    trackEvent('section_view', 'engagement', sectionName);
  },

  // 외부 링크 클릭 추적
  trackExternalLink: (url: string, linkText: string) => {
    trackEvent('external_link_click', 'engagement', `${linkText}: ${url}`);
  }
};