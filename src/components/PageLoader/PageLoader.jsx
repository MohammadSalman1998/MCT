// src\components\PageLoader\PageLoader.jsx
import React from 'react';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <div className="page-loader" dir='rtl'>
      <div className="loader-container">
        {/* Background Animation */}
        <div className="loader-bg-animation">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-circle circle-4"></div>
        </div>

        {/* Main Loading Content */}
        <div className="loader-content">
          {/* Logo Container */}
          <div className="logo-container">
            <div className="logo-wrapper">
              <img 
                src="/logo/logo-10.png" 
                alt="MCT Logo" 
                className="loader-logo"
              />
              {/* <div className="logo-glow"></div> */}
              <div className="logo-pulse"></div>
            </div>
          </div>

          {/* Company Name */}
          <div className="company-name">
            <span className="company-letter">T</span>
            <span className="company-letter">C</span>
            <span className="company-letter">M</span>
          </div>

          {/* Loading Text */}
          {/* <div className="loading-text">
            <span className="loading-message">جاري التحميل</span>
            <div className="loading-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div> */}

          {/* Progress Bar */}
          {/* <div className="progress-container">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">يرجى الانتظار...</div>
          </div> */}
        </div>

        {/* Bottom Text */}
        <div className="loader-footer">
          <p>شركة MCT للحلول التقنية المتقدمة</p>
          <div className="footer-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
