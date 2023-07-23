import cx from 'classnames';
import { useTranslations } from 'next-intl';

import style from './HomeView.module.scss';
import { Button } from '@/components/button/Button';
import { LastProductsHomeSection } from './sections/lastProducts/LastProductsHomeSection';

export const HomeView = () => {
  const t = useTranslations('home');

  return (
    <div className={style.wrapper}>
      <div className={cx('layout_wrapper', style.content)}>
        <h1 className={style.title}>{t('title')}</h1>
        <p className={style.desc}>{t('desc')}</p>

        <div className={style.buttons}>
          <Button id="products" href="/products">
            {t('buttons.products')}
          </Button>
          <Button kind="secondary" id="contact">
            {t('buttons.contact')}
          </Button>
        </div>

        <div className={style.background}>
          <div />
          <div />
        </div>
      </div>

      <LastProductsHomeSection />
    </div>
  );
};
