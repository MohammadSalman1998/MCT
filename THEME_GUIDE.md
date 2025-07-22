# دليل نظام الألوان والثيمات - MCT

## نظرة عامة

تم إنشاء نظام ألوان شامل ومتغيرات CSS لسهولة تخصيص الموقع حسب احتياجات العميل. النظام يدعم:

- ✅ **متغيرات CSS شاملة** لجميع الألوان
- ✅ **ثيمات متعددة** (داكن/فاتح)
- ✅ **مخططات ألوان مخصصة** (أزرق، أخضر، بنفسجي، برتقالي)
- ✅ **إدارة ديناميكية** للثيمات
- ✅ **حفظ التفضيلات** في المتصفح

## هيكل المتغيرات

### الألوان الأساسية (Primary Colors)
```css
--primary-50: #e3f2fd   /* فاتح جداً */
--primary-100: #bbdefb
--primary-200: #90caf9
--primary-300: #64b5f6  /* اللون الأساسي */
--primary-400: #42a5f5
--primary-500: #2196f3
--primary-600: #1e88e5
--primary-700: #1976d2
--primary-800: #1565c0
--primary-900: #0d47a1  /* داكن جداً */
```

### الألوان الثانوية (Secondary Colors)
```css
--secondary-50: #f3e5f5
--secondary-100: #e1bee7
--secondary-200: #ce93d8
--secondary-300: #ba68c8
--secondary-400: #ab47bc
--secondary-500: #9c27b0
--secondary-600: #8e24aa
--secondary-700: #7b1fa2
--secondary-800: #6a1b9a
--secondary-900: #4a148c
```

### ألوان الخلفية (Background Colors)
```css
--bg-primary: linear-gradient(135deg, #0a0e17 0%, #1a1f2e 100%)
--bg-secondary: linear-gradient(135deg, #181c22 0%, #23272f 100%)
--bg-card: rgba(255, 255, 255, 0.05)
--bg-card-hover: rgba(255, 255, 255, 0.1)
--bg-overlay: rgba(0, 0, 0, 0.8)
--bg-glass: rgba(255, 255, 255, 0.1)
```

### ألوان النصوص (Text Colors)
```css
--text-primary: #ffffff
--text-secondary: rgba(255, 255, 255, 0.9)
--text-muted: rgba(255, 255, 255, 0.7)
--text-disabled: rgba(255, 255, 255, 0.5)
```

### ألوان الحدود (Border Colors)
```css
--border-primary: rgba(255, 255, 255, 0.1)
--border-secondary: rgba(255, 255, 255, 0.2)
--border-accent: rgba(100, 181, 246, 0.3)
--border-focus: #64b5f6
```

### ألوان الظلال (Shadow Colors)
```css
--shadow-primary: rgba(100, 181, 246, 0.3)
--shadow-secondary: rgba(0, 0, 0, 0.3)
--shadow-card: rgba(0, 0, 0, 0.1)
```

## كيفية تغيير الألوان

### 1. تغيير اللون الأساسي للعميل

```javascript
// في ملف theme.js، قم بتعديل customThemes
export const customThemes = {
  clientBrand: {
    name: 'clientBrand',
    primary: {
      50: '#f0f9ff',    // فاتح جداً
      100: '#e0f2fe',
      200: '#bae6fd',
      300: '#7dd3fc',   // اللون الأساسي
      400: '#38bdf8',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
      800: '#075985',
      900: '#0c4a6e'    // داكن جداً
    }
  }
};
```

### 2. تغيير الألوان مباشرة في CSS

```css
/* في ملف index.css، قم بتعديل المتغيرات */
:root {
  --primary-300: #your-color-here;
  --primary-400: #your-color-here;
  --bg-primary: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### 3. تغيير الألوان برمجياً

```javascript
import { themeManager } from './utils/theme';

// تطبيق مخطط لون مخصص
themeManager.setColorScheme('clientBrand');

// أو تطبيق ألوان مخصصة
document.documentElement.style.setProperty('--primary-300', '#your-color');
```

## مخططات الألوان المتاحة

### 1. الافتراضي (Default)
- اللون الأساسي: `#64b5f6` (أزرق فاتح)
- مناسب لمعظم المواقع التقنية

