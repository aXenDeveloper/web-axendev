import Link from 'next-intl/link';
import { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';

import style from './Button.module.scss';

interface Props {
  children: ReactNode;
  id: string;
  href?: string;
  kind?: 'primary' | 'secondary';
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  href,
  id,
  kind = 'primary',
  onClick
}: Props) => {
  if (href) {
    <Link
      className={cx(style.wrapper, style[kind])}
      href={href}
      onClick={onClick}
      data-testid={`button_${id}`}
    >
      {children}
    </Link>;
  }

  return (
    <button
      className={cx(style.wrapper, style[kind])}
      onClick={onClick}
      data-testid={`button_${id}`}
    >
      {children}
    </button>
  );
};
