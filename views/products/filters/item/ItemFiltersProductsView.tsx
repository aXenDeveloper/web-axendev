'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import { Checkbox } from '@/components/inputs/checkbox/Checkbox';

interface Props {
  name: string;
}

export const ItemFiltersProductsView = ({ name }: Props) => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('products');

  const filter = searchParams.getAll('filter');
  const [checked, setChecked] = useState(filter.includes(name));

  const handleCheck = () => {
    setChecked(prev => !prev);
    const params = new URLSearchParams(`${searchParams}`);
    params.delete('filter');

    if (filter.length > 0) {
      filter
        .filter(item => item !== name)
        .forEach(item => params.append('filter', item));
    }

    if (!filter.includes(name)) {
      params.append('filter', name);
    }

    const paramsString = params.toString();

    if (paramsString) {
      push(`${pathname}?${paramsString}`);

      return;
    }

    push(pathname);
  };

  return (
    <li>
      <label tabIndex={0}>
        <Checkbox onChange={handleCheck} tabIndex={-1} checked={checked} />
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        {t(`categories.${name}`)}
      </label>
    </li>
  );
};
