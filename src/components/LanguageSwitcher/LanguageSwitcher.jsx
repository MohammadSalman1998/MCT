// src\components\LanguageSwitcher\LanguageSwitcher.jsx
// import React, { useState } from 'react';
// import { useLanguage } from '../../contexts/LanguageContext';
// import './LanguageSwitcher.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import PageLoader from '../PageLoader/PageLoader';
import { FaGlobe } from 'react-icons/fa';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ className = "" }) => {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [loading, setLoading] = useState(false);
  // Detect direction
  const dir = document?.documentElement?.dir || 'ltr';
  const isArabic = currentLanguage === 'ar';

  // Show loader and switch language after 1s
  const handleSwitch = () => {
    setLoading(true);
    setTimeout(() => {
      changeLanguage(isArabic ? 'en' : 'ar');
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <button className={`lang-btn-globe ${className}`} onClick={handleSwitch} aria-label="تبديل اللغة">
        <FaGlobe className="lang-btn-icon" />
        <span className="lang-btn-label">{currentLanguage === 'ar' ? 'EN' : 'AR'}</span>
      </button>
      {loading && ReactDOM.createPortal(<PageLoader />, document.body)}
    </>
  );
};

export default LanguageSwitcher;
