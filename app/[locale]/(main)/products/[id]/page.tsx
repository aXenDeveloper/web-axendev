import { getTranslator } from 'next-intl/server';

import { ProductView } from '@/views/products/[id]/ProductView';

interface MetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslator(locale, 'nav');

  return {
    title: t('products')
  };
}

export default function Page() {
  return <ProductView />;
}
