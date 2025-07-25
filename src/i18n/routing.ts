import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  pathnames: {
    '/': '/',
    '/resume': {
      fr: '/cv'
    },
    "/blog" : "/blog",
    '/projects': {
      fr: '/projets'
    },
    "/contact": "/contact"
  }
});
