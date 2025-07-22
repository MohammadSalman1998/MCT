// src\pages\Services\SupportService.jsx
import { useLanguage } from '../../contexts/LanguageContext';
import ServicesHeader from '../../components/Header/ServicesHeader';
import Footer from '../../components/Footer/Footer';
import styles from './SupportService.module.css';
import { FaTools, FaNetworkWired, FaDatabase, FaCloud, FaServer, FaCog, FaChartLine, FaUsers, FaHeadset, FaWrench, FaClipboardCheck, FaEye, FaSave, FaGraduationCap, FaFileAlt } from 'react-icons/fa';
import { ToolsDuotone, NetworkWiredDuotone, CogDuotone, SupportDuotone, ServerDuotone, ChartLineDuotone } from '../../components/Icons/SupportDuotoneIcons';

import { MdSupport, MdBuild, MdUpdate } from 'react-icons/md';
import { BiShield, BiAnalyse } from 'react-icons/bi';
import { AiOutlineTool } from 'react-icons/ai';

// Service cards data
const serviceCards = [
  {
    icon: <FaClipboardCheck className={styles['support-card-icon']} />, key: 'preventive',
  },
  {
    icon: <FaWrench className={styles['support-card-icon']} />, key: 'repair',
  },
  {
    icon: <MdUpdate className={styles['support-card-icon']} />, key: 'updates',
  },
  {
    icon: <FaEye className={styles['support-card-icon']} />, key: 'monitoring',
  },
  {
    icon: <FaSave className={styles['support-card-icon']} />, key: 'backup',
  },
  {
    icon: <FaGraduationCap className={styles['support-card-icon']} />, key: 'training',
  },
  {
    icon: <FaFileAlt className={styles['support-card-icon']} />, key: 'reports',
  },
];

// Highlights data
const highlights = [
  {
    icon: <FaUsers className={styles['support-highlight-icon']} />, key: 'expertise',
  },
  {
    icon: <FaHeadset className={styles['support-highlight-icon']} />, key: 'immediate',
  },
  {
    icon: <AiOutlineTool className={styles['support-highlight-icon']} />, key: 'integrated',
  },
  {
    icon: <MdBuild className={styles['support-highlight-icon']} />, key: 'advanced',
  },
  {
    icon: <BiAnalyse className={styles['support-highlight-icon']} />, key: 'competitive',
  },
  {
    icon: <BiShield className={styles['support-highlight-icon']} />, key: 'quality',
  },
];

// Floating background icons for hero section
const floatingBgIcons = [
  <FaTools key="tools1" />, <FaNetworkWired key="network1" />, <FaCog key="cog1" />, <FaServer key="server1" />,
  <MdSupport key="support1" />, <FaDatabase key="db1" />, <FaCloud key="cloud1" />, <FaChartLine key="chart1" />
];

const techIcons = [
  <FaTools key="tools" title="Maintenance Tools" />, <FaWrench key="wrench" title="Repair Services" />, <FaCog key="settings" title="System Configuration" />,
  <FaHeadset key="support" title="Technical Support" />, <FaChartLine key="monitoring" title="Performance Monitoring" />, <MdUpdate key="updates" title="System Updates" />,
  <FaSave key="backup" title="Backup Solutions" />, <FaGraduationCap key="training" title="Staff Training" />
];

// Rotating circle icons
const rotatingIcons = [
  <ToolsDuotone key="tools" size={32} />, <NetworkWiredDuotone key="network" size={32} />, <CogDuotone key="cog" size={32} />,
  <SupportDuotone key="support" size={32} />, <ServerDuotone key="server" size={32} />, <ChartLineDuotone key="chart" size={32} />
];

const SupportService = () => {
  const { t, lang, direction } = useLanguage();
  const isArabic = lang === 'ar';
  return (
    <div className={styles['support-service-page']} dir={direction} lang={lang}>
      <ServicesHeader />
      <main>
        {/* Hero Section */}
        <div className={styles.container}>
          <section className={styles['support-hero']}>
            {/* Floating Background Icons */}
            <div className={styles['floating-bg-icons']}>
              {floatingBgIcons.map((icon, index) => (
                <div key={index} className={styles['floating-icon']}>
                  {icon}
                </div>
              ))}
            </div>

            <h1>
              <FaTools />
              {t('services.support.title')}
            </h1>
            <p>
              {t('services.support.description1')}<br/>
              {t('services.support.description2')}
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
            <h2 className={styles['section-title']}>
              {t('services.support.servicesTitle')}
            </h2>
            <div className={styles['support-cards']}>
              {serviceCards.map((card, index) => (
                <div key={index} className={`${styles['support-card']} ${styles['animate-fade-in-up']}`}>
                  {card.icon}
                  <h3 className={styles['support-card-title']}>
                    {t(`services.support.services.${card.key}.title`)}
                  </h3>
                  <p className={styles['support-card-desc']}>
                    {t(`services.support.services.${card.key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Highlights Section */}
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>
              {t('services.support.highlightsTitle')}
            </h2>
            <div className={styles['support-highlights']}>
              {highlights.map((highlight, index) => (
                <div key={index} className={`${styles['support-highlight']} ${styles['animate-fade-in-left']}`}>
                  {highlight.icon}
                  <div className={styles['support-highlight-content']}>
                    <h3 className={styles['support-highlight-title']}>
                      {t(`services.support.highlights.${highlight.key}.title`)}
                    </h3>
                    <p className={styles['support-highlight-desc']}>
                      {t(`services.support.highlights.${highlight.key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className={styles.container}>
          <section className={styles['cta-section']}>
            <h2 className={styles['cta-title']}>
              {t('services.support.cta.title')}
            </h2>
            <a href="/#contact" className={styles['cta-button']}>
              {t('services.support.cta.button')}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SupportService;
