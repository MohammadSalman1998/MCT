import React, { useEffect, useState } from 'react';

/**
 * SequentialTypewriter
 * يظهر الأسطر واحدًا تلو الآخر بحركة كتابة، ثم يحذفها من الأسفل للأعلى
 * texts: array of strings
 * typingSpeed: ms per char
 * lineDelay: ms after each line is typed
 * deletingSpeed: ms per char when deleting
 * deletingLineDelay: ms after each line is deleted
 */
export default function SequentialTypewriter({
  texts = [],
  typingSpeed = 70,
  lineDelay = 400,
  deletingSpeed = 35,
  deletingLineDelay = 250,
  className = '',
  lineClassNames = [], // مصفوفة ستايلات لكل سطر
}) {
  // current phase: 'typing' | 'waiting' | 'deleting'
  const [phase, setPhase] = useState('typing');
  // كم حرف مكتوب من كل سطر
  const [charCounts, setCharCounts] = useState(Array(texts.length).fill(0));
  // أي سطر نكتب/نحذف فيه الآن
  const [activeLine, setActiveLine] = useState(0);
  // وميض المؤشر
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    // Blinking cursor
    const interval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!texts.length) return;
    if (phase === 'typing') {
      if (charCounts[activeLine] < texts[activeLine].length) {
        // اكتب حرف جديد في السطر الحالي
        const timeout = setTimeout(() => {
          setCharCounts(counts => {
            const next = [...counts];
            next[activeLine]++;
            return next;
          });
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else if (activeLine < texts.length - 1) {
        // انتقل للسطر التالي
        const timeout = setTimeout(() => setActiveLine(l => l + 1), lineDelay);
        return () => clearTimeout(timeout);
      } else {
        // كل الأسطر ظهرت بالكامل
        const timeout = setTimeout(() => {
          setPhase('waiting');
        }, 1200);
        return () => clearTimeout(timeout);
      }
    } else if (phase === 'waiting') {
      // انتظر قليلاً ثم ابدأ الحذف
      const timeout = setTimeout(() => {
        setPhase('deleting');
        setActiveLine(texts.length - 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else if (phase === 'deleting') {
      if (charCounts[activeLine] > 0) {
        // احذف حرف من السطر الحالي
        const timeout = setTimeout(() => {
          setCharCounts(counts => {
            const next = [...counts];
            next[activeLine]--;
            return next;
          });
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else if (activeLine > 0) {
        // انتقل للسطر الأعلى
        const timeout = setTimeout(() => setActiveLine(l => l - 1), deletingLineDelay);
        return () => clearTimeout(timeout);
      } else {
        // انتهى الحذف
        const timeout = setTimeout(() => {
          setPhase('typing');
          setCharCounts(Array(texts.length).fill(0));
          setActiveLine(0);
        }, 600);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, charCounts, activeLine, texts, typingSpeed, lineDelay, deletingSpeed, deletingLineDelay]);

  return (
    <div className={className} style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
      {texts.map((txt, idx) => {
        // احسب أطول نص لكل سطر (هنا النصوص متساوية غالباً)
        const maxLine = texts[idx];
        return (
          <span
            key={idx}
            className={lineClassNames[idx] || ''}
            style={{
              whiteSpace: 'pre',
              display: 'block',
              position: 'relative',
              minHeight: '1em', // احتياطي لو النص قصير جداً
            }}
          >
            {/* ghost text invisible but reserves space */}
            <span
              aria-hidden="true"
              style={{
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                position: 'absolute',
                left: 0,
                top: 0,
                whiteSpace: 'pre',
                fontWeight: 'inherit',
                fontSize: 'inherit',
                fontFamily: 'inherit',
                zIndex: -1,
              }}
            >
              {maxLine}
            </span>
            {txt.substring(0, charCounts[idx])}
            {/* المؤشر يظهر فقط في السطر الجاري */}
            {activeLine === idx && ((phase === 'typing' && charCounts[idx] < txt.length) || (phase === 'deleting' && charCounts[idx] > 0)) && (
              <span style={{
                display: 'inline-block',
                width: '1ch',
                color: 'inherit',
                opacity: blink ? 1 : 0.3,
                transition: 'opacity 0.2s',
              }}>|</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
