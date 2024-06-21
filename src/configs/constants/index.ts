import { LocalePrefix } from 'next-intl/routing';
const SECTIONS = ["Home", "Staking", "Solutions", "Defi", "Why", "App", "Audited", "Trade", "Ecosystem", "Tokenomic", "Milestones", "Team", "Partner"];

export const localePrefix = 'never' satisfies LocalePrefix;


export const locales = ['en', 'vi'] as const;

export { SECTIONS };