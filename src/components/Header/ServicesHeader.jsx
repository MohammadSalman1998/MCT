// src\components\Header\ServicesHeader.jsx
import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { faNetworkWired, faShieldAlt, faCode, faTools, faMoon, faSun, faPalette, faHomeAlt } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const serviceLinks = [
  {
    path: '/services/software',
    // icon: faCode,
    textKey: 'services.software.title',
  },
  {
    path: '/services/network',
    // icon: faNetworkWired,
    textKey: 'services.network.title',
  },
  {
    path: '/services/security',
    // icon: faShieldAlt,
    textKey: 'services.security.title',
  },
  {
    path: '/services/support',
    // icon: faTools,
    textKey: 'services.support.title',
  },
  {
    path: '/services/design',
    // icon: faPalette,
    textKey: 'services.design.title',
  },
];

const ServicesHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { t, lang } = useLanguage();
  const location = useLocation();
  const isArabic = lang === 'ar';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header${isArabic ? ' rtl' : ' ltr'}`}>
      <div className="header-container">
        {isArabic ? (
          <>
            <div className="logo-section" style={{ order: 3 }}>
              <div className="logo-container">
                <Link to="/" className="header-logo !mt-5.5" style={{ textDecoration: 'none' }}>
                  <div className="logo-icon">
                    <img src="/logo/logo-10.png" alt="MCT Logo" className="logo-img" />
                  </div>
                  <div className="logo-text">MCT</div>
                </Link>
              </div>
            </div>
            <nav className={`nav-menu${isMenuOpen ? ' active' : ''}`} style={{ order: 2 }}>
              <ul className="nav-list">
                {serviceLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-link ${location.pathname === link.path ? ' active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FontAwesomeIcon icon={link.icon} style={{ color: 'var(--primary-300)' }} />
                      {t(link.textKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-right" style={{ order: 1 }}>
              <LanguageSwitcher className="header-lang-switcher" />
              <button className="theme-toggle" onClick={toggleTheme} aria-label="تبديل الوضع الليلي/النهاري">
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} style={{ color: 'var(--primary-300)' }} />
              </button>
              <button
                className={`menu-toggle${isMenuOpen ? ' open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="logo-section" style={{ order: 1 }}>
              <div className="logo-container">
                <Link to="/" className="header-logo !mt-5.5" style={{ textDecoration: 'none' }}>
                  <div className="logo-text ">MCT</div>
                  <div className="logo-icon">
                    <img src="/logo/logo-10.png" alt="MCT Logo" className="logo-img" />
                  </div>
                </Link>
              </div>
            </div>
            <nav className={`nav-menu${isMenuOpen ? ' active' : ''}`} style={{ order: 2 }}>
              <ul className="nav-list">
                {serviceLinks.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FontAwesomeIcon icon={link.icon} style={{ color: 'var(--primary-300)' }} />
                      {t(link.textKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-right" style={{ order: 3 }}>
              <Link to={'/'} className='header-lang-switcher theme-toggle'>
                <FontAwesomeIcon icon={faHomeAlt} style={{ color: 'var(--primary-300)' }} />
              </Link>
              {/* <LanguageSwitcher className="header-lang-switcher" /> */}
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark/light mode">
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} style={{ color: 'var(--primary-300)' }} />
              </button>
              <button
                className={`menu-toggle${isMenuOpen ? ' open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </div>
          </>
        )}
      </div>
      {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
      
      <nav className={`sidebar-menu${isMenuOpen ? ' open' : ''}`}>
        <ul>
          {serviceLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={toggleMenu}
              >
                <FontAwesomeIcon icon={link.icon} style={{ color: 'var(--primary-300)' }} />
                {t(link.textKey)}
              </Link>
            </li>
          ))}
          <li style={{ textAlign: 'center', margin: '20px 0' }}>
            {/* <LanguageSwitcher /> */}
            <Link to={'/'} className='backHome'>
            {t('backHome')}
                {/* <FontAwesomeIcon icon={faHomeAlt} style={{ color: 'var(--primary-300)' }} /> */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ServicesHeader;
