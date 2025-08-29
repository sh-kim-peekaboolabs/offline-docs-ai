import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('localdocs-language') as Language;
    console.log('Saved language from localStorage:', savedLanguage);
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      console.log('Setting language to:', savedLanguage);
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ko' ? 'en' : 'ko';
    console.log('Toggling language from', language, 'to', newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('localdocs-language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};