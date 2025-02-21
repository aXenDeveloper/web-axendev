import { useTranslations } from 'next-intl';

import style from './DetailsProduct.module.scss';
import { DateFormat } from '@/components/dateFormat/DateFormat';

import { ProductsInterface } from '../../productsData';

export const DetailsProduct = ({
  categories,
  createdAt,
  oneUSDtoPLN,
  price
}: Omit<ProductsInterface, 'images' | 'links'>) => {
  const t = useTranslations('products');

  const convertPrice = () => {
    if (!price) return <span className={style.highlight}>{t('free')}</span>;

    return (
      <>
        <span className={style.highlight}>{price} PLN</span>
        {oneUSDtoPLN && (
          <>
            <span>{t('or')}</span>
            <span className={style.highlight}>${(price / oneUSDtoPLN).toFixed(2)}</span>
          </>
        )}
      </>
    );
  };

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
        <div>
          <p>{convertPrice()}</p>
          {price > 0 && <span>{t('price_calc_info')}</span>}
        </div>
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
