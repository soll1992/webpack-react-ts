import { lazy } from 'react';

// имитация задержки для suspense, убрать потом
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
