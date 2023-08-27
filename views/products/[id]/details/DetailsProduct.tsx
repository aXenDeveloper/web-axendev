import { useTranslations } from 'next-intl';

import style from './DetailsProduct.module.scss';
import { DateFormat } from '@/components/dateFormat/DateFormat';

import { ProductsInterface } from '../../productsData';

export const DetailsProduct = ({
  categories,
  createdAt,
  price
}: Omit<ProductsInterface, 'images' | 'links'>) => {
  const t = useTranslations('products');

  return (
    <ul className={style.wrapper}>
      <li>
        <span>{t('details.categories')}</span>
        <p className={style.highlight}>
          {categories.map(category => t(`categories.${category}`)).join(', ')}
        </p>
      </li>
      <li>
        <span>{t('details.price')}</span>
        <p className={style.highlight}>{price !== 0 ? <>${price}</> : t('free')}</p>
      </li>
      <li>
        <span>{t('details.release_date')}</span>
        <p>
          <DateFormat date={createdAt} />
        </p>
      </li>
    </ul>
  );
};
