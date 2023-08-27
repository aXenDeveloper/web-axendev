import { useTranslations } from 'next-intl';

import style from './LastProductsHomeSection.module.scss';
import { Button } from '@/components/button/Button';

import { CategoriesProductEnum, productsData } from '../../../products/productsData';
import { ItemProducts } from '../../../products/item/ItemProducts';

export const LastProductsHomeSection = () => {
  const t = useTranslations('home');

  return (
    <section className="layout_wrapper">
      <div className={style.header}>
        <h2>{t('lastProducts.title')}</h2>
        <Button id="all_products" kind="secondary" href="/products">
          {t('lastProducts.link')}
        </Button>
      </div>

      <div className={style.list}>
        {productsData
          .filter(item => !item.categories.includes(CategoriesProductEnum.IPS_TRANSLATIONS))
          .sort((a, b) => b.createdAt - a.createdAt)
          .slice(0, 4)
          .map(item => (
            <ItemProducts key={item.id} {...item} single />
          ))}
      </div>
    </section>
  );
};
