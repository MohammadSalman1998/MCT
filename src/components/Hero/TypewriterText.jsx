import React, { useEffect, useState } from 'react';

/**
 * TypewriterText component for animated typing/deleting text with blinking cursor.
 * @param {string[]} texts - Array of texts to type and loop through.
 * @param {number} typingSpeed - ms per character while typing
 * @param {number} deletingSpeed - ms per character while deleting
 * @param {number} delay - ms to wait before starting to delete
 * @param {string} className - optional className for styling
 */
export default function TypewriterText({
  texts = [],
  typingSpeed = 80,
  deletingSpeed = 40,
  delay = 1200,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0); // index of texts
  const [subIndex, setSubIndex] = useState(0); // index in current string
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (!texts.length) return;
    if (!deleting && subIndex === texts[index].length) {
      // Pause before deleting
      const timeout = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(timeout);
    }
    if (deleting && subIndex === 0) {
      // Pause before typing next
      const timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 500);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, texts, index, typingSpeed, deletingSpeed, delay]);

  useEffect(() => {
    setDisplayed(texts[index]?.substring(0, subIndex) || '');
  }, [subIndex, texts, index]);

  // Blinking cursor effect
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={className} style={{whiteSpace: 'pre'}}>
      {displayed}
      <span className="typewriter-cursor" style={{
        display: 'inline-block',
        width: '1ch',
        color: 'inherit',
        opacity: blink ? 1 : 0.3,
        transition: 'opacity 0.2s',
      }}>
        |
      </span>
    </span>
  );
}
