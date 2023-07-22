'use client';

import { useTranslations } from 'next-intl';

import { Message } from '@/components/message/Message';

export const DeprecatedProduct = () => {
  const t = useTranslations('products');

  return (
    <Message id="deprecated" kind="warning" title={t('deprecated.title')}>
      {t('deprecated.desc')}
    </Message>
  );
};
