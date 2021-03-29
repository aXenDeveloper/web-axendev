import { faqDataAPIType } from './api/faqDataAPIType';
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

export type ProductsItemPageType = {
  product: productsDataAPIType;
};

export type ProductsItemPageStaticPropsType = {
  params: {
    id: string;
  };
};

export type FaqPageType = {
  faqListData: faqDataAPIType;
};
