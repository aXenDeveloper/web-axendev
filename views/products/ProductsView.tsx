import cx from 'classnames';

import { ContentProductsView } from './content/ContentProductsView';
import { HeaderProducts } from './header/HeaderProducts';
import { FiltersProductsView } from './filters/FiltersProductsView';
import style from './ProductsView.module.scss';

export const ProductsView = () => (
  <>
    <HeaderProducts />
    <div className={cx(style.wrapper, 'layout_wrapper')}>
      <FiltersProductsView />
      <ContentProductsView />
    </div>
  </>
);
