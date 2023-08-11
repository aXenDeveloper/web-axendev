import { ReactNode } from 'react';
import cx from 'clsx';

import { NavFaq } from './list/NavFaq';
import style from './WrapperFaq.module.scss';

interface Props {
  children: ReactNode;
}

export const WrapperFaq = ({ children }: Props) => {
  return (
    <div className={cx('layout_wrapper', style.wrapper)}>
      <NavFaq />
      <main>{children}</main>
    </div>
  );
};
