'use client';

import { useTranslations } from 'next-intl';
import cx from 'clsx';

import style from './ItemNav.module.scss';
import { Link, usePathname } from '@/i18n';

export interface ItemNavProps {
  href: string;
  icon: JSX.Element;
  id: string;
  activeWithChildren?: boolean;
  onClick?: () => void;
}

export const ItemNav = ({ activeWithChildren, href, icon, id, onClick }: ItemNavProps) => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const isActive =
    activeWithChildren && pathname ? pathname.lastIndexOf(href) === 0 : pathname === href;

  return (
    <li>
      <Link
        className={cx(style.wrapper, {
          [style.active]: isActive
        })}
        href={href}
        onClick={onClick}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error - Dynamic value */}
        {icon} <span>{t(id)}</span>
      </Link>
    </li>
  );
};
