import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales } from './configs/constants/index';


export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });