'use client';

import Link from 'next-intl/link';
import { usePathname } from 'next-intl/client';

import style from './LanguageSwitch.module.scss';

export const LanguageSwitch = () => {
  const pathname = usePathname();

  return (
    <div className={style.wrapper}>
      <Link href={pathname} locale="en">
        English
      </Link>

      <Link href={pathname} locale="pl">
        Polish
      </Link>
    </div>
  );
};
