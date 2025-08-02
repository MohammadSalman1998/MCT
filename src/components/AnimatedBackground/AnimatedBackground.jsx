// src/components/AnimatedBackground/AnimatedBackground.jsx
import React from 'react';
import './AnimatedBackground.css';

// Simple Ripple Background Component
const RippleBackground = () => {
  const [ripples, setRipples] = React.useState([]);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleMouseClick = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          id: Date.now() + Math.random(),
        };

        setRipples(prev => [...prev, newRipple]);

        setTimeout(() => {
          setRipples(r => r.filter(ripple => ripple.id !== newRipple.id));
        }, 1500);
      }
    };

    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div className="ripple-background" ref={containerRef}>
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{ top: ripple.y, left: ripple.x }}
        />
      ))}
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="animated-background-container">
        <div className="hero-overlay" />
        <div className="simple-particles">
            {[...Array(40)].map((_, i) => (
                <div
                    key={i}
                    className="simple-particle"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${4 + Math.random() * 5}s`,
                    }}
                />
            ))}
        </div>
        <RippleBackground />
    </div>
  );
};

export default AnimatedBackground;
