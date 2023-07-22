import Link from 'next-intl/link';
import { MouseEvent, ReactNode } from 'react';
import cx from 'classnames';

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
  const content = () => {
    if (externalLink) {
      return (
        <a
          className={cx(style.wrapper, style[kind], className, {
            [style.icon]: iconOnlyText
          })}
          href={href}
          onClick={onClick}
          data-testid={`button_${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    if (href) {
      return (
        <Link
          className={cx(style.wrapper, style[kind], className, {
            [style.icon]: iconOnlyText
          })}
          href={href}
          onClick={onClick}
          data-testid={`button_${id}`}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cx(style.wrapper, style[kind], className, {
          [style.icon]: iconOnlyText
        })}
        onClick={onClick}
        data-testid={`button_${id}`}
      >
        {children}
      </button>
    );
  };

  if (iconOnlyText) {
    return <Tooltip content={iconOnlyText}>{content()}</Tooltip>;
  }

  return content();
};
