// src\components\Button\Button.jsx
import React, { isValidElement, cloneElement } from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  type = 'button',
  className = '',
  icon,
  fullWidth = false
}) => {
  const buttonClasses = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? 'btn-full-width' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && (
        <span className="btn-icon">
          {isValidElement(icon) && icon.type && icon.type.displayName === 'FontAwesomeIcon'
            ? cloneElement(icon, { style: { color: 'var(--color-primary)' } })
            : icon}
        </span>
      )}
      <span className="btn-text">{children}</span>
    </button>
  );
};

export default Button; 