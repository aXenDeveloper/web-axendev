export const CONFIG = {
  nbpAPI: 'https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json',
  title: 'aXenDev',
  local_storage_theme: 'aXenDev_theme'
};

export interface ExchangeRateToUSD {
  code: string;
  currency: string;
  rates: {
    effectiveDate: string;
    mid: number;
    no: string;
  }[];
  table: string;
}
