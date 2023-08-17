import { ReactNode } from 'react';
import { getTranslator } from 'next-intl/server';
import { Metadata } from 'next';

import { WrapperFaq } from '@/views/faq/wrapper/WrapperFaq';

import { CONFIG_TITLE } from '../../../../config';

interface MetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataProps): Promise<Metadata> {
  const t = await getTranslator(locale, 'nav');

  return {
    title: {
      default: t('faq'),
      template: `%s - ${t('faq')} - ${CONFIG_TITLE}`
    }
  };
}

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <WrapperFaq>{children}</WrapperFaq>;
}
