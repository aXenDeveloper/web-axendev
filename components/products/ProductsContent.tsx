import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import ProductsContentItem from './ProductsContentItem';
import { ProductsContentType } from './ProductsTypes';

const ProductsContent: FC<ProductsContentType> = ({ products, querySort }) => {
  const { push } = useRouter();

  const handleSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
    push(
      {
        pathname: '/products',
        query: {
          category: querySort.category,
          sort: e.target.value
        }
      },
      null,
      { shallow: true }
    );
  };

  return (
    <div className="products_content">
      <select onChange={handleSelectSort} value={querySort.sort}>
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
        <option value="priceDESC">priceDESC</option>
        <option value="priceASC">priceASC</option>
      </select>

      <ul>
        {products.map(product => (
          <ProductsContentItem key={product.key} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsContent;
