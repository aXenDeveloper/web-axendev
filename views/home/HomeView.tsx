import cx from 'classnames';
import { useTranslations } from 'next-intl';

import style from './HomeView.module.scss';

export const HomeView = () => {
  const t = useTranslations('home');

  return (
    <div className={cx('layout_wrapper', style.wrapper)}>
      <h1 className={style.title}>{t('title')}</h1>
      <p className={style.desc}>{t('desc')}</p>
    </div>
  );
};
