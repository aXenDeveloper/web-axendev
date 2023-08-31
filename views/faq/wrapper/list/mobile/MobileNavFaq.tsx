'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import style from './MobileNavFaq.module.scss';
import { ItemNavFaq } from '../item/ItemNavFaq';
import styleMain from '../NavFaq.module.scss';

import { faqData } from '../../../faqData';

export const MobileNavFaq = () => {
  const t = useTranslations('faq');
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={style.main}>
      <button className={style.button} onClick={() => setOpen(prev => !prev)}>
        {t('menu')}
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
            <ul className={style.list}>
              {faqData.map(category => (
                <li className={styleMain.category} key={category.id}>
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-expect-error */}
                  {category.id !== 'global' && <span>{t(category.id)}</span>}

                  <ul>
                    {category.items.map(item => (
                      <ItemNavFaq
                        key={item.id}
                        parentId={category.id}
                        onClick={() => setOpen(false)}
                        {...item}
                      />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
