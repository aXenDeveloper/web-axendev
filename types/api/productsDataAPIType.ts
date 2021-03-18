export type productsDataAPIType = {
  id: number;
  name: string;
  key: string;
  category: string;
  img: string;
  links: {
    github?: string;
    ipsmarketplace?: string;
    demo?: string;
  };
  price: {
    price: number;
    link?: 'ipsmarketplace';
  };
};
