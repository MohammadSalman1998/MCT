# 🌐 دليل نظام الترجمة - MCT Website

## نظرة عامة

تم إنشاء نظام ترجمة شامل للموقع يدعم التبديل بين العربية والإنجليزية مع الميزات التالية:

- ✅ **ترجمة شاملة** لجميع النصوص
- ✅ **تبديل فوري** بين اللغات
- ✅ **حفظ التفضيلات** في المتصفح
- ✅ **دعم اتجاه النص** (RTL/LTR)
- ✅ **تصميم متجاوب** للغات
- ✅ **سهولة الإضافة** للغات جديدة

## هيكل النظام

### 📁 الملفات الأساسية

```
src/
├── locales/
│   ├── ar.js          # الترجمة العربية
│   ├── en.js          # الترجمة الإنجليزية
│   └── index.js       # فهرس الترجمات
├── contexts/
│   └── LanguageContext.jsx  # Context للترجمة
└── components/
    └── LanguageSwitcher/     # مكون تبديل اللغة
        ├── LanguageSwitcher.jsx
        └── LanguageSwitcher.css
```

## كيفية الاستخدام

### 1. استخدام الترجمة في المكونات

```jsx
import { useLanguage } from '../../contexts/LanguageContext';

const MyComponent = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
};
```

### 2. إضافة نصوص جديدة

في ملف `src/locales/ar.js`:
```javascript
export const ar = {
  // ... النصوص الموجودة
  newSection: {
    title: "عنوان جديد",
    description: "وصف جديد"
  }
};
```

في ملف `src/locales/en.js`:
```javascript
export const en = {
  // ... النصوص الموجودة
  newSection: {
    title: "New Title",
    description: "New Description"
  }
};
```

### 3. استخدام النص الجديد

```jsx
const { t } = useLanguage();

return (
  <div>
    <h2>{t('newSection.title')}</h2>
    <p>{t('newSection.description')}</p>
  </div>
);
```

## الميزات المتقدمة

### 1. معلومات اللغة الحالية

```jsx
const { 
  currentLanguage,  // 'ar' أو 'en'
  direction,        // 'rtl' أو 'ltr'
  isRTL,           // true للعربية
  isLTR            // true للإنجليزية
} = useLanguage();
```

### 2. تغيير اللغة برمجياً

```jsx
const { changeLanguage } = useLanguage();

const handleLanguageChange = () => {
  changeLanguage('en'); // تغيير للإنجليزية
};
```

### 3. التحقق من وجود الترجمة

```jsx
const { t } = useLanguage();

// مع نص احتياطي
const text = t('some.key', 'Default Text');
```

## إضافة لغة جديدة

### 1. إنشاء ملف الترجمة

إنشاء ملف `src/locales/fr.js`:
```javascript
export const fr = {
  nav: {
    home: "Accueil",
    services: "Services",
    // ... باقي الترجمات
  }
};
```

### 2. تحديث فهرس الترجمات

في `src/locales/index.js`:
```javascript
import { fr } from './fr.js';

export const translations = {
  ar,
  en,
  fr  // إضافة اللغة الجديدة
};

export const languages = [
  // ... اللغات الموجودة
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    dir: 'ltr'
  }
];
```

## التنسيقات والأنماط

### دعم اتجاه النص

```css
/* للنصوص العربية */
[dir="rtl"] .my-component {
  text-align: right;
  margin-right: 20px;
}

/* للنصوص الإنجليزية */
[dir="ltr"] .my-component {
  text-align: left;
  margin-left: 20px;
}
```

### خطوط مخصصة للغات

```css
.lang-ar {
  font-family: 'Cairo', 'Segoe UI', sans-serif;
}

.lang-en {
  font-family: 'Inter', 'Segoe UI', sans-serif;
}
```

## أفضل الممارسات

### 1. تنظيم الترجمات

```javascript
// ✅ جيد - منظم حسب الأقسام
export const ar = {
  nav: { /* نصوص التنقل */ },
  hero: { /* نصوص البطل */ },
  services: { /* نصوص الخدمات */ }
};

// ❌ سيء - غير منظم
export const ar = {
  homeTitle: "الرئيسية",
  aboutDescription: "من نحن",
  serviceButton: "خدماتنا"
};
```

### 2. استخدام مفاتيح وصفية

```javascript
// ✅ جيد
t('hero.callToAction.button')

// ❌ سيء
t('btn1')
```

### 3. التعامل مع النصوص الطويلة

```javascript
// للنصوص الطويلة، استخدم مصفوفات
longText: [
  "الفقرة الأولى من النص الطويل",
  "الفقرة الثانية من النص الطويل"
]
```

## استكشاف الأخطاء

### مشكلة: النص لا يظهر

```jsx
// تأكد من وجود المفتاح في ملف الترجمة
console.log(t('nav.home')); // يجب أن يطبع النص

// استخدم نص احتياطي
{t('nav.home', 'الرئيسية')}
```

### مشكلة: اتجاه النص خاطئ

```jsx
// تأكد من تطبيق LanguageProvider
<LanguageProvider>
  <App />
</LanguageProvider>
```

## الخلاصة

نظام الترجمة جاهز للاستخدام ويدعم:
- ✅ العربية والإنجليزية
- ✅ تبديل فوري بين اللغات
- ✅ حفظ التفضيلات
- ✅ دعم اتجاه النص
- ✅ سهولة الإضافة للغات جديدة

للمساعدة أو الاستفسارات، راجع الكود في `src/contexts/LanguageContext.jsx`
