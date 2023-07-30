'use client';

import { ReactNode, useEffect, useState } from 'react';
import cx from 'classnames';
import { useWindowScroll } from 'react-use';

import style from './WrapperHeader.module.scss';

interface Props {
  children: ReactNode;
}

export const WrapperHeader = ({ children }: Props) => {
  const [isRender, setIsRender] = useState(false);
  const { y } = useWindowScroll();

  useEffect(() => {
    setIsRender(true);
  }, []);

  return (
    <header
      className={cx(style.wrapper, {
        [style.scrolled]: y > 0 && isRender
      })}
    >
      {children}
    </header>
  );
};
