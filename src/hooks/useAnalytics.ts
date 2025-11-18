import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';
import { trackPageView as trackFBPageView } from '@/lib/facebook-pixel';

// 페이지뷰 자동 추적 훅
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 페이지뷰 추적
    trackPageView(location.pathname + location.search, document.title);
    
    // Facebook Pixel 페이지뷰 추적
    trackFBPageView();
  }, [location]);
};

// 스크롤 기반 섹션 뷰 추적 훅
export const useSectionTracking = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            if (sectionId) {
              // 섹션이 50% 이상 보일 때 추적
              import('@/lib/analytics').then(({ analytics }) => {
                analytics.trackSectionView(sectionId);
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // 모든 섹션 관찰
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
};