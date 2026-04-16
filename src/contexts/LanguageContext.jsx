// LanguageContext — Estado global del idioma con persistencia en localStorage
import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { content as allContent } from '../data/content';

const LanguageContext = createContext(null);

const SUPPORTED = ['es', 'en'];
const STORAGE_KEY = 'portfolio-lang';

const detectInitialLang = () => {
  if (typeof window === 'undefined') return 'es';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browser) ? browser : 'es';
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, content: allContent[lang] }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
