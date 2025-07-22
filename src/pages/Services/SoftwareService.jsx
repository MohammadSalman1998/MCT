// src\pages\Services\SoftwareService.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import ServicesHeader from '../../components/Header/ServicesHeader';
import Footer from '../../components/Footer/Footer';
import styles from './SoftwareService.module.css';
import { FaLaptopCode, FaWindows, FaAndroid, FaTools, FaCogs, FaAward, FaUserTie, FaMoneyBillWave, FaJava, FaRegFileCode, FaGlobe, FaCheckCircle, FaCode, FaDatabase, FaServer, FaCloud, FaMobile, FaDesktop } from 'react-icons/fa';
import { SiDotnet, SiJavascript, SiReact, SiAngular, SiHtml5, SiCss3, SiNodedotjs } from 'react-icons/si';
import PythonDuotoneIcon from '../../components/Icons/PythonDuotoneIcon';
import { FiSettings } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { AiOutlineSolution } from 'react-icons/ai';

const serviceCards = [
  {
    icon: <FaGlobe className={styles['software-card-icon']} />, key: 'web',
  },
  {
    icon: <FaWindows className={styles['software-card-icon']} />, key: 'windows',
  },
  {
    icon: <FaAndroid className={styles['software-card-icon']} />, key: 'android',
  },
  {
    icon: <FaTools className={styles['software-card-icon']} />, key: 'maintenance',
  },
  {
    icon: <FaCogs className={styles['software-card-icon']} />, key: 'custom',
  },
  {
    icon: <FiSettings className={styles['software-card-icon']} />, key: 'tools',
  },
];

const highlights = [
  { icon: <FaAward className={styles['software-highlight-icon']} />, key: 'experience' },
  { icon: <AiOutlineSolution className={styles['software-highlight-icon']} />, key: 'custom' },
  { icon: <SiReact className={styles['software-highlight-icon']} />, key: 'modern' },
  { icon: <FaCheckCircle className={styles['software-highlight-icon']} />, key: 'quality' },
  { icon: <BiSupport className={styles['software-highlight-icon']} />, key: 'support' },
  { icon: <FaMoneyBillWave className={styles['software-highlight-icon']} />, key: 'price' },
];

const techIcons = [
  <SiHtml5 key="html" title="HTML5" />, <SiCss3 key="css" title="CSS3" />, <SiJavascript key="js" title="JavaScript" />,
  <SiReact key="react" title="React" />, <SiAngular key="angular" title="Angular" />, <SiDotnet key="dotnet" title=".NET" />,
  <FaRegFileCode key="csharp" title="C#" />, <FaJava key="java" title="Java" />
];

// Floating background icons for hero section
const floatingBgIcons = [
  <FaCode key="code" />,
  <FaDatabase key="database" />,
  <FaServer key="server" />,
  <FaCloud key="cloud" />,
  <FaMobile key="mobile" />,
  <FaDesktop key="desktop" />
];

// Rotating circle icons
const rotatingIcons = [
  <SiReact key="react" style={{ color: '#61DAFB' }} />,
  <SiJavascript key="js" style={{ color: '#F7DF1E' }} />,
  <PythonDuotoneIcon key="python" size={40} style={{ display: 'block' }} />,
  <SiNodedotjs key="node" style={{ color: '#339933' }} />,
  <SiAngular key="angular" style={{ color: '#DD0031' }} />,
  <SiHtml5 key="html" style={{ color: '#E34F26' }} />
];

const SoftwareService = () => {
  const { t, lang, direction } = useLanguage();
  const isArabic = lang === 'ar';
  return (
    <div className={styles['software-service-page']} dir={direction} lang={lang}>
      <ServicesHeader />
      <main>
        {/* Hero Section */}
        <div className={styles.container}>
          <section className={styles['software-hero']}>
            {/* Floating Background Icons */}
            <div className={styles['floating-bg-icons']}>
              {floatingBgIcons.map((icon, index) => (
                <div key={index} className={styles['floating-icon']}>
                  {icon}
                </div>
              ))}
            </div>

            <h1>
              <FaLaptopCode />
              {t('services.software.title')}
            </h1>
            <p>
              {t('services.software.description1')}<br/>
              {t('services.software.description2')}
            </p>
            <div className={styles['tech-icons']}>
              {techIcons.map((icon, index) => (
                <div key={index} className={styles['tech-icon']}>
                  {icon}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Rotating Icons Circle */}
        <div className=/*{styles.container}*/ " fixed scale-300 absolute -left-7 top-1/3  opacity-50 ">
          <div className={styles['rotating-icons-container']}>
            <div className={styles['rotating-icons-circle']}>
              {rotatingIcons.map((icon, index) => (
                <div key={index} className={styles['rotating-icon']}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>{t('services.software.ourServices')}</h2>
            <div className={styles['software-cards']}>
              {serviceCards.map((card, idx) => (
                <div className={`${styles['software-card']} ${styles['animate-fade-in-up']}`} key={idx} tabIndex={0}>
                  {card.icon}
                  <div className={styles['software-card-title']}>{t(`services.software.cards.${card.key}.title`)}</div>
                  <div className={styles['software-card-desc']}>{t(`services.software.cards.${card.key}.desc`)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>{t('services.software.whyUs')}</h2>
            <div className={styles['software-highlights']}>
              {highlights.map((item, idx) => (
                <div className={`${styles['software-highlight']} ${styles['animate-fade-in-left']}`} key={idx}>
                  {item.icon}
                  <div className={styles['software-highlight-content']}>
                    <div className={styles['software-highlight-title']}>{t(`services.software.highlights.${item.key}.title`)}</div>
                    <div className={styles['software-highlight-desc']}>{t(`services.software.highlights.${item.key}.desc`)}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className={styles.container}>
          <section className={styles['cta-section']}>
            <div className={styles['cta-title']}>
              {t('services.software.cta')}
            </div>
            <Link to="/#contact" className={styles['cta-button']}>
              {t('services.software.ctaBtn')}
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SoftwareService;
