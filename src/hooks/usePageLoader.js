// src\hooks\usePageLoader.js
import { useState, useEffect } from 'react';

export const usePageLoader = (minLoadTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Check if page is fully loaded
    const handleLoad = () => {
      // Ensure minimum loading time for better UX
      setTimeout(() => {
        setIsLoading(false);
      }, minLoadTime);
    };

    // If page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('load', handleLoad);
    };
  }, [minLoadTime]);

  return { isLoading, progress };
};
