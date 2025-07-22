// src/pages/Services/DesignService.jsx
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ServicesHeader from '../../components/Header/ServicesHeader';
import Footer from '../../components/Footer/Footer';
import styles from './DesignService.module.css';
import { FaPalette, FaPaintBrush, FaVectorSquare, FaMobileAlt, FaDesktop, FaLightbulb, FaRegGem, FaIdBadge, FaFileImage, FaCube, FaBuilding, FaCubes, FaDraftingCompass, FaLayerGroup } from 'react-icons/fa';
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeindesign, SiFigma } from 'react-icons/si';
import PortfolioSlider from '../../components/PortfolioSlider/PortfolioSlider';
import { designPortfolioItems } from '../../data/designPortfolioData';

const techIcons = [
  <SiAdobephotoshop key="photoshop" title="Adobe Photoshop" className={styles['tech-icon']} />,
  <SiAdobeillustrator key="illustrator" title="Adobe Illustrator" className={styles['tech-icon']} />,
  <SiAdobeindesign key="indesign" title="Adobe InDesign" className={styles['tech-icon']} />,
  <SiFigma key="figma" title="Figma" className={styles['tech-icon']} />,
  <FaCube key="cube" title="3D Cube" className={styles['tech-icon']} />,
  <FaCubes key="cubes" title="3D Cubes" className={styles['tech-icon']} />,
  <FaDraftingCompass key="compass" title="Drafting Compass" className={styles['tech-icon']} />,
  <FaLayerGroup key="layergroup" title="Layer Group" className={styles['tech-icon']} />,
];

const floatingBgIcons = [
  <FaPalette key="palette" />, 
  <FaPaintBrush key="brush" />, 
  <FaVectorSquare key="vector" />,
  <FaMobileAlt key="mobile" />,
  <FaDesktop key="desktop" />,
  <FaLightbulb key="idea" />
];

const serviceCards = [
  { key: 'logo', icon: <FaRegGem className={styles['software-card-icon']} /> },
  { key: 'branding', icon: <FaIdBadge className={styles['software-card-icon']} /> },
  { key: 'poster', icon: <FaFileImage className={styles['software-card-icon']} /> },
  { key: 'product3d', icon: <FaCube className={styles['software-card-icon']} /> },
  { key: 'arch3d', icon: <FaBuilding className={styles['software-card-icon']} /> },
];

const highlights = [
  { key: 'creativity', icon: <FaLightbulb className={styles['software-highlight-icon']} /> },
  { key: 'quality', icon: <FaPalette className={styles['software-highlight-icon']} /> },
  { key: 'usability', icon: <FaVectorSquare className={styles['software-highlight-icon']} /> },
  { key: 'support', icon: <FaMobileAlt className={styles['software-highlight-icon']} /> }
];

const DesignService = () => {
  const { t, lang, direction } = useLanguage();
  return (
    <div className={styles['software-service-page']} dir={direction} lang={lang}>
      <ServicesHeader />
      <main>
        <div className={styles.container}>
          <section className={styles['software-hero']}>
            <div className={styles['floating-bg-icons']}>
              {floatingBgIcons.map((icon, index) => (
                <div key={index} className={styles['floating-icon']}>
                  {icon}
                </div>
              ))}
            </div>

            <h1>
              <FaPalette />
              {t('services.design.title')}
            </h1>
            <p>
              {(lang && lang.startsWith('ar')) || direction === 'rtl'
                ? 'نقدم خدمات تصميم احترافية تشمل تصميم الشعارات، الهوية البصرية، البوسترات الإعلانية، بالإضافة إلى تصميم ورسم ثلاثي الأبعاد للمنتجات والمشاريع المعمارية.'
                : 'We offer professional design services including logo design, visual identity, advertising posters, as well as 3D modeling and rendering for products and architectural projects.'}
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

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>{t('services.design.ourServices')}</h2>
            <div className={styles['software-cards']}>
              {serviceCards.map((card, idx) => (
                <div className={`${styles['software-card']} ${styles['animate-fade-in-up']}`} key={idx} tabIndex={0}>
                  {card.icon}
                  <div className={styles['software-card-title']}>{t(`services.design.cards.${card.key}.title`)}</div>
                  <div className={styles['software-card-desc']}>{t(`services.design.cards.${card.key}.desc`)}</div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.container}>
          <section className={styles['portfolio-section']}>
            <h2 className={styles['section-title']}>{t('services.design.portfolio')}</h2>
            <PortfolioSlider portfolioItems={designPortfolioItems} />
          </section>
        </div>

        <div className={styles.container}>
          <section className={styles.section}>
            <h2 className={styles['section-title']}>{t('services.design.whyUs')}</h2>
            <div className={styles['software-highlights']}>
              {highlights.map((item, idx) => (
                <div className={`${styles['software-highlight']} ${styles['animate-fade-in-left']}`} key={idx}>
                  {item.icon}
                  <div className={styles['software-highlight-content']}>
                    <div className={styles['software-highlight-title']}>{t(`services.design.highlights.${item.key}.title`)}</div>
                    <div className={styles['software-highlight-desc']}>{t(`services.design.highlights.${item.key}.desc`)}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className={styles.container}>
          <section className={styles['cta-section']}>
            <div className={styles['cta-title']}>
              {t('services.design.cta')}
            </div>
            <a href="/contact" className={styles['cta-button']}>
              {t('services.design.ctaBtn')}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DesignService; 
 