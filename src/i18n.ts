import { initReactI18next } from 'react-i18next'

import i18n from 'i18next';

import enTranslations from '../public/locales/en.json';


i18n
  .use(initReactI18next)
  .init({
    lng: 'en', 
    fallbackLng: 'en', 
    resources: {
      en: {
        translation: enTranslations, 
      },
    },
  });

export default i18n;