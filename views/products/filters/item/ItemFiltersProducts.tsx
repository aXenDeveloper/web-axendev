'use client';

import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';

import { Checkbox } from '@/components/inputs/checkbox/Checkbox';
import { usePathname, useRouter } from '@/i18n';

interface Props {
  name: string;
}

export const ItemFiltersProducts = ({ name }: Props) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('products');

  const filters = searchParams.getAll('filter');

  const handleCheck = () => {
    const params = new URLSearchParams(`${searchParams}`);
    params.delete('filter');

    if (filters.length > 0) {
      filters.filter(item => item !== name).forEach(item => params.append('filter', item));
    }

    if (!filters.includes(name)) {
      params.append('filter', name);
    }

    const paramsString = params.toString();

    if (paramsString) {
      replace(`${pathname}?${paramsString}`);

      return;
    }

    replace(pathname);
  };

  return (
    <li>
      <label tabIndex={0}>
        <Checkbox onChange={handleCheck} tabIndex={-1} checked={filters.includes(name)} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {t(`categories.${name}`)}
      </label>
    </li>
  );
};
