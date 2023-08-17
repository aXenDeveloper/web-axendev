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
        id: 'technology',
        url: '/faq/technology'
      }
      // {
      //   id: 'welcome',
      //   url: '/faq/welcome',
      //   children: [
      //     {
      //       id: 'testChild',
      //       url: '/faq/test/testChild'
      //     }
      //   ]
      // }
      // {
      //   id: 'faq/test3',
      //   url: '/faq/test3'
      // }
    ]
  },
  {
    id: 'collaboration',
    items: [
      {
        id: 'collaboration_pages.get_started',
        url: '/faq/collaboration'
      }
    ]
  }
];
