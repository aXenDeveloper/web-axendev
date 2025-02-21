import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pl'],
  defaultLocale: 'en'
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|icons|aXenDev_theme.js|.*\\..*).*)']
};
