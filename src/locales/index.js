// src\locales\index.js
import { ar } from './ar.js';
import { en } from './en.js';

export const translations = {
  ar,
  en
};

export const languages = [
  {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    dir: 'rtl'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    dir: 'ltr'
  }
];

export const defaultLanguage = 'ar';
