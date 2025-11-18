import { useEffect, useState } from 'react';
import { initFacebookPixel } from '@/lib/facebook-pixel';

interface FacebookPixelProviderProps {
  children: React.ReactNode;
}

const isDev = import.meta.env.DEV;
const FACEBOOK_PIXEL_ID = '1118615310401431';

export const FacebookPixelProvider = ({ children }: FacebookPixelProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializePixel = () => {
      try {
        if (isDev) console.log('🔍 Facebook Pixel: Initializing with ID:', FACEBOOK_PIXEL_ID);
        
        initFacebookPixel(FACEBOOK_PIXEL_ID);
        setIsInitialized(true);
        
        if (isDev) console.log('🎯 Facebook Pixel initialized successfully');
      } catch (error) {
        if (isDev) console.error('❌ Failed to initialize Facebook Pixel:', error);
      }
    };

    initializePixel();
  }, []);

  // 초기화 상태 확인용 로그
  useEffect(() => {
    if (isInitialized && isDev) {
      console.log('📊 Facebook Pixel Provider: Ready for tracking');
    }
  }, [isInitialized]);

  return <>{children}</>;
};
