// src\components\Footer\Footer.jsx
import React from 'react';
import './Footer.css';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faCode,
  faShieldAlt,
  faNetworkWired,
  faTools,
  faPalette
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-overlay"></div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
              <span className="footer-logo-text !text-3xl font-black">MCT</span>
              <img src="/logo/logo-10.png" alt="MCT Logo"  className="footer-logo-img" />
            </Link>
            <p className="footer-description">
              {t('footer.description')}
            </p>
            {/* <div className="social-links">
              <a href="#" className="social-link facebook" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-link twitter" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="social-link instagram" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-link github" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="social-link whatsapp" aria-label="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.quickLinks')}</h3>
            <ul className="footer-links">
              <li><Link to="/#home" className="footer-link">{t('nav.home')}</Link></li>
              <li><Link to="/#about" className="footer-link">{t('nav.about')}</Link></li>
              <li><Link to="/#services" className="footer-link">{t('nav.services')}</Link></li>
              <li><Link to="/#portfolio" className="footer-link">{t('nav.portfolio')}</Link></li>
              <li><Link to="/#contact" className="footer-link">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.ourServices')}</h3>
            <ul className="footer-links ">
              <li>
                {/* <a href="/services/software" className="footer-link"> */}

                <div className="footer-link">
                  <FontAwesomeIcon icon={faCode} className="footer-link-icon " />
                  {t('services.software.title')}
                  </div>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="/services/network" className="footer-link"> */}
                <div className="footer-link">

                  <FontAwesomeIcon icon={faNetworkWired} className="footer-link-icon" />
                  {t('services.network.title')}
                </div>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="/services/security" className="footer-link"> */}
                <div className="footer-link">

                  <FontAwesomeIcon icon={faShieldAlt} className="footer-link-icon " />
                  {t('services.security.title')}
                </div>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="/services/support" className="footer-link"> */}
                <div className="footer-link">

                  <FontAwesomeIcon icon={faTools} className="footer-link-icon " />
                  {t('services.support.title')}
                </div>
                {/* </a> */}
              </li>
              <li>
                {/* <a href="/services/design" className="footer-link"> */}
                <div className="footer-link !text-[15px]">

                  <FontAwesomeIcon icon={faPalette} className="footer-link-icon " />
                  {t('services.design.title')}
                </div>
                {/* </a> */}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t('footer.contactInfo')}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <span>{t('footer.damascusSyria')}</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </div>
                <span dir="ltr" className="footer-phone-ltr">+963 951 721 454</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span>info@m4ct.com <br /> support@m4ct.com</span>
                {/* <span></span> */}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        {/* <div className="newsletter-section">
          <div className="newsletter-content">
            <h3 className="newsletter-title">اشترك في النشرة الإخبارية</h3>
            <p className="newsletter-description">
              احصل على آخر الأخبار والتحديثات من فريق MCT
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <span>اشتراك</span>
                <FontAwesomeIcon icon={faChevronUp} style={{ color: 'var(--color-primary)' }} size="lg" />
              </button>
            </form>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 MCT. Mujadedoon for Creative Technology <br /> {t('footer.rights')}
            </p>
            {/* <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">{t('footer.privacyPolicy')}</a>
              <a href="#terms" className="footer-bottom-link">{t('footer.termsOfUse')}</a>
              <a href="#cookies" className="footer-bottom-link">{t('footer.cookies')}</a>
            </div> */}
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer; 