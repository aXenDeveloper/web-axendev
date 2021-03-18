import { productsDataAPIType } from './api/productsDataAPIType';

export type ProductsPageType = {
  products: productsDataAPIType[];
};

export type ProductsNavPageType = {
  productsFilterByCategory: productsDataAPIType[];
  category: string;
};

export type ProductsNavPageStaticPropsType = {
  params: {
    category: string;
  };
};
