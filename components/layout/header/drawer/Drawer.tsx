'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import cx from 'clsx';
import { useTranslations } from 'next-intl';

import { DrawerContent } from './content/DrawerContent';
import style from './Drawer.module.scss';

export const Drawer = () => {
  const t = useTranslations('global');
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className={cx(style.button, {
          [style.open]: isOpen
        })}
        type="button"
        onClick={() => setOpen(prev => !prev)}
        aria-label={t('drawer')}
      >
        <div />
        <div />
      </button>

      <AnimatePresence>{isOpen && <DrawerContent setOpen={setOpen} />}</AnimatePresence>
    </>
  );
};
