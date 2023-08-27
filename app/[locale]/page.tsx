import { HomeView } from '@/views/home/HomeView';
import { CONFIG, ExchangeRateToUSD } from '@/config';

const fetchExchangeRateToUSD = async (): Promise<ExchangeRateToUSD> => {
  const current = await fetch(CONFIG.nbpAPI);

  return current.json();
};

export default async function Page() {
  const exchangeRateToUSD = await fetchExchangeRateToUSD();
  const current = exchangeRateToUSD.rates;

  return <HomeView oneUSDtoPLN={current.length > 0 ? current[0].mid : undefined} />;
}
