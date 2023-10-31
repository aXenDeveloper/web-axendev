import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
  timeZone: 'Europe/Warsaw'
}));

export const locales = ['en', 'pl'] as const;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales
});
