import { getTranslator } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { ProductView } from '@/views/products/[id]/ProductView';
import { dataProducts } from '@/views/products/dataProducts';

interface Props {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({ params: { id, locale } }: Props) {
  const t = await getTranslator(locale, 'nav');

  const findProduct = dataProducts.find(product => product.id === id);

  if (findProduct) {
    return {
      title: `${findProduct.name} - ${t('products')}`
    };
  }

  return {
    title: t('products')
  };
}

export default function Page({ params: { id } }: Props) {
  const findProduct = dataProducts.find(product => product.id === id);

  if (!findProduct) {
    notFound();
  }

  return <ProductView {...findProduct} />;
}
