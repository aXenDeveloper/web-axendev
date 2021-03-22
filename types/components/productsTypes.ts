import { productsDataAPIType } from '../api/productsDataAPIType';

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

export type ProductImageType = {
  images: string[];
};
