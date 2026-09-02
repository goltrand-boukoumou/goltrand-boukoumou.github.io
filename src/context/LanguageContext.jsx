import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

const getPreferredLanguage = () => {
  if (typeof window === 'undefined') {
    return 'fr';
  }

  const savedLanguage = localStorage.getItem('language');
  const supportedLanguages = ['fr', 'en', 'es', 'zh'];

  return supportedLanguages.includes(savedLanguage) ? savedLanguage : 'fr';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getPreferredLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside a LanguageProvider');
  }

  return context;
};