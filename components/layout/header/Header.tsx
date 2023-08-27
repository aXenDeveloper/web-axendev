import Link from 'next-intl/link';
import { useTranslations } from 'next-intl';

import { Logo } from '@/assets/Logo';
import style from './Header.module.scss';
import { Nav } from './nav/Nav';
import { Drawer } from './drawer/Drawer';
import { WrapperHeader } from './wrapper/WrapperHeader';
import { CONFIG } from '@/config';

import { Switches } from '../../switches/Switches';

export const Header = () => {
  const t = useTranslations('global');

  return (
    <WrapperHeader>
      <div className="layout_wrapper">
        <Link href="/" className={style.logo} aria-label={t('logo', { name: CONFIG.title })}>
          <Logo />
        </Link>

        <Nav />
        <Switches className={style.switches} />
        <Drawer />
      </div>
    </WrapperHeader>
  );
};
