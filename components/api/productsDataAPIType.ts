export type productsDataAPIType = {
  name: string;
  category: string;
  links: {
    github?: string;
    ipsmarketplace?: string;
    demo?: string;
  }[];
  price:
    | {
        price: number;
        link: 'ipsmarketplace';
      }[]
    | number;
};
