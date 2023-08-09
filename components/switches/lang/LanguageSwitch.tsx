'use client';

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';
import cx from 'clsx';
import { useLocale } from 'next-intl';

import style from './LanguageSwitch.module.scss';

export const LanguageSwitch = () => {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className={style.wrapper}>
      <Link
        href={pathname}
        locale="en"
        className={cx({
          [style.active]: locale === 'en'
        })}
      >
        English
      </Link>

      <Link
        href={pathname}
        locale="pl"
        className={cx({
          [style.active]: locale === 'pl'
        })}
      >
        Polish
      </Link>
    </div>
  );
};
