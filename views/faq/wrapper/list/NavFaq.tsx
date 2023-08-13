import style from './NavFaq.module.scss';
import { ItemNavFaq, ItemsNavFaqType } from './item/ItemNavFaq';

interface NavFaqType {
  id: string;
  items: ItemsNavFaqType[];
}

const temp: NavFaqType[] = [
  {
    id: 'global',
    items: [
      {
        id: 'faq',
        url: '/faq',
        children: [
          {
            id: 'faq/child',
            url: '/faq/child'
          }
        ]
      },
      {
        id: 'faq/test',
        url: '/faq/test',
        children: [
          {
            id: 'faq1',
            url: '/faq1'
          }
        ]
      },
      {
        id: 'faq/test3',
        url: '/faq/test3'
      }
    ]
  },
  {
    id: 'main',
    items: [
      {
        id: 'faq/test2',
        url: '/faq/tes2',
        children: [
          {
            id: 'faq/test2/child',
            url: '/faq/test2/child'
          }
        ]
      }
    ]
  }
];

export const NavFaq = () => {
  return (
    <aside className={style.wrapper}>
      <div>
        <ul>
          {[...temp, ...temp, ...temp, ...temp].map(category => (
            <li className={style.category} key={category.id}>
              <span>{category.id}</span>

              <div>
                {category.items.map(item => (
                  <ItemNavFaq key={item.id} {...item} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
