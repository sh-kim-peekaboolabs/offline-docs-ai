import { useState, useEffect } from 'react';

export type Language = 'ko' | 'en';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('localdocs-language') as Language;
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLanguage);
    localStorage.setItem('localdocs-language', newLanguage);
  };

  return { language, toggleLanguage };
};