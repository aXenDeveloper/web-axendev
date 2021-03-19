import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';
import { ProductsCategoryType } from '../../types/components/productsTypes';
import ProductsCategory from './ProductsCategory';

const ProductsNav: FC<ProductsCategoryType> = ({ handleSelectSortData, sortData }) => {
  const { t } = useTranslation('global');

  return (
    <ul className="products_nav">
      <ProductsCategory />

      <li className="box">
        <div className="box_title">
          <h3>{t('products_filter')}</h3>
        </div>

        <div className="padding:half">
          <select onChange={el => handleSelectSortData(el.target.value)} value={sortData} className="input input_select">
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
