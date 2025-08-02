// src\pages\Contact\Contact.jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../../contexts/LanguageContext';
import '../Home/Home.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = () => {
  const { t, lang } = useLanguage();
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="contact-section" id="contact">
          <div className="container">
            <HeaderSection title={t('contact.title')} />
            <div className="section-description">
              <p>{t('contact.description')}</p>
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
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faPhoneAlt} style={{ color: 'var(--color-primary)' }} size="lg" />
                  </div>
                  <div className="contact-details ">
                    <h4>{t('contact.phone')}</h4>
                    <p dir="ltr" style={{direction: 'ltr', unicodeBidi: 'isolate'}}>+963 951 721 454</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">
                    <FontAwesomeIcon icon={faEnvelope} style={{ color: 'var(--color-primary)' }} size="lg" />
                  </div>
                  <div className="contact-details">
                    <h4>{t('contact.email')}</h4>
                    <p>info@m4ct.com</p>
                    <p>support@m4ct.com</p>
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

export default Contact;
