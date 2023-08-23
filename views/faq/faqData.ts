import { ItemsNavFaqType } from './wrapper/list/item/ItemNavFaq';

interface NavFaqType {
  id: string;
  items: Omit<ItemsNavFaqType, 'parentId'>[];
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
    ]
  },
  {
    id: 'collaboration',
    items: [
      {
        id: 'vat',
        url: '/faq/collaboration/vat'
      },
      {
        id: 'psd_files',
        url: '/faq/collaboration/psd_files'
      }
    ]
  }
];
