import { FC } from 'react';
import ProductsContentItem from './ProductsContentItem';
import { ProductsContentType } from '../../../types/components/productsTypes';

const ProductsContent: FC<ProductsContentType> = ({ products }) => {
  return (
    <div className="box">
      <ol className="products_content_ol">
        {products.map(product => (
          <ProductsContentItem key={product.key} product={product} />
        ))}
      </ol>
    </div>
  );
};

export default ProductsContent;
