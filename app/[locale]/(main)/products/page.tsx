import { getTranslator } from 'next-intl/server';

import { ProductsView } from '@/views/products/ProductsView';

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
  return <ProductsView />;
}
