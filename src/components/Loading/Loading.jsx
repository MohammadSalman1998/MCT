// src\components\Loading\Loading.jsx
import React from 'react';
import './Loading.css';

const Loading = ({ 
  type = 'spinner', 
  size = 'medium', 
  color = 'primary',
  text = 'جاري التحميل...',
  fullScreen = false 
}) => {
  const loadingClasses = [
    'loading',
    `loading-${type}`,
    `loading-${size}`,
    `loading-${color}`,
    fullScreen ? 'loading-fullscreen' : ''
  ].filter(Boolean).join(' ');

  const renderSpinner = () => (
    <div className="loading-spinner">
      <div className="spinner-ring"></div>
    </div>
  );

  const renderDots = () => (
    <div className="loading-dots">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );

  const renderPulse = () => (
    <div className="loading-pulse">
      <div className="pulse-circle"></div>
    </div>
  );

  const renderBars = () => (
    <div className="loading-bars">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );

  const renderLoader = () => {
    switch (type) {
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      case 'bars':
        return renderBars();
      default:
        return renderSpinner();
    }
  };

  if (fullScreen) {
    return (
      <div className="loading-fullscreen-overlay">
        <div className={loadingClasses}>
          {renderLoader()}
          {text && <div className="loading-text">{text}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className={loadingClasses}>
      {renderLoader()}
      {text && <div className="loading-text">{text}</div>}
    </div>
  );
};

export default Loading; 