### 2. أزرق (Blue)
- اللون الأساسي: `#3b82f6` (أزرق متوسط)
- مناسب للمواقع المؤسسية

### 3. أخضر (Green)
- اللون الأساسي: `#22c55e` (أخضر)
- مناسب لمواقع الاستدامة والصحة

### 4. بنفسجي (Purple)
- اللون الأساسي: `#a855f7` (بنفسجي)
- مناسب لمواقع الإبداع والفن

### 5. برتقالي (Orange)
- اللون الأساسي: `#f97316` (برتقالي)
- مناسب لمواقع الطاقة والحماس

## إضافة مخطط لون جديد

```javascript
// في ملف theme.js
export const customThemes = {
  // ... المخططات الموجودة
  
  newBrand: {
    name: 'newBrand',
    primary: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',   // اللون الأساسي
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d'
    }
  }
};
```

## استخدام المتغيرات في CSS

```css
/* بدلاً من استخدام الألوان المباشرة */
.my-component {
  background: #64b5f6;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* استخدم المتغيرات */
.my-component {
  background: var(--primary-300);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
}
```

## الفئات المساعدة (Utility Classes)

```css
/* ألوان النصوص */
.text-primary { color: var(--text-primary); }
.text-secondary { color: var(--text-secondary); }
.text-muted { color: var(--text-muted); }

/* ألوان الخلفية */
.bg-primary { background: var(--bg-primary); }
.bg-secondary { background: var(--bg-secondary); }
.bg-card { background: var(--bg-card); }

/* ألوان الحدود */
.border-primary { border-color: var(--border-primary); }
.border-accent { border-color: var(--border-accent); }

/* الظلال */
.shadow-primary { box-shadow: 0 4px 15px var(--shadow-primary); }
.shadow-card { box-shadow: 0 8px 32px var(--shadow-card); }
```

## إدارة الثيمات

### تبديل الثيم
```javascript
import { toggleTheme } from './utils/theme';

// تبديل بين الوضع الداكن والفاتح
toggleTheme();
```

### تطبيق ثيم محدد
```javascript
import { updateTheme } from './utils/theme';

// تطبيق الوضع الفاتح
updateTheme('light');

// تطبيق الوضع الداكن
updateTheme('dark');
```

### تطبيق مخطط لون محدد
```javascript
import { updateColorScheme } from './utils/theme';

// تطبيق مخطط لون أخضر
updateColorScheme('green');
```

## حفظ التفضيلات

النظام يحفظ تفضيلات المستخدم تلقائياً في `localStorage`:

- `mct-theme`: الثيم الحالي (dark/light)
- `mct-color-scheme`: مخطط اللون الحالي

## أفضل الممارسات

### 1. استخدم المتغيرات دائماً
```css
/* ✅ صحيح */
.button {
  background: var(--primary-300);
  color: var(--text-primary);
}

/* ❌ خطأ */
.button {
  background: #64b5f6;
  color: #ffffff;
}
```

### 2. استخدم الفئات المساعدة
```css
/* ✅ صحيح */
.card {
  @apply bg-card border-primary shadow-card;
}

/* ❌ خطأ */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  box-shadow: 0 8px 32px var(--shadow-card);
}
```

### 3. اختبر الألوان في كلا الثيمين
تأكد من أن الألوان تعمل جيداً في الوضع الداكن والفاتح.

## استكشاف الأخطاء

### المشكلة: الألوان لا تتغير
```javascript
// تأكد من استيراد themeManager
import { themeManager } from './utils/theme';

// تأكد من تطبيق الثيم
themeManager.init();
```

### المشكلة: المتغيرات غير معرفة
```css
/* تأكد من استيراد index.css */
@import './index.css';
```

### المشكلة: التفضيلات لا تُحفظ
```javascript
// تأكد من أن localStorage متاح
if (typeof window !== 'undefined' && window.localStorage) {
  themeManager.setTheme('dark');
}
```

## الدعم

للمساعدة في تخصيص الألوان أو إضافة مخططات جديدة، راجع:
- ملف `src/utils/theme.js` - إدارة الثيمات
- ملف `src/index.css` - متغيرات CSS
- ملف `src/components/ThemeSwitcher/` - مكون تبديل الثيمات 