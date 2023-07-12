'use client';

import { VirtuosoGrid } from 'react-virtuoso';
import { useMemo } from 'react';

import style from './ProductsView.module.scss';
import { CategoriesProductEnum, products } from './configProducts';
import { ItemProductsView } from './item/ItemProductsView';

export const ProductsView = () => {
  const data = useMemo(() => {
    return products
      .filter(
        item =>
          !item.categories.includes(CategoriesProductEnum.IPS_TRANSLATIONS)
      )
      .sort((a, b) => b.createdAt - a.createdAt);
  }, []);

  return (
    <VirtuosoGrid
      useWindowScroll
      className={style.list}
      data={data}
      overscan={200}
      itemContent={(_index, item) => <ItemProductsView {...item} />}
    />
  );
};
