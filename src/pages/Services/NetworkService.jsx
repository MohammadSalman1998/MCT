// src\pages\Services\NetworkService.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ServicesHeader from '../../components/Header/ServicesHeader';
import Footer from '../../components/Footer/Footer';
import styles from './NetworkingService.module.css';
import { FaNetworkWired, FaServer, FaWifi, FaShieldAlt, FaTools, FaChartLine, FaMoneyBillWave, FaHeadset, FaExpandArrowsAlt, FaDatabase, FaCloud } from 'react-icons/fa';
import { SiCisco, SiVmware, SiLinux, SiDocker, SiKubernetes, SiApache, SiNginx, SiMongodb } from 'react-icons/si';
import { CiscoDuotone, VmwareDuotone, LinuxDuotone, ServerDuotone, WifiDuotone, MikrotikDuotone } from '../../components/Icons/NetworkDuotoneIcons';
import MikrotikIcon from '../../components/Icons/MikrotikIcon';
import { FiSettings } from 'react-icons/fi';
import { BiAnalyse } from 'react-icons/bi';

const techIcons = [
  <SiCisco key="cisco" title="Cisco" className={styles['tech-icon']} />, <SiVmware key="vmware" title="VMware" className={styles['tech-icon']} />, <SiLinux key="linux" title="Linux" className={styles['tech-icon']} />,
  <SiDocker key="docker" title="Docker" className={styles['tech-icon']} />, <SiKubernetes key="kubernetes" title="Kubernetes" className={styles['tech-icon']} />,
   <SiApache key="apache" title="Apache" className={styles['tech-icon']} />,
  <SiNginx key="nginx" title="Nginx" className={styles['tech-icon']} />, 
  // <SiMongodb key="mongodb" title="MongoDB" className={styles['tech-icon']} />,
  <MikrotikIcon key="mikrotik" title="MikroTik" className={styles['tech-icon']} width={40} height={40} color="inherit" />
];

// Floating background icons for hero section
const floatingBgIcons = [
  <FaNetworkWired key="network" />, 
  <FaServer key="server" />, 
  <FaWifi key="wifi" />, 
  <MikrotikIcon key="mikrotik-floating" title="MikroTik" className={styles['floating-icon']} width={32} height={32} color="rgba(255,255,255,0.15)" />, 
  <FaDatabase key="database" />, 
  <FaCloud key="cloud" />
];

// Rotating circle icons
const rotatingIcons = [
  <CiscoDuotone key="cisco" size={40} />,
  <ServerDuotone key="server" size={40} />,
  <VmwareDuotone key="vmware" size={40} />,
  <WifiDuotone key="wifi" size={40} />,
  <LinuxDuotone key="linux" size={40} />,
  <MikrotikDuotone key="mikrotik-floating" width={40} height={40} />
];

const serviceCards = [
  { key: 'analysis', icon: <BiAnalyse className={styles['software-card-icon']} /> },
  { key: 'implementation', icon: <FiSettings className={styles['software-card-icon']} /> },
  { key: 'datacenter', icon: <FaServer className={styles['software-card-icon']} /> },
  { key: 'virtualization', icon: <FaCloud className={styles['software-card-icon']} /> },
  { key: 'maintenance', icon: <FaTools className={styles['software-card-icon']} /> },
  { key: 'wireless', icon: <FaWifi className={styles['software-card-icon']} /> }
];

const highlights = [
  { key: 'performance', icon: <FaChartLine className={styles['software-highlight-icon']} /> },
  { key: 'reliability', icon: <FaShieldAlt className={styles['software-highlight-icon']} /> },
  { key: 'security', icon: <FaShieldAlt className={styles['software-highlight-icon']} /> },
  { key: 'scalability', icon: <FaExpandArrowsAlt className={styles['software-highlight-icon']} /> },
  { key: 'support', icon: <FaHeadset className={styles['software-highlight-icon']} /> },
  { key: 'cost', icon: <FaMoneyBillWave className={styles['software-highlight-icon']} /> }
];

const NetworkService = () => {
  const { t, lang, direction } = useLanguage();
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
              <FaNetworkWired />
              {t('services.networking.title')}
            </h1>
            <p>
              {t('services.networking.description1')}<br/>
              {t('services.networking.description2')}
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
        <div className=/*{styles.container}*/ "fixed scale-300 absolute -left-7 top-1/3  opacity-35">
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
            <h2 className={styles['section-title']}>{t('services.networking.ourServices')}</h2>
            <div className={styles['software-cards']}>
              {serviceCards.map((card, idx) => (
                <div className={`${styles['software-card']} ${styles['animate-fade-in-up']}`} key={idx} tabIndex={0}>
                  {card.icon}
                  <div className={styles['software-card-title']}>{t(`services.networking.cards.${card.key}.title`)}</div>
                  <div className={styles['software-card-desc']}>{t(`services.networking.cards.${card.key}.desc`)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Why Choose Us Section */}
        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>{t('services.networking.whyUs')}</h2>
            <div className={styles['software-highlights']}>
              {highlights.map((item, idx) => (
                <div className={`${styles['software-highlight']} ${styles['animate-fade-in-left']}`} key={idx}>
                  {item.icon}
                  <div className={styles['software-highlight-content']}>
                    <div className={styles['software-highlight-title']}>{t(`services.networking.highlights.${item.key}.title`)}</div>
                    <div className={styles['software-highlight-desc']}>{t(`services.networking.highlights.${item.key}.desc`)}</div>
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
              {t('services.networking.cta')}
            </div>
            <a href="/contact" className={styles['cta-button']}>
              {t('services.networking.ctaBtn')}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NetworkService;
