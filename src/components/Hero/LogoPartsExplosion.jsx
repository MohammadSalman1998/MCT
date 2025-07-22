import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const PARTS = [
  '/partsOfLogo/01.png',
  '/partsOfLogo/02.png',
  '/partsOfLogo/03.png',
  '/partsOfLogo/04.png',
  '/partsOfLogo/05.png',
  '/partsOfLogo/06.png',
  '/partsOfLogo/07.png',
];

// مواضع كل جزء في حالة التجميع (بالنسبة لمركز اللوغو)
const ORIGINALS = [
  { x: -18, y: -38, r: 2 },    // 01.png
  { x: 10, y: -8, r: 0 },     // 02.png
  { x: -32, y: 32, r: -33 },  // 03.png
  { x: -60, y: 0, r: 40 },    // 04.png
  { x: 38, y: 24, r: 0 },     // 05.png
  { x: 24, y: -24, r: 0 },    // 06.png
  { x: 0, y: 0, r: 0 },       // 07.png (وسط الشعار)
];

// Spread positions for the explosion (relative to original)
const SPREADS = [
  { x: -110, y: -60 },
  { x: 90, y: -80 },
  { x: -120, y: 70 },
  { x: 0, y: 120 },
  { x: 120, y: 60 },
  { x: 80, y: 100 },
  { x: -80, y: 100 },
];

export default function LogoPartsExplosion({
  size = 220,
  duration = 1200,
  delay = 1400,
  repeat = true,
  forceExploded = false,
  forceReassemble = false,
}) {
  const [exploded, setExploded] = useState(false);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef();

  // إذا تم تمرير forceExploded، لا تفعل أي أنيميشن فقط اجعل exploded دائماً true
  useEffect(() => {
    if (forceExploded) return;
    setAnimating(true);
    setExploded(false);
    // Start explosion after mount
    timeoutRef.current = setTimeout(() => {
      setExploded(true);
      // Reassemble after duration
      setTimeout(() => {
        setExploded(false);
        if (repeat) {
          setTimeout(() => {
            setExploded(true);
            setTimeout(() => setExploded(false), duration);
          }, delay);
        }
      }, duration);
    }, 500);
    return () => clearTimeout(timeoutRef.current);
  }, [duration, delay, repeat, forceExploded]);

  // مصفوفة حالة لكل جزء
  const [explodedParts, setExplodedParts] = useState(Array(PARTS.length).fill(false));
  const timeoutsRef = useRef([]);

  // عند forceExploded: فعّل كل جزء بتسلسل زمني
  useEffect(() => {
    if (forceExploded) {
      timeoutsRef.current.forEach(clearTimeout);
      let isUnmounted = false;
      PARTS.forEach((_, i) => {
        timeoutsRef.current[i] = setTimeout(() => {
          if (!isUnmounted) setExplodedParts(prev => {
            const arr = [...prev]; arr[i] = true; return arr;
          });
        }, 120 + i * 110);
      });
      return () => {
        isUnmounted = true;
        timeoutsRef.current.forEach(clearTimeout);
      };
    }
  }, [forceExploded]);

  // عند forceReassemble: أعد كل جزء للتجميع بتسلسل عكسي
  useEffect(() => {
    if (!forceReassemble) return;
    timeoutsRef.current.forEach(clearTimeout);
    let isUnmounted = false;
    PARTS.forEach((_, idx) => {
      const i = PARTS.length - 1 - idx;
      timeoutsRef.current[i] = setTimeout(() => {
        if (!isUnmounted) setExplodedParts(prev => {
          const arr = [...prev]; arr[i] = false; return arr;
        });
      }, 80 + idx * 110);
    });
    return () => {
      isUnmounted = true;
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [forceReassemble]);

  // إذا لم يكن forceExploded ولا forceReassemble (أي الأنيميشن القديم)، أبقِ كل الأجزاء حسب exploded
  useEffect(() => {
    if (forceExploded || forceReassemble) return;
    setExplodedParts(Array(PARTS.length).fill(exploded));
  }, [exploded, forceExploded, forceReassemble]);

  // إذا لم يكن forceExploded (أي الأنيميشن القديم)، أبقِ كل الأجزاء حسب exploded
  useEffect(() => {
    if (forceExploded) return;
    setExplodedParts(Array(PARTS.length).fill(exploded));
  }, [exploded, forceExploded]);

  return (
    <div
      className="logo-explosion-container"
      style={{
        position: 'relative',
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        margin: '0 auto',
        zIndex: 2,
      }}
    >
      {PARTS.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`logo-part-${i+1}`}
          className="logo-explosion-part"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: size * 0.55,
            height: size * 0.55,
            maxWidth: 'none',
            maxHeight: 'none',
            transform: `translate(-50%, -50%) translate(${ORIGINALS[i].x}px, ${ORIGINALS[i].y}px) rotate(${ORIGINALS[i].r}deg) ` +
  (explodedParts[i]
    ? `translate(${SPREADS[i].x}px, ${SPREADS[i].y}px) scale(${0.8 + i*0.013})`
    : 'scale(1)'),
            transition: `transform 1700ms ${[
              'cubic-bezier(.22,1,.36,1)', // ناعم
              'cubic-bezier(.68,-0.55,.27,1.55)', // bounce
              'cubic-bezier(.77,0,.175,1)', // easeInOut
              'cubic-bezier(.6,-0.28,.74,.05)', // overshoot
              'cubic-bezier(.25,1,.5,1)', // pop
              'cubic-bezier(.42,0,.58,1)', // standard
              'cubic-bezier(.23,1,.32,1)', // عصرية
            ][i]}`,
            filter: explodedParts[i] ? 'brightness(1.13) drop-shadow(0 12px 32px rgba(0,0,0,0.18))' : 'none',
            opacity: 1,
            pointerEvents: 'none',
            zIndex: 10 + i,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
