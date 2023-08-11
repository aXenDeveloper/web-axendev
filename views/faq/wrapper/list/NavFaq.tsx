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
            id: 'faq1',
            url: '/faq1'
          }
        ]
      }
    ]
  }
];

export const NavFaq = () => {
  return (
    <aside className={style.wrapper}>
      {temp.map(category => (
        <div className={style.category} key={category.id}>
          <span>{category.id}</span>

          <div>
            {category.items.map(item => (
              <ItemNavFaq key={item.id} {...item} />
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};
