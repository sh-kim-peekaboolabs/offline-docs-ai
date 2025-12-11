import { useEffect, useRef } from 'react';
import { initFacebookPixel } from '@/lib/facebook-pixel';

interface FacebookPixelProviderProps {
  children: React.ReactNode;
}

const FACEBOOK_PIXEL_ID = '1118615310401431';

export const FacebookPixelProvider = ({ children }: FacebookPixelProviderProps) => {
  const initialized = useRef(false);

  useEffect(() => {
    // 중복 초기화 방지
    if (initialized.current || window.fbq) return;
    initialized.current = true;
    
    initFacebookPixel(FACEBOOK_PIXEL_ID);
  }, []);

  return <>{children}</>;
};
