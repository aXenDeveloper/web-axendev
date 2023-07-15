import { useTranslations } from 'next-intl';

import style from './FiltersProductsView.module.scss';
import { CategoriesProductEnum } from '../configProducts';
import { ItemFiltersProductsView } from './item/ItemFiltersProductsView';

export const FiltersProductsView = () => {
  const t = useTranslations('products');

  return (
    <aside className={style.wrapper}>
      <h2>{t('filters.title')}</h2>

      <hr className="hr" />

      <ul>
        {Object.values(CategoriesProductEnum).map(item => (
          <ItemFiltersProductsView key={item} name={item} />
        ))}
      </ul>
    </aside>
  );
};
