'use client';

import Link from 'next-intl/link';
import cx from 'classnames';
import { useWindowScroll } from 'react-use';

import { Logo } from '@/assets/Logo';
import style from './Header.module.scss';
import { Nav } from './nav/Nav';
import { Drawer } from './drawer/Drawer';

import { Switches } from '../../switches/Switches';

export const Header = () => {
  const { y } = useWindowScroll();

  return (
    <header
      className={cx(style.wrapper, {
        [style.scrolled]: y > 0
      })}
    >
      <div className="layout_wrapper">
        <Link href="/" className={style.logo}>
          <Logo />
        </Link>

        <Nav />
        <Switches className={style.switches} />
        <Drawer />
      </div>
    </header>
  );
};
