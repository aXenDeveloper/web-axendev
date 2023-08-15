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
        id: 'welcome',
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
    id: 'collaboration',
    items: [
      {
        id: 'collaboration.get_started',
        url: '/faq/collaboration'
      }
    ]
  }
];
