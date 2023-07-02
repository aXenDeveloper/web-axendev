/* eslint-disable @next/next/no-sync-scripts */
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { Metadata } from 'next';

import { Layout } from '@/components/layout/Layout';
import { CONFIG_TITLE } from '@/config';
import '@/styles/global.scss';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
});

export function generateMetadata(): Metadata {
  return {
    title: {
      default: CONFIG_TITLE,
      template: `%s - ${CONFIG_TITLE}`
    },
    icons: {
      shortcut: '/icons/favicon.ico'
    }
    // description: 'Test description',
    // themeColor: '#1B1A27'
  };
}

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params }: Props) {
  const locale = useLocale();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Show a 404 error for unknown locales
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} className={montserrat.className}>
      <body>
        <script src="/aXenDev_theme.js" />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
