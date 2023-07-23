'use client';

import { VirtuosoGrid, LogLevel } from 'react-virtuoso';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import style from './ProductsView.module.scss';
import { CategoriesProductEnum, products } from './configProducts';
import { ItemProducts } from './item/ItemProducts';

export const ProductsView = () => {
  const searchParams = useSearchParams();
  const filters = searchParams.getAll('filter');

  const data = useMemo(() => {
    return products
      .filter(item => {
        if (filters.length <= 0)
          return !item.categories.includes(
            CategoriesProductEnum.IPS_TRANSLATIONS
          );

        return filters.some(filter => {
          if (
            Object.values(CategoriesProductEnum).includes(
              filter as CategoriesProductEnum
            )
          ) {
            return item.categories.includes(filter as CategoriesProductEnum);
          }

          return item;
        });
      })
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [filters]);

  // TODO: Add empty state
  return (
    <VirtuosoGrid
      useWindowScroll
      className={style.list}
      data={data}
      logLevel={LogLevel.DEBUG}
      itemContent={(_index, item) => <ItemProducts {...item} />}
    />
  );
};
