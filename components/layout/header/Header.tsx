import Link from 'next-intl/link';

import { Logo } from '@/assets/Logo';
import style from './Header.module.scss';
import { Nav } from './nav/Nav';
import { Drawer } from './drawer/Drawer';

import { Switches } from '../../switches/Switches';

export const Header = () => {
  return (
    <header className={style.wrapper}>
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
