import { productsDataAPIType } from '../api/productsDataAPIType';

export type ProductsContentType = {
  products: productsDataAPIType[];
};

export type ProductsContentItemType = {
  product: productsDataAPIType;
};
