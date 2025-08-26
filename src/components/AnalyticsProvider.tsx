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
        // Supabase Edge Function을 통해 Google Analytics ID 가져오기
        const { data, error } = await supabase.functions.invoke('get-analytics-id');

        if (!error && data?.analyticsId) {
          initGA(data.analyticsId);
          setIsInitialized(true);
          console.log('Google Analytics initialized');
        } else {
          console.warn('Analytics ID not found or error occurred:', error);
        }
      } catch (error) {
        console.error('Failed to initialize Google Analytics:', error);
      }
    };

    initializeAnalytics();
  }, []);

  return <>{children}</>;
};