import { useEffect, useState } from 'react';
import { initGA } from '@/lib/analytics';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        console.log('🔍 Analytics: Attempting to initialize...');
        
        // Supabase Edge Function을 통해 Google Analytics ID 가져오기
        const { data, error } = await supabase.functions.invoke('get-analytics-id');
        
        console.log('📡 Analytics: Edge function response:', { data, error });

        if (!error && data?.analyticsId) {
          console.log('✅ Analytics: Initializing with ID:', data.analyticsId);
          initGA(data.analyticsId);
          setIsInitialized(true);
          console.log('🎯 Google Analytics initialized successfully');
        } else {
          console.warn('⚠️ Analytics: ID not found or error occurred:', error);
          
          // 개발 모드에서는 테스트 ID 사용
          if (process.env.NODE_ENV === 'development') {
            console.log('🛠️ Development mode: Using test analytics ID');
            initGA('G-XXXXXXXXXX'); // 테스트용 더미 ID
            setIsInitialized(true);
          }
        }
      } catch (error) {
        console.error('❌ Failed to initialize Google Analytics:', error);
      }
    };

    initializeAnalytics();
  }, []);

  // 초기화 상태 확인용 로그
  useEffect(() => {
    if (isInitialized) {
      console.log('📊 Analytics Provider: Ready for tracking');
    }
  }, [isInitialized]);

  return <>{children}</>;
};