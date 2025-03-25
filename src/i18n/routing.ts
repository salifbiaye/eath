import {defineRouting} from 'next-intl/routing';

// @ts-ignore
export const routing = defineRouting({
  locales: ['en', 'fr','ja','de','es','ar'],
  defaultLocale: 'en'
});
