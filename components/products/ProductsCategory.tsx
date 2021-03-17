import { FC } from 'react';
import Link from 'next/link';
import { ProductsCategoryType } from '../../types/components/productsTypes';

const ProductsCategory: FC<ProductsCategoryType> = ({ handleSelectSortData, sortData }) => {
  return (
    <div className="products_nav">
      <div className="box">
        <div className="box_title">
          <h3>Category</h3>
        </div>

        <div className="padding:half">
          <ul>
            <li>
              <Link href="/products/ips-community-suite">IPS Community Suite</Link>
            </li>
            <li>
              <Link href="/products/react">React</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="box">
        <div className="box_title">
          <h3>Filter</h3>
        </div>

        <div className="padding:half">
          <select onChange={el => handleSelectSortData(el.target.value)} value={sortData}>
            <option value="DESC">DESC</option>
            <option value="ASC">ASC</option>
            <option value="priceDESC">priceDESC</option>
            <option value="priceASC">priceASC</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
