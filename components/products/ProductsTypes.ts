import { productsDataAPIType } from '../api/productsDataAPIType';

type QuerySort = {
  sort: string;
  category: string;
};

export type ProductsContentType = {
  products: productsDataAPIType[];
};

export type ProductsContentItemType = {
  product: productsDataAPIType;
};

export type ProductsCategoryType = {
  sortData: string;
  handleSelectSortData(el: string): void;
};
