import { FC } from 'react';
import Link from 'next/link';
import { ProductsCategoryType } from '../../types/components/productsTypes';

const ProductsNav: FC<ProductsCategoryType> = ({ handleSelectSortData, sortData }) => {
  return (
    <ul className="products_nav">
      <li className="box">
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
      </li>

      <li className="box">
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
      </li>
    </ul>
  );
};

export default ProductsNav;
