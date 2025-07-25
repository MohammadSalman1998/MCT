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
import SmoothCarousel from '../../components/PortfolioSlider/SmoothCarousel';

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

// Rotating circle icons
// const rotatingIcons = [
//   <SiAdobephotoshop key="palette" size={25} />,
//   <SiAdobeindesign key="vector" size={25} />,
//   <SiFigma key="mobile" size={25} />,
//   <FaCube key="desktop" size={25} />,
//   <FaDraftingCompass key="idea" size={25} />,
//   <FaLayerGroup key="idea" size={25} />
// ];

// أيقونة فيغما مخصصة بالألوان المتدرجة
const FigmaColoredIcon = ({ size = 25 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    {/* المستطيل الأحمر - أعلى يسار */}
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" fill="#F24E1E" />
    
    {/* المستطيل البرتقالي - أعلى يمين */}
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" fill="#FF7262" />
    
    {/* الدائرة الزرقاء - وسط يمين */}
    <circle cx="15.5" cy="12.5" r="3.5" fill="#1ABCFE" />
    
    {/* المستطيل الأخضر - أسفل يسار */}
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" fill="#0ACF83" />
    
    {/* المستطيل البنفسجي - وسط يسار */}
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" fill="#A259FF" />
  </svg>
);

const rotatingIcons = [
  <SiAdobephotoshop key="photoshop" size={25} style={{color: '#31A8FF'}} />,
  <SiAdobeindesign key="indesign" size={25} style={{color: '#FF3366'}} />,
  <FigmaColoredIcon key="figma" size={25} />,
  <FaCube key="cube" size={25} style={{color: '#FF6B35'}} />,
  <FaDraftingCompass key="compass" size={25} style={{color: '#4ECDC4'}} />,
  <FaLayerGroup key="layers" size={25} style={{color: '#9B59B6'}} />
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
            {/* <PortfolioSlider portfolioItems={designPortfolioItems} /> */}
            <SmoothCarousel images={designPortfolioItems} />
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
            <a href="/#contact" className={styles['cta-button']}>
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
