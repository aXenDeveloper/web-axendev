import { ReactNode } from 'react';
import cx from 'clsx';

import { ListFaq } from './list/ListFaq';
import style from './WrapperFaq.module.scss';

interface Props {
  children: ReactNode;
}

export const WrapperFaq = ({ children }: Props) => {
  return (
    <div className={cx('layout_wrapper', style.wrapper)}>
      <ListFaq />
      <main>{children}</main>
    </div>
  );
};
