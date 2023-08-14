import style from './NavFaq.module.scss';
import { ItemNavFaq } from './item/ItemNavFaq';

import { faqData } from '../../faqData';

export const NavFaq = () => {
  return (
    <aside className={style.wrapper}>
      <div>
        <ul>
          {[...faqData, ...faqData, ...faqData, ...faqData].map(category => (
            <li className={style.category} key={category.id}>
              <span>{category.id}</span>

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
