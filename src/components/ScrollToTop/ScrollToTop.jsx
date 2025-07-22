// src\components\ScrollToTop\ScrollToTop.jsx
import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show button when we scroll past the hero section
        setShowScrollTop(scrollTop > heroBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`scroll-to-top-btn ${showScrollTop ? 'show' : ''}`} 
      onClick={scrollToTop}
      aria-label="العودة للأعلى"
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default ScrollToTop;
