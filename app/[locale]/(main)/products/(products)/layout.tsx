import { ReactNode } from 'react';
import cx from 'classnames';

import style from './layout.module.scss';
import { FiltersProductsView } from '@/views/products/filters/FiltersProductsView';
import { HeaderProducts } from '@/views/products/header/HeaderProducts';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <HeaderProducts />
      <div className={cx(style.wrapper, 'layout_wrapper')}>
        <FiltersProductsView />
        {children}
      </div>
    </>
  );
}
