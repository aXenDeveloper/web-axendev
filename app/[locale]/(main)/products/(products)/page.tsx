import { getTranslations } from 'next-intl/server';

import { ProductsView } from '@/views/products/ProductsView';
import { CONFIG, ExchangeRateToUSD } from '@/config';

interface MetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('products')
  };
}

const fetchExchangeRateToUSD = async (): Promise<ExchangeRateToUSD> => {
  const current = await fetch(CONFIG.nbpAPI);

  return current.json();
};

export default async function Page() {
  const exchangeRateToUSD = await fetchExchangeRateToUSD();
  const current = exchangeRateToUSD.rates;

  return <ProductsView oneUSDtoPLN={current.length > 0 ? current[0].mid : undefined} />;
}
