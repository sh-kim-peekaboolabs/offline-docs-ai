import { useEffect, useRef } from 'react';
import { initGA } from '@/lib/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const GA_ID = 'G-HF399B16BV';

export const AnalyticsProvider = ({ children }: AnalyticsProviderProps) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    
    // 즉시 초기화 (edge function 호출 없음)
    initGA(GA_ID);
  }, []);

  return <>{children}</>;
};