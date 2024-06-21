import createMiddleware from 'next-intl/middleware';
import { localePrefix, locales } from './configs/constants/index';


export default createMiddleware({
  // A list of all locales that are supported
  locales,
  localePrefix,

  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(vi|en)/:path*',
    '/((?!_next|_vercel|.*\\..*).*)'
  ]

};