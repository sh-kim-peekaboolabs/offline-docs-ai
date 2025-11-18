import { useEffect, useState } from 'react';
import { initFacebookPixel } from '@/lib/facebook-pixel';
import { supabase } from '@/integrations/supabase/client';

interface FacebookPixelProviderProps {
  children: React.ReactNode;
}

const isDev = import.meta.env.DEV;

export const FacebookPixelProvider = ({ children }: FacebookPixelProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializePixel = async () => {
      try {
        if (isDev) console.log('🔍 Facebook Pixel: Attempting to initialize...');
        
        // Supabase Edge Function을 통해 Facebook Pixel ID 가져오기
        const { data, error } = await supabase.functions.invoke('get-facebook-pixel-id');
        
        if (isDev) console.log('📡 Facebook Pixel: Edge function response:', { data, error });

        if (!error && data?.pixelId) {
          if (isDev) console.log('✅ Facebook Pixel: Initializing with ID:', data.pixelId);
          initFacebookPixel(data.pixelId);
          setIsInitialized(true);
          if (isDev) console.log('🎯 Facebook Pixel initialized successfully');
        } else {
          if (isDev) console.warn('⚠️ Facebook Pixel: ID not found or error occurred:', error);
          
          // 개발 모드에서는 테스트 ID 사용
          if (process.env.NODE_ENV === 'development') {
            if (isDev) console.log('🛠️ Development mode: Using test pixel ID');
            initFacebookPixel('1234567890'); // 테스트용 더미 ID
            setIsInitialized(true);
          }
        }
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
