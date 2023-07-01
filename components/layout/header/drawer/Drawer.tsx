'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import cx from 'classnames';

import { DrawerContent } from './content/DrawerContent';
import style from './Drawer.module.scss';

export const Drawer = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button
        className={cx(style.button, {
          [style.open]: isOpen
        })}
        type="button"
        onClick={() => setOpen(prev => !prev)}
      >
        <div />
        <div />
      </button>

      <AnimatePresence>
        {isOpen && <DrawerContent setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
};
