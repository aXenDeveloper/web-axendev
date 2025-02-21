import { useTranslations } from 'next-intl';

import style from './FiltersProducts.module.scss';
import { CategoriesProductEnum } from '../productsData';
import { ItemFiltersProducts } from './item/ItemFiltersProducts';

export const FiltersProducts = () => {
  const t = useTranslations('products');

  return (
    <aside className={style.wrapper}>
      <h2>{t('filters.title')}</h2>

      <hr className="hr" />

      <ul className={style.list}>
        {Object.values(CategoriesProductEnum).map(item => (
          <ItemFiltersProducts key={item} name={item} />
        ))}
      </ul>
    </aside>
  );
};
