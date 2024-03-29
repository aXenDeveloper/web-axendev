import { useTranslations } from 'next-intl';
import cx from 'clsx';

import { Button } from '@/components/button/Button';
import style from './MainHomeSection.module.scss';
import { Link } from '@/i18n';

export const MainHomeSection = () => {
  const t = useTranslations('home');

  return (
    <section className={cx('layout_wrapper', style.wrapper)}>
      <Link
        href="https://vitnode.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={style.vitnode}
      >
        {t.rich('vitnode', {
          bold: text => <span className={style.vitnode_bold}>{text}</span>
        })}
      </Link>

      <h1 className={style.title}>{t('title')}</h1>
      <p className={style.desc}>{t('desc')}</p>
      <div className={style.buttons}>
        <Button id="products" href="/products">
          {t('buttons.products')}
        </Button>
        <Button kind="secondary" id="contact" href="/contact">
          {t('buttons.contact')}
        </Button>
      </div>

      <div className={style.background}>
        <div />
        <div />
      </div>
    </section>
  );
};
