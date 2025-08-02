// src\pages\Home\Home.jsx
import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faShieldAlt, faNetworkWired, faMapMarkerAlt, faPhoneAlt, faEnvelope, faTools, faPalette } from '@fortawesome/free-solid-svg-icons';
import ContactForm from '../../components/ContactForm/ContactForm';
import Portfolio from '../Portfolio/Portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    // Scroll to hash if present on location change
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const { t, lang } = useLanguage();
  const isArabic = lang === 'ar';
  return (
    <div className="home-page">
      <AnimatedBackground />
      <Header />
      <main className="main-content">
        <div >
          <Hero />
        </div>

        {/* Portfolio Section */}
        <section id="portfolio" >
          <Portfolio />
        </section>

        {/* Services Section */}
        <section className="services-section" id="services">
          <div className="container">
            <HeaderSection title={t('services.title')} />

            <div className="section-description">
              <p>
                {t('services.description')}
              </p>
            </div>

            <div className="services-grid">
              {[
                {
                  key: 'software',
                  icon: faCode,
                },
                {
                  key: 'network',
                  icon: faNetworkWired,
                },
                {
                  key: 'security',
                  icon: faShieldAlt,
                },
                {
                  key: 'support',
                  icon: faTools,
                },
                {
                  key: 'design',
                  icon: faPalette,
                }
              ].map((service, idx) => {
                const handleDetails = () => {
                  navigate(`/services/${service.key}`);
                };
                return (
                  <button
                    type="button"
                    className="service-card"
                    key={service.key}
                    data-aos={['fade-right', 'fade-up', 'fade-left', 'zoom-in'][idx % 4]}
                    data-aos-delay={idx * 100}
                    onClick={handleDetails}
                    tabIndex={0}
                    aria-label={t(`services.${service.key}.title`)}
                  >
                    <div className="service-icon">
                      <FontAwesomeIcon icon={service.icon} style={{ color: 'var(--primary-300)' }} size="2x" />
                    </div>
                    <h3 className="service-title">{t(`services.${service.key}.title`)}</h3>
                    <p className="service-description">{t(`services.${service.key}.description`)}</p>
                  </button>
                );
              })}

            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="about" >
          <div className="container">
            <div className="about-content about-content-centered">
              {isArabic ? (
                <>
                  <div className="about-visual">
                    <div className="about-image-container">
                      <img src="/logo/logo-10.png" alt="MCT Team" />
                      <div className="about-glow"></div>
                    </div>
                    <div className="floating-features">
                      <div className="floating-feature feature-1" data-aos="fade-up" data-aos-delay="0">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faCode} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.fastDevelopment')}</div>
                      </div>
                      <div className="floating-feature feature-2" data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.highSecurity')}</div>
                      </div>
                      <div className="floating-feature feature-3" data-aos="zoom-in" data-aos-delay="200">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faNetworkWired} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.innovativeSolutions')}</div>
                      </div>
                      <div className="floating-feature feature-4" data-aos="flip-left" data-aos-delay="300">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faMobileAlt} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.modernTechnologies')}</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="about-text">
                    <HeaderSection title={t('about.title')} align="right" />
                    <p className="about-description">
                      {t('about.description')}
                    </p>
                    <div className="about-stats">
                      <div className="stat">
                        <span className="stat-number">5+</span>
                        <span className="stat-label">{t('about.experience')}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">500+</span>
                        <span className="stat-label">{t('about.projects')}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">{t('about.clients')}</span>
                      </div>
                    </div>
                  </div> */}
                </>
              ) : (
                <>
                  <div className="about-text">
                    <HeaderSection title={t('about.title')} align="right" />
                    <p className="about-description">
                      {t('about.description')}
                    </p>
                    <div className="about-stats">
                      <div className="stat">
                        <span className="text-2xl font-bold ">{t('about.features.highSecurity')}</span>
                        {/* <span className="stat-label">{t('about.experience')}</span> */}
                      </div>
                      <div className="stat">
                        <span className="text-2xl font-bold ">{t('about.features.innovativeSolutions')}</span>
                        {/* <span className="stat-label">{t('about.projects')}</span> */}
                      </div>
                      <div className="stat">
                        <span className="text-2xl font-bold ">{t('about.features.fastDevelopment')}</span>
                        {/* <span className="stat-label">{t('about.clients')}</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="about-visual">
                    <div className="about-image-container">
                      <img src="/logo/logo-10.png" alt="MCT Team" />
                      <div className="about-glow"></div>
                    </div>
                    {/* <div className="floating-features">
                      <div className="floating-feature feature-1" data-aos="fade-up" data-aos-delay="0">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faCode} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.fastDevelopment')}</div>
                      </div>
                      <div className="floating-feature feature-2" data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faShieldAlt} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.highSecurity')}</div>
                      </div>
                      <div className="floating-feature feature-3" data-aos="zoom-in" data-aos-delay="200">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faNetworkWired} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.innovativeSolutions')}</div>
                      </div>
                      <div className="floating-feature feature-4" data-aos="flip-left" data-aos-delay="300">
                        <div className="feature-icon">
                          <FontAwesomeIcon icon={faMobileAlt} style={{ color: 'var(--primary-300)' }} size="lg" />
                        </div>
                        <div className="feature-text">{t('about.features.modernTechnologies')}</div>
                      </div>
                    </div> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact" >
          <div className="container">
            <HeaderSection title={t('contact.title')} />

            <div className="section-description">
              <p>
                {t('contact.description')}
              </p>
            </div>

            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'var(--color-primary)' }} size="lg" />
                  </div>
                  <div className="contact-details">
                    <h4>{t('contact.address')}</h4>
                    <p>{t('contact.addressValue')}</p>
                  </div>
                </div>

                <a href="https://wa.me/+963951721454" target="_blank" rel="noopener noreferrer">
                  <div className="contact-item" data-aos="flip-up" data-aos-delay="100">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'var(--color-primary)' }} size="lg" />
                    </div>
                    <div className="contact-details ">
                      <h4>{t('contact.phone')}</h4>
                      <p dir="ltr" style={{ direction: 'ltr', unicodeBidi: 'isolate' }}>+963 951 721 454</p>
                    </div>
                  </div>
                </a>

                <div className="contact-item" data-aos="zoom-in-left" data-aos-delay="200">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'var(--color-primary)' }} size="lg" />
                  </div>
                  <div className="contact-details">
                    <h4>{t('contact.email')}</h4>
                    <a href="mailto:info@m4ct.com" className='footer-email-link'><p>info@m4ct.com</p></a>
                    <a href="mailto:support@m4ct.com" className='footer-email-link'><p>support@m4ct.com</p></a>
                    {/* <p>info@m4ct.com</p> */}
                    {/* <p>support@m4ct.com</p> */}
                  </div>
                </div>
              </div>

              {/* <ContactForm /> */}
            </div>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Home; 