import { FC } from 'react';
import ProductsContentItem from './ProductsContentItem';
import { ProductsContentType } from './ProductsTypes';

const ProductsContent: FC<ProductsContentType> = ({ products }) => {
  return (
    <div className="products_content">
      <ul>
        {products.map(product => (
          <ProductsContentItem key={product.key} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsContent;
