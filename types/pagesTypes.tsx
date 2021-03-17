import { productsDataAPIType } from './api/productsDataAPIType';

export type ProductsPageType = {
  products: productsDataAPIType[];
};

export type ProductsCategoryPageType = {
  productsFilterByCategory: productsDataAPIType[];
  category: string;
};

export type ProductsCategoryPageStaticPropsType = {
  params: {
    category: string;
  };
};
