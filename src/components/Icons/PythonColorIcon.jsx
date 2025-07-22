import React from 'react';

/**
 * PythonColorIcon renders the Python logo in its official two-tone (yellow/blue) split color style.
 * Accepts all SVG props and forwards them to the root SVG element.
 */
const PythonColorIcon = ({ width = 40, height = 40, style = {}, ...rest }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    {...rest}
  >
    <defs>
      <linearGradient id="python-split" x1="0" y1="0" x2="40" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3776AB"/>
        <stop offset="50%" stopColor="#3776AB"/>
        <stop offset="50%" stopColor="#FFD43B"/>
        <stop offset="100%" stopColor="#FFD43B"/>
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="40" height="40" rx="8" fill="url(#python-split)" />
    <path d="M20 6c-3.3 0-6 2.7-6 6v2h12V12c0-3.3-2.7-6-6-6zm-3 2a1 1 0 110 2 1 1 0 010-2zm-3 6v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h-2v2H12v-2h2zm2 10c0 3.3 2.7 6 6 6s6-2.7 6-6v-2H14v2zm3 6a1 1 0 100-2 1 1 0 000 2zm9-6v-2c0-1.1-.9-2-2-2H14c-1.1 0-2 .9-2 2v2h2v-2h12v2h-2z" fill="#fff"/>
  </svg>
);

export default PythonColorIcon;
