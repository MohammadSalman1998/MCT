import React from 'react';
import './LogoParts.css';

// أسماء الصور حسب ترتيب التركيب، عدلها إذا كانت الترتيب مختلف
// إعدادات كل جزء: top/left/width/height/rotate (بالنسبة المئوية أو px)
const parts = [
  { file: '01.png', style: { top: -200, left: 100, width: '100%', height: '100%', transform: 'rotate(2deg)', zIndex: 1 } },
  { file: '02.png', style: { top: -25, left: 100, width: '100%', height: '100%', transform: 'none', zIndex: 2 } },
  { file: '03.png', style: { top: 120, left: 40, width: '100%', height: '100%', transform: 'rotate(-33deg)', zIndex: 3 } },
  { file: '04.png', style: { top: 0, left: -150, width: '100%', height: '100%', transform: 'rotate(40deg)', zIndex: 4 } },
  // { file: '05.png', style: { top: 100, left: 0, width: '100%', height: '100%', transform: 'none', zIndex: 5 } },
  // { file: '06.png', style: { top: 0, left: -100, width: '100%', height: '100%', transform: 'none', zIndex: 6 } },
  // { file: '07.png', style: { top: 0, left: 0, width: '100%', height: '100%', transform: 'none', zIndex: 7 } },
];

export default function LogoParts({ size = '100%', className = '' }) {
  return (
    <div
      className={`logo-parts-container ${className}`}
      style={{ width: size, height: size, position: 'relative' }}
    >
      {parts.map((part, idx) => (
        <img
          key={part.file}
          src={`/partsOfLogo/${part.file}`}
          alt={`Logo part ${idx + 1}`}
          className="logo-part-img"
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            userSelect: 'none',
            ...part.style,
          }}
        />
      ))}
    </div>
  );
}

