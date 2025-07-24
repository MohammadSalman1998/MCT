import React, { useState } from 'react';
import LogoPartsExplosion from './LogoPartsExplosion';
import './Hero.css';

export default function InteractiveLogoExplosion({
  size = 220,
  logoSrc = '/logo/logo-10.png',
}) {
  const [hovered, setHovered] = useState(false);
  const [showParts, setShowParts] = useState(false); // هل تظهر الأجزاء
  const [isReassembling, setIsReassembling] = useState(false); // هل نحن في مرحلة التجميع

  // عند الهوفر: أظهر الأجزاء فوراً
  // React.useEffect(() => {
  //   if (hovered) {
  //     setShowParts(false);
  //     setIsReassembling(false);
  //   } else if (showParts) {
  //     // عند إزالة الهوفر: أعد التجميع أولاً
  //     setIsReassembling(true);
  //     // مدة التجميع = عدد الأجزاء * تأخير كل جزء + مدة الحركة
  //     const total = 7 * 110 + 1700;
  //     const timeout = setTimeout(() => {
  //       setShowParts(false);
  //       setIsReassembling(false);
  //     }, total);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [hovered]);

  return (
    <div
      className="interactive-logo-explosion"
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: '0 auto',
      }}
      // onMouseEnter={() => setHovered(true)}
      // onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label="Animated company logo"
    >
      {/* Static logo */}
      <img
        src={logoSrc}
        alt="Company Logo"
        className="interactive-logo-static"
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: (!hovered && !showParts) ? 1 : 0,
          transition: 'opacity 0.33s cubic-bezier(.68,-0.55,.27,1.55)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
        draggable={false}
      />
      {/* Exploding parts logo */}
      <div
        style={{
          opacity: showParts ? 1 : 0,
          pointerEvents: showParts ? 'auto' : 'none',
          transition: 'opacity 0.33s cubic-bezier(.68,-0.55,.27,1.55)',
          position: 'absolute',
          left: 0,
          top: 0,
          width: size,
          height: size,
          zIndex: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* عرض الأجزاء: إما في وضع الانتشار أو التجميع حسب الحالة */}
        {showParts && <LogoPartsExplosion size={size} forceExploded={hovered ? true : false} forceReassemble={isReassembling} />}
      </div>
    </div>
  );
}
