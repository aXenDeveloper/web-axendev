import { ReactNode } from 'react';
import cx from 'classnames';

import style from './layout.module.scss';
import { FiltersProducts } from '@/views/products/filters/FiltersProducts';
import { HeaderProducts } from '@/views/products/header/HeaderProducts';
import { MobileFiltersProducts } from '@/views/products/filters/mobile/MobileFiltersProducts';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <HeaderProducts />
      <MobileFiltersProducts />
      <div className={cx(style.wrapper, 'layout_wrapper')}>
        <FiltersProducts />
        {children}
      </div>
    </>
  );
}
