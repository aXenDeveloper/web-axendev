import { FC } from 'react';
import { ProductsContentItemType } from '../../types/components/productsTypes';

const ProductsContentItem: FC<ProductsContentItemType> = ({ product }) => {
  const { name } = product;

  return (
    <li>
      <div>{name}</div>
    </li>
  );
};

export default ProductsContentItem;
