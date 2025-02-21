import { ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';

import style from './BackLinkProduct.module.scss';
import { Link } from '@/i18n';

export const BackLinkProduct = () => {
  const t = useTranslations('products');

  return (
    <Link className={style.wrapper} href="/products">
      <ArrowLeft />
      {t('back')}
    </Link>
  );
};
