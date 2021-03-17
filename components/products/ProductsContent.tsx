import { ChangeEvent, FC, useState } from 'react';
import ProductsContentItem from './ProductsContentItem';
import { ProductsContentType } from './ProductsTypes';

const ProductsContent: FC<ProductsContentType> = ({ products }) => {
  const [dataProducts, setDataProducts] = useState(products);

  const handleSelectSort = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortedProducts = [...products].sort((a, b) => {
      const sortType = {
        priceDESC: a.price.price - b.price.price,
        priceASC: b.price.price - a.price.price,
        DESC: 1,
        ASC: -1
      };

      return sortType[e.target.value];
    });

    setDataProducts(sortedProducts);
  };

  return (
    <div className="products_content">
      <select onChange={handleSelectSort}>
        <option value="DESC">DESC</option>
        <option value="ASC">ASC</option>
        <option value="priceDESC">priceDESC</option>
        <option value="priceASC">priceASC</option>
      </select>

      <ul>
        {dataProducts.map(product => (
          <ProductsContentItem key={product.key} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsContent;
