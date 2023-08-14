import { ItemsNavFaqType } from './wrapper/list/item/ItemNavFaq';

interface NavFaqType {
  id: string;
  items: ItemsNavFaqType[];
}

export const faqData: NavFaqType[] = [
  {
    id: 'global',
    items: [
      {
        id: 'faq',
        url: '/faq'
      },
      {
        id: 'test',
        url: '/faq/test',
        children: [
          {
            id: 'testChild',
            url: '/faq/test/testChild'
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
        id: 'tes2',
        url: '/faq/tes2',
        children: [
          {
            id: 'tasfasf',
            url: '/faq/tes2/child'
          }
        ]
      }
    ]
  }
];
