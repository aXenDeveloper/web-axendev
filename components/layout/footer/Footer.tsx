import cx from 'classnames';
import Link from 'next-intl/link';

import style from './Footer.module.scss';
import { Logo } from '@/assets/Logo';
import { SocialFooter } from './socials/SocialsFooter';
import { InfoFooter } from './info/InfoFooter';

export const Footer = () => {
  return (
    <footer className={style.main}>
      <div className={cx('layout_wrapper', style.wrapper)}>
        <div className={style.logo}>
          <Link href="/">
            <Logo />
          </Link>

          <InfoFooter />
          <SocialFooter />
        </div>

        <ul className={style.list}>
          <li>
            <a href="mailto:aXenDeveloper@gmail.com">aXenDeveloper@gmail.com</a>
          </li>

          <li>
            <a
              href="https://invisioncommunity.com/profile/580858-axendev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invision Community
            </a>
          </li>

          <li>
            <a
              href="https://www.pecetowicz.pl/profile/36319-axendev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pecetowicz.pl
            </a>
          </li>

          <li>
            <a
              href="https://forum.invisionize.pl/profile/19185-axen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Invisionize PL
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
