import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Для запуска теста в компонентах с переводом i18n
i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        resources: { ru: { translationsNS: {} } },
    });

export default i18n;
