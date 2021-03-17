import { productsDataAPIType } from '../api/productsDataAPIType';

export type ProductsContentType = {
  products: productsDataAPIType[];
  querySort: {
    sort: string;
    category: string;
  };
};

export type ProductsContentItemType = {
  product: productsDataAPIType;
};
