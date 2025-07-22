import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import ServicesHeader from '../../components/Header/ServicesHeader';
import Footer from '../../components/Footer/Footer';
import styles from './SecurityService.module.css';
import { FaShieldAlt, FaLock, FaUserShield, FaNetworkWired, FaDatabase, FaEye, FaKey, FaCloud, FaServer, FaBug, FaSearch, FaWifi, FaSave, FaFile } from 'react-icons/fa';
import { ShieldAltDuotone, LockDuotone, SecurityDuotone, UserShieldDuotone, KeyDuotone, DatabaseDuotone } from '../../components/Icons/SecurityDuotoneIcons';

import { MdSecurity, MdVpnKey, MdMonitorHeart } from 'react-icons/md';
import { BiShield, BiAnalyse } from 'react-icons/bi';
import { AiOutlineSecurityScan } from 'react-icons/ai';

const serviceCards = [
  {
    icon: <FaBug className={styles['security-card-icon']} />, key: 'penetration',
  },
  {
    icon: <FaSearch className={styles['security-card-icon']} />, key: 'vulnerability',
  },
  {
    icon: <FaNetworkWired className={styles['security-card-icon']} />, key: 'network',
  },
  {
    icon: <MdSecurity className={styles['security-card-icon']} />, key: 'consulting',
  },
  {
    icon: <FaKey className={styles['security-card-icon']} />, key: 'access',
  },
  {
    icon: <FaDatabase className={styles['security-card-icon']} />, key: 'data',
  },
  {
    icon: <FaFile className={styles['security-card-icon']} />, key: 'protection',
  },
  {
    icon: <FaSave className={styles['security-card-icon']} />, key: 'backup',
  },
];

const highlights = [
  { icon: <FaUserShield className={styles['security-highlight-icon']} />, key: 'experience' },
  { icon: <AiOutlineSecurityScan className={styles['security-highlight-icon']} />, key: 'integrated' },
  { icon: <MdVpnKey className={styles['security-highlight-icon']} />, key: 'advanced' },
  { icon: <MdMonitorHeart className={styles['security-highlight-icon']} />, key: 'response' },
  { icon: <BiShield className={styles['security-highlight-icon']} />, key: 'continuous' },
  { icon: <BiAnalyse className={styles['security-highlight-icon']} />, key: 'cost' },
];

const techIcons = [
  <FaShieldAlt key="shield" title="Security Shield" />, <FaLock key="lock" title="Data Encryption" />, <FaUserShield key="user-shield" title="User Protection" />,
  <FaKey key="key" title="Access Control" />, <MdSecurity key="security" title="Security Systems" />, <FaEye key="monitoring" title="Security Monitoring" />,
  <FaServer key="server" title="Server Security" />, <FaDatabase key="database" title="Database Security" />
];

// Floating background icons for hero section
const floatingBgIcons = [
  <FaShieldAlt key="shield1" />, <FaLock key="lock1" />, <FaUserShield key="user1" />, <FaKey key="key1" />,
  <MdSecurity key="security1" />, <FaNetworkWired key="network1" />, <FaDatabase key="db1" />, <FaCloud key="cloud1" />,
  <FaServer key="server1" />, <FaEye key="eye1" />, <FaWifi key="wifi1" />, <FaFile key="file1" />
];

// Rotating circle icons
const rotatingIcons = [
  <ShieldAltDuotone key="shield" size={32} />, 
  <LockDuotone key="lock" size={32} />, 
  <SecurityDuotone key="security" size={32} />, 
  <UserShieldDuotone key="user" size={32} />, 
  <KeyDuotone key="key" size={32} />, 
  <DatabaseDuotone key="database" size={32} />
];

const SecurityService = () => {
  const { t, lang, direction } = useLanguage();
  const isArabic = lang === 'ar';
  return (
    <div className={styles['security-service-page']} dir={direction} lang={lang}>
      <ServicesHeader />
      <main>
        {/* Hero Section */}
        <div className={styles.container}>
          <section className={styles['security-hero']}>
            {/* Floating Background Icons */}
            <div className={styles['floating-bg-icons']}>
              {floatingBgIcons.map((icon, index) => (
                <div key={index} className={styles['floating-icon']}>
                  {icon}
                </div>
              ))}
            </div>

            <h1>
              <FaShieldAlt />
              {t('services.security.title')}
            </h1>
            <p>
              {t('services.security.description1')}<br/>
              {t('services.security.description2')}
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
        <div className=/*{styles.container}*/ " fixed scale-300 absolute -left-7 top-1/3  opacity-35 ">
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
            <h2 className={styles['section-title']}>{t('services.security.ourServices')}</h2>
            <div className={styles['security-cards']}>
              {serviceCards.map((card, idx) => (
                <div className={`${styles['security-card']} ${styles['animate-fade-in-up']}`} key={idx} tabIndex={0}>
                  {card.icon}
                  <div className={styles['security-card-title']}>{t(`services.security.cards.${card.key}.title`)}</div>
                  <div className={styles['security-card-desc']}>{t(`services.security.cards.${card.key}.desc`)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>{t('services.security.whyUs')}</h2>
            <div className={styles['security-highlights']}>
              {highlights.map((item, idx) => (
                <div className={`${styles['security-highlight']} ${styles['animate-fade-in-left']}`} key={idx}>
                  {item.icon}
                  <div className={styles['security-highlight-content']}>
                    <div className={styles['security-highlight-title']}>{t(`services.security.highlights.${item.key}.title`)}</div>
                    <div className={styles['security-highlight-desc']}>{t(`services.security.highlights.${item.key}.desc`)}</div>
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
              {t('services.security.cta')}
            </div>
            <Link to="/#contact" className={styles['cta-button']}>
              {t('services.security.ctaBtn')}
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityService;
