// src\pages\Portfolio\Portfolio.jsx
import React from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import PortfolioSlider from '../../components/PortfolioSlider/PortfolioSlider';
import { portfolioItems } from '../../data/portfolioData';
import './Portfolio.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section className="portfolio-section">
      <div className="container">
        <HeaderSection title={t('portfolio.title')} />

        <div className="section-description">
          <p>
            {t('portfolio.description')}
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="portfolio-carousel-wrapper">
          <PortfolioSlider portfolioItems={portfolioItems} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;