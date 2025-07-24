// src\components\Hero\Hero.jsx
import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import LogoPartsExplosion from './LogoPartsExplosion';
import InteractiveLogoExplosion from './InteractiveLogoExplosion';
import { useLanguage } from '../../contexts/LanguageContext';
import SequentialTypewriter from './SequentialTypewriter';
import LogoParts from './LogoParts'; // استورد LogoParts


// import SimpleLanyard from './SimpleLanyard.jsx';
// Interactive 3D Tech Scene Component
const Interactive3DTechScene = () => {
  const sceneRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  // Mouse move handler
  const handleMouseMove = (e) => {
    if (!sceneRef.current) return;

    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      setRotation(prev => ({
        x: prev.x - deltaY * 0.5,
        y: prev.y + deltaX * 0.5
      }));

      setLastMousePos({ x: e.clientX, y: e.clientY });
    } else if (isHovering) {
      const rect = sceneRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);

      setRotation({
        x: y * -15,
        y: x * 15
      });
    }
  };

  // Mouse down handler
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  // Mouse up handler
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse enter handler
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsDragging(false);
    setRotation({ x: 0, y: 0 });
  };

  // Wheel handler for zoom
  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale(prev => Math.max(0.5, Math.min(2, prev + delta)));
  };

  // Double click to reset
  const handleDoubleClick = () => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
  };

  // Global mouse events
  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e) => {
      if (isDragging) {
        handleMouseMove(e);
      }
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, lastMousePos]);

  return (
    <div
      className="tech-animation-container"
      ref={sceneRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onDoubleClick={handleDoubleClick}
    >

      <div
        className={`tech-scene ${isHovering ? 'mouse-active' : ''} ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          cursor: isDragging ? 'grabbing' : isHovering ? 'grab' : 'default'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={!isDragging ? handleMouseMove : undefined}
      >


      </div>
    </div>
  );
};

// Simple Ripple Background Component
const RippleBackground = () => {
  const [ripples, setRipples] = React.useState([]);
  const containerRef = React.useRef(null);

  // Handle click to create ripple
  React.useEffect(() => {
    const handleMouseClick = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple = {
          id: Date.now(),
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        };
        setRipples(prev => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
        }, 1500);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('click', handleMouseClick);
    }

    return () => {
      if (container) {
        container.removeEventListener('click', handleMouseClick);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="ripple-background">
      {/* Simple Wave Pattern */}
      <div className="wave-pattern">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>

      {/* Click Ripples */}
      <div className="dynamic-ripples">
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="click-ripple"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`
            }}
          />
        ))}
      </div>

      {/* Simple Floating Particles */}
      <div className="simple-particles">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="simple-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="hero-section" id='hero'>
      <div className="hero-background">
        <RippleBackground />

        <div className="hero-overlay"></div>
        <div className="hero-particles ">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}></div>
          ))}
        </div>
      </div>



      <div className="hero-container">
        <div className="hero-content">
          {/* Logo explosion effect */}
          <div className="hero-visual">
            <InteractiveLogoExplosion size={300} />
          </div>
          <div className="hero-text">
            <h1 className="hero-title" style={{ position: 'relative' }}>
              {/* Ghost block for each line to reserve max width/height */}
              <div aria-hidden="true" style={{
                visibility: 'hidden',
                height: 0,
                overflow: 'visible',
                position: 'absolute',
                pointerEvents: 'none',
                zIndex: -1,
                whiteSpace: 'pre',
                fontWeight: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                gap: 'var(--spacing-sm)'
              }}>
                <span className="title-line">{[t('hero.welcome'), t('hero.company'), t('hero.subtitle')].reduce((a, b) => a.length > b.length ? a : b)}</span>
                <span className="title-highlight">{[t('hero.welcome'), t('hero.company'), t('hero.subtitle')].reduce((a, b) => a.length > b.length ? a : b)}</span>
                <span className="title-line">{[t('hero.welcome'), t('hero.company'), t('hero.subtitle')].reduce((a, b) => a.length > b.length ? a : b)}</span>
              </div>
              <SequentialTypewriter
                texts={[t('hero.welcome'), t('hero.company'), t('hero.subtitle')]}
                typingSpeed={70}
                deletingSpeed={40}
                lineDelay={400}
                deletingLineDelay={250}
                className="hero-typewriter-title"
                lineClassNames={["title-line", "title-line mct-solutions", "title-line"]}
              />
            </h1>

            <p className="hero-description" data-aos="fade-left">
              {t('hero.description')}
            </p>

            {/* <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">مشروع مكتمل</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">عميل راضي</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">سنوات خبرة</span>
              </div>
            </div> */}

            <div className="hero-buttons" data-aos="flip-up" data-aos-delay="200">
              <button className="btn-primary" onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                <span>{t('hero.cta')}</span>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </button>
              <button className="btn-secondary" onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                <span>{t('hero.learnMore')}</span>
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Interactive 3D Tech Scene */}
          {/* <div className="hero-visual">
            <Interactive3DTechScene />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
