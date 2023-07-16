import { useTranslations } from 'next-intl';

import style from './DetailsProduct.module.scss';

import { ProductsInterface } from '../../configProducts';

export const DetailsProduct = ({ id }: Omit<ProductsInterface, 'images'>) => {
  const t = useTranslations('products');

  return (
    <ul className={style.wrapper}>
      <li>
        <span>{t('details.categories')}</span>
        <p>{id}</p>
      </li>
      <li>
        <span>DetailsProduct</span>
        <p>{id}</p>
      </li>
    </ul>
  );
};
