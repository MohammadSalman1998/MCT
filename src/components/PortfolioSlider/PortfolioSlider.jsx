// src\components\PortfolioSlider\PortfolioSlider.jsx
import React, { useState, useEffect } from 'react';
import './PortfolioSlider.css';

const PortfolioSlider = ({ portfolioItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(false); // لم يعد مستخدماً

  // Auto-play functionality
  useEffect(() => {
    if (portfolioItems.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % portfolioItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [portfolioItems.length]);

  const goToSlide = (index) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  };

  // Mouse drag navigation
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const handleMouseDown = (e) => {
    // فقط الزر الرئيسي للماوس
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.clientX);
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startX;
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const threshold = 50;
    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        setCurrentIndex(prev => (prev - 1 + portfolioItems.length) % portfolioItems.length);
      } else {
        setCurrentIndex(prev => (prev + 1) % portfolioItems.length);
      }
    }
    setIsDragging(false);
    setStartX(0);
    setDragDistance(0);
    document.body.style.userSelect = '';
  };

  if (!portfolioItems || portfolioItems.length === 0) {
    return null;
  }

  const getCardStyle = (index) => {
    const total = portfolioItems.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const transition = 'all 2.5s cubic-bezier(0.25, 1.25, 0.45, 0.94)';
    if (index === currentIndex) {
      return {
        transform: 'scale(1)',
        width: '60%',
        zIndex: 10,
        opacity: 1,
        transition
      };
    } else if (index === leftIndex) {
      return {
        transform: 'scale(0.96)',
        width: '40%',
        zIndex: 5,
        opacity: 1,
        transition
      };
    } else {
      return {
        transform: 'scale(0.6)',
        width: '0%',
        zIndex: 1,
        opacity: 0,
        transition
      };
    }
  };

  return (
    <div
      className="portfolio-slider card-stack-carousel"
      onMouseEnter={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      <div className="slider-container">
        <div className="cards-stack">
          {(() => {
            const total = portfolioItems.length;
            const leftIndex = (currentIndex - 1 + total) % total;
            return [
              <div
                key={portfolioItems[leftIndex].id}
                className="stack-card prev"
                style={getCardStyle(leftIndex)}
                onClick={() => goToSlide(leftIndex)}
              >
                <div className="card-image">
                  <img src={portfolioItems[leftIndex].image} alt={portfolioItems[leftIndex].title} />
                </div>
              </div>,
              <div
                key={portfolioItems[currentIndex].id}
                className="stack-card active"
                style={getCardStyle(currentIndex)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <div className="card-image">
                  <img src={portfolioItems[currentIndex].image} alt={portfolioItems[currentIndex].title} />
                </div>
              </div>
            ];
          })()}
        </div>
        <div className="slider-dots">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
