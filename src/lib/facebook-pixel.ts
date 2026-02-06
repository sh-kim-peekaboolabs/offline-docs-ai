declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

const isDev = import.meta.env.DEV;

// Facebook Pixel 초기화
export const initFacebookPixel = (pixelId: string) => {
  if (isDev) console.log('🎯 Initializing Facebook Pixel with ID:', pixelId);

  // Facebook Pixel 스크립트가 이미 로드되었는지 확인
  if (window.fbq) {
    if (isDev) console.log('✅ Facebook Pixel already initialized');
    return;
  }

  // Facebook Pixel 베이스 코드
  const fbq: any = function() {
    if ((fbq as any).callMethod) {
      (fbq as any).callMethod.apply(fbq, arguments);
    } else {
      (fbq as any).queue.push(arguments);
    }
  };

  if (!window.fbq) {
    window.fbq = fbq;
  }
  
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.queue = [];

  // 스크립트 태그 생성 및 추가
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  // noscript 이미지 태그 추가
  const noscript = document.createElement('noscript');
  const img = document.createElement('img');
  img.height = 1;
  img.width = 1;
  img.style.display = 'none';
  img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`;
  noscript.appendChild(img);
  document.body.appendChild(noscript);

  // Pixel 초기화 및 첫 PageView 이벤트
  window.fbq('init', pixelId);
  window.fbq('track', 'PageView');

  if (isDev) console.log('✅ Facebook Pixel initialized successfully');
};

// 페이지뷰 추적
export const trackPageView = () => {
  if (!window.fbq) {
    if (isDev) console.warn('⚠️ Facebook Pixel not initialized');
    return;
  }

  if (isDev) console.log('📊 Facebook Pixel: Tracking PageView');
  window.fbq('track', 'PageView');
};

// 리드 이벤트 추적 (이메일 가입)
export const trackLead = (email?: string) => {
  if (!window.fbq) {
    if (isDev) console.warn('⚠️ Facebook Pixel not initialized');
    return;
  }

  const eventData = email ? { email } : {};
  
  if (isDev) console.log('📊 Facebook Pixel: Tracking Lead event', eventData);
  window.fbq('track', 'Lead', eventData);
};

// 커스텀 이벤트 추적
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (!window.fbq) {
    if (isDev) console.warn('⚠️ Facebook Pixel not initialized');
    return;
  }

  if (isDev) console.log(`📊 Facebook Pixel: Tracking ${eventName} event`, parameters);
  
  if (parameters) {
    window.fbq('track', eventName, parameters);
  } else {
    window.fbq('track', eventName);
  }
};

// Facebook Pixel 헬퍼 객체
export const facebookPixel = {
  trackPageView,
  trackLead,
  trackEvent,
  
  // 추가 표준 이벤트들 (필요시 사용)
  trackViewContent: (contentName?: string) => {
    trackEvent('ViewContent', contentName ? { content_name: contentName } : undefined);
  },
  
  trackCompleteRegistration: () => {
    trackEvent('CompleteRegistration');
  },
  
  trackContact: () => {
    trackEvent('Contact');
  },
};
