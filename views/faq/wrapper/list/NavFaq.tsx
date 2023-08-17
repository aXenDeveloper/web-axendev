import { useTranslations } from 'next-intl';

import style from './NavFaq.module.scss';
import { ItemNavFaq } from './item/ItemNavFaq';

import { faqData } from '../../faqData';

export const NavFaq = () => {
  const t = useTranslations('faq');

  return (
    <aside className={style.wrapper}>
      <div>
        <ul className="styled-scrollbar">
          {faqData.map(category => (
            <li className={style.category} key={category.id}>
              {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
              {/* @ts-expect-error */}
              {category.id !== 'global' && <span>{t(category.id)}</span>}

              <ul>
                {category.items.map(item => (
                  <ItemNavFaq key={item.id} {...item} />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
