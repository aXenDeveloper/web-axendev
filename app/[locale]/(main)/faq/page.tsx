import { getTranslator } from 'next-intl/server';

import { FaqView } from '@/views/faq/FaqView';

interface MetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslator(locale, 'nav');

  return {
    title: t('faq')
  };
}

export default function Page() {
  return <FaqView />;
}
