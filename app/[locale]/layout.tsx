/* eslint-disable @next/next/no-sync-scripts */
import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { Metadata } from 'next';

import { Layout } from '@/components/layout/Layout';
import { CONFIG_TITLE } from '@/config';

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
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Layout>{children}</Layout>
    </NextIntlClientProvider>
  );
}
