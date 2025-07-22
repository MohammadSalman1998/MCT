// src\components\Card\Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  className = '',
  onClick,
  hoverable = false,
  elevated = false,
  bordered = true
}) => {
  const cardClasses = [
    'card',
    `card-${variant}`,
    hoverable ? 'card-hoverable' : '',
    elevated ? 'card-elevated' : '',
    bordered ? 'card-bordered' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card; 