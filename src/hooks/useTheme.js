// src\hooks\useTheme.js
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Get saved theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDarkTheme = savedTheme === 'dark';

    console.log('Setting initial theme:', savedTheme);
    setIsDark(isDarkTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Force CSS re-calculation
    document.documentElement.style.setProperty('--theme-transition', 'all 0.3s ease');

    // Force a repaint
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';

    console.log('Toggling theme to:', newTheme);
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Force CSS re-calculation
    document.documentElement.style.setProperty('--theme-transition', 'all 0.3s ease');

    // Force a repaint
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
  };

  return { isDark, toggleTheme };
};
