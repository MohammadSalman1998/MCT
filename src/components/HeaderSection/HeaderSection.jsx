import React from 'react';
import './HeaderSection.css';

const HeaderSection = ({ title, subtitle, align = 'center' }) => (
  <div className={`header-section header-section--${align}`}>
    <h2 className="header-section-title">{title}</h2>
    <div className="header-section-underline"></div>
    {subtitle && <p className="header-section-subtitle">{subtitle}</p>}
  </div>
);

export default HeaderSection; 