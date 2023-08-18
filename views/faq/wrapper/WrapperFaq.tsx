import { ReactNode } from 'react';
import cx from 'clsx';

import { NavFaq } from './list/NavFaq';
import style from './WrapperFaq.module.scss';
import { MobileNavFaq } from './list/mobile/MobileNavFaq';

interface Props {
  children: ReactNode;
}

export const WrapperFaq = ({ children }: Props) => (
  <main className={cx('layout_wrapper', style.wrapper)}>
    <NavFaq />
    <MobileNavFaq />
    <main className={style.main}>{children}</main>
  </main>
);
