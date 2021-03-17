import { FC } from 'react';
import ProductsContentItem from './ProductsContentItem';
import { ProductsContentType } from '../../types/components/productsTypes';

const ProductsContent: FC<ProductsContentType> = ({ products }) => {
  return (
    <div className="box padding">
      <ul>
        {products.map(product => (
          <ProductsContentItem key={product.key} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsContent;
