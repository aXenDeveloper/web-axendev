import { useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import cx from 'classnames';

import style from './ItemNav.module.scss';

export interface ItemNavProps {
  href: string;
  icons: {
    active: JSX.Element;
    unActive: JSX.Element;
  };
  id: string;
  activeWithChildren?: boolean;
}

export const ItemNav = ({
  activeWithChildren,
  href,
  icons,
  id
}: ItemNavProps) => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const isActive =
    activeWithChildren && pathname
      ? pathname.lastIndexOf(href) === 0
      : pathname === href;

  return (
    <li>
      <Link
        className={cx(style.wrapper, {
          [style.active]: isActive
        })}
        href={href}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error - Dynamic value */}
        {isActive ? icons.active : icons.unActive} <span>{t(id)}</span>
      </Link>
    </li>
  );
};
