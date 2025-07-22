// src\contexts\LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, languages, defaultLanguage } from '../locales';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Get saved language from localStorage or use default
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || defaultLanguage;
  });

  const [direction, setDirection] = useState(() => {
    const language = languages.find(lang => lang.code === currentLanguage);
    return language?.dir || 'rtl';
  });

  // Get current translations
  const t = translations[currentLanguage] || translations[defaultLanguage];

  // Change language function
  const changeLanguage = (languageCode) => {
    const language = languages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(languageCode);
      setDirection(language.dir);
      localStorage.setItem('language', languageCode);
      
      // Update document direction and lang attribute
      document.documentElement.dir = language.dir;
      document.documentElement.lang = languageCode;

      // Update body class for styling
      document.body.className = document.body.className.replace(/lang-\w+/, '');
      document.body.classList.add(`lang-${languageCode}`);

      // Apply text alignment based on direction
      if (language.dir === 'rtl') {
        document.body.style.textAlign = 'right';
      } else {
        document.body.style.textAlign = 'left';
      }
    }
  };

  // Get translation function with nested object support
  const translate = (key, fallback = key) => {
    const keys = key.split('.');
    let value = t;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback;
      }
    }
    
    return typeof value === 'string' ? value : fallback;
  };

  // Initialize on mount
  useEffect(() => {
    const language = languages.find(lang => lang.code === currentLanguage);
    if (language) {
      document.documentElement.dir = language.dir;
      document.documentElement.lang = currentLanguage;
      document.body.classList.add(`lang-${currentLanguage}`);
    }
  }, [currentLanguage]);

  const value = {
    currentLanguage,
    direction,
    languages,
    changeLanguage,
    translate,
    t: translate, // Short alias
    isRTL: direction === 'rtl',
    isLTR: direction === 'ltr'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
