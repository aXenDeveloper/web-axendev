'use client';

import Link from 'next-intl/link';
import cx from 'clsx';
import { usePathname } from 'next-intl/client';

import style from './ItemNavFaq.module.scss';

export interface ItemNavFaqType {
  id: string;
  url: string;
}

export interface ItemsNavFaqType extends ItemNavFaqType {
  children?: ItemNavFaqType[];
}

export const ItemNavFaq = ({ id, url }: ItemsNavFaqType) => {
  const pathname = usePathname();

  return (
    <Link
      href={url}
      className={cx(style.wrapper, {
        [style.active]: pathname === url
      })}
    >
      ItemNavFaq - {id}
    </Link>
  );
};
