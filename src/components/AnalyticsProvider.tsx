import { useEffect, useState } from 'react';
import { initGA } from '@/lib/analytics';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // SSL 문제로 인해 임시로 Analytics 비활성화
    console.log('Analytics temporarily disabled due to SSL issues');
    setIsInitialized(true);
  }, []);

  // 초기화 상태 확인용 로그
  useEffect(() => {
    if (isInitialized) {
      console.log('📊 Analytics Provider: Ready for tracking');
    }
  }, [isInitialized]);

  return <>{children}</>;
};