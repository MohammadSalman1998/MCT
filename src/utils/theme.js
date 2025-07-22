// Theme Management Utility
export const themes = {
  dark: {
    name: 'dark',
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1'
    },
    secondary: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c'
    },
    background: {
      primary: 'linear-gradient(135deg, #0a0e17 0%, #1a1f2e 100%)',
      secondary: 'linear-gradient(135deg, #181c22 0%, #23272f 100%)',
      card: 'rgba(255, 255, 255, 0.05)',
      cardHover: 'rgba(255, 255, 255, 0.1)',
      overlay: 'rgba(0, 0, 0, 0.8)',
      glass: 'rgba(255, 255, 255, 0.1)'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.9)',
      muted: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.1)',
      secondary: 'rgba(255, 255, 255, 0.2)',
      accent: 'rgba(100, 181, 246, 0.3)',
      focus: '#64b5f6'
    },
    shadow: {
      primary: 'rgba(100, 181, 246, 0.3)',
      secondary: 'rgba(0, 0, 0, 0.3)',
      card: 'rgba(0, 0, 0, 0.1)'
    }
  },
  light: {
    name: 'light',
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1'
    },
    secondary: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c'
    },
    background: {
      primary: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      secondary: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      card: 'rgba(255, 255, 255, 0.9)',
      cardHover: 'rgba(255, 255, 255, 1)',
      overlay: 'rgba(0, 0, 0, 0.5)',
      glass: 'rgba(255, 255, 255, 0.8)'
    },
    text: {
      primary: '#3C3C3B',
      secondary: 'rgba(60, 60, 59, 0.9)',
      muted: 'rgba(60, 60, 59, 0.7)',
      disabled: 'rgba(60, 60, 59, 0.5)'
    },
    border: {
      primary: 'rgba(30, 41, 59, 0.1)',
      secondary: 'rgba(30, 41, 59, 0.2)',
      accent: 'rgba(100, 181, 246, 0.3)',
      focus: '#64b5f6'
    },
    shadow: {
      primary: 'rgba(100, 181, 246, 0.2)',
      secondary: 'rgba(0, 0, 0, 0.1)',
      card: 'rgba(0, 0, 0, 0.05)'
    }
  }
};

// Custom color schemes
export const customThemes = {
  blue: {
    name: 'blue',
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a'
    }
  },
  green: {
    name: 'green',
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d'
    }
  },
  purple: {
    name: 'purple',
    primary: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#9333ea',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87'
    }
  },
  orange: {
    name: 'orange',
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12'
    }
  }
};

// Theme management functions
export class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'dark';
    this.currentColorScheme = this.getStoredColorScheme() || 'default';
    this.init();
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.applyColorScheme(this.currentColorScheme);
  }

  getStoredTheme() {
    return localStorage.getItem('mct-theme') || 'dark';
  }

  getStoredColorScheme() {
    return localStorage.getItem('mct-color-scheme') || 'default';
  }

  setTheme(themeName) {
    this.currentTheme = themeName;
    localStorage.setItem('mct-theme', themeName);
    this.applyTheme(themeName);
  }

  setColorScheme(colorScheme) {
    this.currentColorScheme = colorScheme;
    localStorage.setItem('mct-color-scheme', colorScheme);
    this.applyColorScheme(colorScheme);
  }

  applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    
    // Apply primary colors
    Object.entries(theme.primary).forEach(([key, value]) => {
      root.style.setProperty(`--primary-${key}`, value);
    });

    // Apply secondary colors
    Object.entries(theme.secondary).forEach(([key, value]) => {
      root.style.setProperty(`--secondary-${key}`, value);
    });

    // Apply background colors
    Object.entries(theme.background).forEach(([key, value]) => {
      root.style.setProperty(`--bg-${key}`, value);
    });

    // Apply text colors
    Object.entries(theme.text).forEach(([key, value]) => {
      root.style.setProperty(`--text-${key}`, value);
    });

    // Apply border colors
    Object.entries(theme.border).forEach(([key, value]) => {
      root.style.setProperty(`--border-${key}`, value);
    });

    // Apply shadow colors
    Object.entries(theme.shadow).forEach(([key, value]) => {
      root.style.setProperty(`--shadow-${key}`, value);
    });

    // Update gradients
    root.style.setProperty('--gradient-primary', 
      `linear-gradient(135deg, ${theme.primary[300]}, ${theme.primary[400]})`);
    root.style.setProperty('--gradient-secondary', 
      `linear-gradient(135deg, ${theme.secondary[300]}, ${theme.secondary[400]})`);

    // Set theme attribute
    document.documentElement.setAttribute('data-theme', themeName);
  }

  applyColorScheme(colorScheme) {
    if (colorScheme === 'default') return;

    const customTheme = customThemes[colorScheme];
    if (!customTheme) return;

    const root = document.documentElement;
    
    // Apply custom primary colors
    Object.entries(customTheme.primary).forEach(([key, value]) => {
      root.style.setProperty(`--primary-${key}`, value);
    });

    // Update gradients with new primary colors
    root.style.setProperty('--gradient-primary', 
      `linear-gradient(135deg, ${customTheme.primary[300]}, ${customTheme.primary[400]})`);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getCurrentColorScheme() {
    return this.currentColorScheme;
  }

  // Get all available themes
  getAvailableThemes() {
    return Object.keys(themes);
  }

  // Get all available color schemes
  getAvailableColorSchemes() {
    return ['default', ...Object.keys(customThemes)];
  }
}

// Create global theme manager instance
export const themeManager = new ThemeManager();

// Export utility functions
export const updateTheme = (themeName) => themeManager.setTheme(themeName);
export const updateColorScheme = (colorScheme) => themeManager.setColorScheme(colorScheme);
export const toggleTheme = () => themeManager.toggleTheme();
export const getCurrentTheme = () => themeManager.getCurrentTheme();
export const getCurrentColorScheme = () => themeManager.getCurrentColorScheme(); 