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

        <div className={style.list}>
          <span>Test</span>
          <ul>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <span>Test</span>
          <ul>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className={style.list}>
          <span>Test</span>
          <ul>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
