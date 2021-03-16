import { FC } from 'react';
import { ProductsContentItemType } from './ProductsTypes';

const ProductsContentItem: FC<ProductsContentItemType> = ({ product }) => {
  const { name } = product;

  return (
    <li>
      <div>{name}</div>
    </li>
  );
};

export default ProductsContentItem;
