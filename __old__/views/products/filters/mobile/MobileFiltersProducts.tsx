'use client';

import cx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { ItemFiltersProducts } from '../item/ItemFiltersProducts';
import style from './MobileFiltersProducts.module.scss';
import styleMain from '../FiltersProducts.module.scss';

import { CategoriesProductEnum } from '../../productsData';

export const MobileFiltersProducts = () => {
  const t = useTranslations('products');
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.main}>
      <button className={style.button} onClick={() => setOpen(prev => !prev)}>
        {t('filters.title')}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
          >
            <ul className={cx(styleMain.list, style.list)}>
              {Object.values(CategoriesProductEnum).map(item => (
                <ItemFiltersProducts key={item} name={item} />
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
