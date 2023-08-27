'use client';

import { Virtuoso } from 'react-virtuoso';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import style from './ProductsView.module.scss';
import { CategoriesProductEnum, productsData } from './productsData';
import { ItemProducts } from './item/ItemProducts';

interface Props {
  oneUSDtoPLN: number | undefined;
}

export const ProductsView = ({ oneUSDtoPLN }: Props) => {
  const searchParams = useSearchParams();
  const filters = searchParams.getAll('filter');

  const data = useMemo(() => {
    return productsData
      .filter(item => {
        if (filters.length <= 0)
          return !item.categories.includes(CategoriesProductEnum.IPS_TRANSLATIONS);

        return filters.some(filter => {
          if (Object.values(CategoriesProductEnum).includes(filter as CategoriesProductEnum)) {
            return item.categories.includes(filter as CategoriesProductEnum);
          }

          return item;
        });
      })
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [filters]);

  // TODO: Add empty state
  return (
    <Virtuoso
      useWindowScroll
      className={style.wrapper}
      data={data}
      overscan={200}
      itemContent={(_index, item) => <ItemProducts {...item} oneUSDtoPLN={oneUSDtoPLN} />}
    />
  );
};
