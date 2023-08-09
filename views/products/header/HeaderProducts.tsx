import cx from 'clsx';
import { useTranslations } from 'next-intl';

import style from './HeaderProducts.module.scss';

export const HeaderProducts = () => {
  const t = useTranslations('products');

  return (
    <div className={cx(style.wrapper, 'layout_wrapper')}>
      <h1>{t('title')}</h1>
      <p>{t('desc')}</p>
    </div>
  );
};
