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

export type ProductLinksType = {
  price: {
    price: number;
    link?: 'ipsmarketplace';
  };
  links: {
    github?: string;
    ipsmarketplace?: string;
    demo?: string;
  };
};
