import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import style from './BackLinkProduct.module.scss';

export const BackLinkProduct = () => {
  const t = useTranslations('products');

  return (
    <Link className={style.wrapper} href="/products">
      <ArrowLeft />
      {t('back')}
    </Link>
  );
};
