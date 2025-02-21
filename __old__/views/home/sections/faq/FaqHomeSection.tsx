import cx from 'clsx';
import { useTranslations } from 'next-intl';

import style from './FaqHomeSection.module.scss';
import { BackgroundSVG } from '@/assets/background/BackgroundSVG';
import { LogoIcon } from '@/assets/LogoIcon';
import { Button } from '@/components/button/Button';

export const FaqHomeSection = () => {
  const t = useTranslations('home');

  return (
    <section className={style.main}>
      <BackgroundSVG />
      <div className={cx('layout_wrapper', style.wrapper)}>
        <div className={style.content}>
          <h2>{t('questions.title')}</h2>
          <p>{t('questions.desc')}</p>

          <div className={style.buttons}>
            <Button id="faq" href="/faq">
              {t('questions.buttons.faq')}
            </Button>

            <Button id="faq" href="/contact" kind="secondary">
              {t('questions.buttons.contact')}
            </Button>
          </div>
        </div>

        <LogoIcon />
      </div>
    </section>
  );
};
