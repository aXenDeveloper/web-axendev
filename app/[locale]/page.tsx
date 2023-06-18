'use client';

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('global');

  return <div>Home - {t('test')}</div>;
}
