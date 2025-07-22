// src\components\Header\Header.jsx
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faMoon, faSun, faHome, faUsers, faCogs, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark, toggleTheme } = useTheme();
  const { t, lang } = useLanguage();
  const isArabic = lang === 'ar';

  const arabicLinks = [
  { id: 'hero', icon: faHome, text: t('nav.home') },
  { id: 'portfolio', icon: faBriefcase, text: t('nav.portfolio') },
  { id: 'services', icon: faCogs, text: t('nav.services') },
  { id: 'about', icon: faUsers, text: t('nav.about') },
  { id: 'contact', icon: faEnvelope, text: t('nav.contact') },
];

const englishLinks = [
  { id: 'hero', icon: faHome, text: t('nav.home') },
  { id: 'portfolio', icon: faBriefcase, text: t('nav.portfolio') },
  { id: 'services', icon: faCogs, text: t('nav.services') },
  { id: 'about', icon: faUsers, text: t('nav.about') },
  { id: 'contact', icon: faEnvelope, text: t('nav.contact') },
];

const navLinks = isArabic ? arabicLinks : englishLinks;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'hero', name: 'hero' },
        { id: 'about', name: 'about' },
        { id: 'services', name: 'services' },
        { id: 'portfolio', name: 'portfolio' },
        { id: 'contact', name: 'contact' }
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header${isArabic ? ' rtl' : ' ltr'}`}>
      <div className="header-container">
        {isArabic ? (
          <>
            <div className="logo-section" style={{ order: 3 }}>
              <div className="logo-container">
                <Link to="/" className="header-logo !mt-5.5" style={{textDecoration: 'none'}}>
                  <div className="logo-icon">
                    <img src="/logo/logo-10.png" alt="MCT Logo" className="logo-img" />
                  </div>
                  <div className="logo-text1">MCT</div>
                </Link>
              </div>
            </div>
            <nav className={`nav-menu${isMenuOpen ? ' active' : ''}`} style={{ order: 2 }}>
              <ul className="nav-list">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <Link to={`/#${link.id}`} className={`nav-link${activeSection === link.id ? ' active' : ''}`}>
                      {link.text}
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
                <Link to="/" className="header-logo !mt-5.5 " style={{textDecoration: 'none'}}>
                  <div className="logo-text !text-3xl font-black">MCT</div>
                  <div className="logo-icon">
                    <img src="/logo/logo-10.png" alt="MCT Logo" className="logo-img" />
                  </div>
                </Link>
              </div>
            </div>
            <nav className={`nav-menu${isMenuOpen ? ' active' : ''}`} style={{ order: 2 }}>
              <ul className="nav-list">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <Link to={`/#${link.id}`} className={`nav-link${activeSection === link.id ? ' active' : ''}`}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header-right" style={{ order: 3 }}>
              <LanguageSwitcher className="header-lang-switcher" />
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
          {(isArabic ? navLinks : [...navLinks]).map(link => (
            <li key={link.id}>
              <Link to={`/#${link.id}`} onClick={toggleMenu} className={activeSection === link.id ? 'active' : ''}>
                <FontAwesomeIcon icon={link.icon} style={{ color: link.id === 'about' || link.id === 'portfolio' ? 'var(--secondary-400)' : 'var(--primary-300)' }} />
                {link.text}
              </Link>
            </li>
          ))}
          <li style={{ textAlign: 'center', margin: '20px 0' }}>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;