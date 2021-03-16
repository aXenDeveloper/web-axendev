export type productsDataAPIType = {
  name: string;
  key: string;
  category: string;
  img?: string;
  links: {
    github?: string;
    ipsmarketplace?: string;
    demo?: string;
  };
  price:
    | {
        price: number;
        link: 'ipsmarketplace';
      }[]
    | number;
};
