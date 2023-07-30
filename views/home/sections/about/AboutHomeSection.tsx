import cx from 'classnames';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import person from '@/assets/person.webp';
import style from './AboutHomeSection.module.scss';
import { GymIcon } from '@/assets/hobbies/GymIcon';
import { CookingIcon } from '@/assets/hobbies/CookingIcon';
import { GameIcon } from '@/assets/hobbies/GameIcon';
import { Tooltip } from '@/components/tooltip/Tooltip';
import { SocialFooter } from '@/components/layout/footer/socials/SocialsFooter';
import { BackgroundSVG } from '@/assets/background/BackgroundSVG';

export const AboutHomeSection = () => {
  const t = useTranslations('home');

  return (
    <section className={style.main}>
      <BackgroundSVG />
      <div className={cx('layout_wrapper', style.wrapper)}>
        <div className={style.image}>
          <Image src={person} alt={t('about.image_alt', { name: 'Maciej Piotr Balcerzak' })} />
          <SocialFooter />
        </div>

        <div className={style.content}>
          <h2>{t('about.title')}</h2>
          <span>{t('about.desc')}</span>

          <div className={style.texts}>
            <p>{t('about.text')}</p>

            <span>{t('about.hobbies.title')}</span>
            <ul>
              <li>
                <Tooltip content={t('about.hobbies.gym')}>
                  <GymIcon />
                </Tooltip>
              </li>

              <li>
                <Tooltip content={t('about.hobbies.cooking')}>
                  <CookingIcon />
                </Tooltip>
              </li>

              <li>
                <Tooltip content={t('about.hobbies.game')}>
                  <GameIcon />
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
