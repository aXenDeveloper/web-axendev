import Link from 'next-intl/link';
import { MouseEvent, ReactNode } from 'react';
import cx from 'clsx';

import style from './Button.module.scss';
import { Tooltip } from '../tooltip/Tooltip';

interface Props {
  children: ReactNode;
  id: string;
  className?: string;
  externalLink?: boolean;
  href?: string;
  iconOnlyText?: string;
  kind?: 'primary' | 'secondary';
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export const Button = ({
  children,
  className,
  externalLink,
  href,
  iconOnlyText,
  id,
  kind = 'primary',
  onClick
}: Props) => {
  const rest = {
    className: cx(style.wrapper, style[kind], className, {
      [style.icon]: iconOnlyText
    }),
    ['data-testid']: `button_${id}`,
    onClick
  };

  const content = () => {
    if (externalLink) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </a>
      );
    }

    if (href) {
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
    }

    return <button {...rest}>{children}</button>;
  };

  if (iconOnlyText) {
    return <Tooltip content={iconOnlyText}>{content()}</Tooltip>;
  }

  return content();
};
