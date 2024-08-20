// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import translationEN from './locales/en.json';
import translationKa from './locales/ka.json';

// The translations
const resources = {
  en: {
    translation: translationEN,
  },
  ka: {
    translation: translationKa,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
