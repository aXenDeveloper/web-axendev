import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { ProductView } from '@/views/products/[id]/ProductView';
import { productsData } from '@/views/products/productsData';
import { CONFIG, ExchangeRateToUSD } from '@/config';

interface Props {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({ params: { id, locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  const findProduct = productsData.find(product => product.id === id);

  if (findProduct) {
    return {
      title: `${findProduct.name} - ${t('products')}`
    };
  }

  return {
    title: t('products')
  };
}

const fetchExchangeRateToUSD = async (): Promise<ExchangeRateToUSD> => {
  const current = await fetch(CONFIG.nbpAPI);

  return current.json();
};

export default async function Page({ params: { id } }: Props) {
  const findProduct = productsData.find(product => product.id === id);

  if (!findProduct) {
    notFound();
  }

  const exchangeRateToUSD = await fetchExchangeRateToUSD();
  const current = exchangeRateToUSD.rates;

  return (
    <ProductView {...findProduct} oneUSDtoPLN={current.length > 0 ? current[0].mid : undefined} />
  );
}
