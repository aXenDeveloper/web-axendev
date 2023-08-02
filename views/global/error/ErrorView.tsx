'use client';

import { Warning24Filled } from '@fluentui/react-icons';
import { useTranslations } from 'next-intl';

import style from './ErrorView.module.scss';

interface Props {
  code: 404 | 500;
}

export const ErrorView = ({ code }: Props) => {
  const t = useTranslations('global');

  return (
    <div className={style.wrapper}>
      <Warning24Filled />
      <span>{t('errors.something_wrong')}</span>
      <p>{t(`errors.error_${code}`)}</p>
      <span>{t('errors.code', { code })}</span>
    </div>
  );
};
