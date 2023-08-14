'use client';

import Link from 'next-intl/link';
import cx from 'clsx';
import { usePathname } from 'next-intl/client';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';

import style from './ItemNavFaq.module.scss';

export interface ItemNavFaqType {
  id: string;
  url: string;
}

export interface ItemsNavFaqType extends ItemNavFaqType {
  children?: ItemNavFaqType[];
}

export const ItemNavFaq = ({ children = [], id, url }: ItemsNavFaqType) => {
  const pathname = usePathname();
  const { id: parentId } = useParams();

  return (
    <li>
      <Link
        href={url}
        className={cx(style.wrapper, {
          [style.active]: pathname === url
        })}
      >
        ItemNavFaq - {id} - {children.length}
      </Link>

      {children.length > 0 && (
        <AnimatePresence initial={false}>
          {parentId === id && (
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
                  <ItemNavFaq key={item.id} {...item} />
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};
