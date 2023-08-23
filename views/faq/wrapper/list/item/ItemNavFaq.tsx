'use client';

import Link from 'next-intl/link';
import cx from 'clsx';
import { usePathname } from 'next-intl/client';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { CaretRight24Filled } from '@fluentui/react-icons';
import { useTranslations } from 'next-intl';

import style from './ItemNavFaq.module.scss';

export interface ItemNavFaqType {
  id: string;
  parentId: string;
  url: string;
}

export interface ItemsNavFaqType extends ItemNavFaqType {
  children?: ItemNavFaqType[];
}

export const ItemNavFaq = ({ children = [], id, parentId, url }: ItemsNavFaqType) => {
  const t = useTranslations('faq');
  const pathname = usePathname();
  const { id: parentIdFromParams } = useParams();

  return (
    <li>
      <Link
        href={url}
        className={cx(style.wrapper, {
          [style.active]: pathname === url,
          [style.open]: children.length > 0 && parentIdFromParams === id
        })}
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <span>{t(`pages.${parentId}.${id}`)}</span>
        {children.length > 0 && <CaretRight24Filled />}
      </Link>

      {children.length > 0 && (
        <AnimatePresence initial={false}>
          {parentIdFromParams === id && (
            <motion.div
              className={style.children}
              key={id}
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 }
              }}
            >
              <ul>
                {children.map(item => (
                  <ItemNavFaq
                    key={item.id}
                    id={`${parentId}.${id}.${item.id}`}
                    parentId={parentId}
                    url={item.url}
                  />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};
