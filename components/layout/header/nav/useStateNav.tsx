import { Mail, Blocks, HelpCircle, MessagesSquare } from 'lucide-react';

import { ItemNavProps } from './item/ItemNav';

export const useStateNav = (): ItemNavProps[] => {
  return [
    {
      id: 'forum',
      href: '/forum',
      icon: <MessagesSquare />
    },
    {
      id: 'products',
      href: '/products',
      icon: <Blocks />,
      activeWithChildren: true
    },
    {
      id: 'faq',
      href: '/faq',
      icon: <HelpCircle />,
      activeWithChildren: true
    },
    {
      id: 'contact',
      href: '/contact',
      icon: <Mail />
    }
  ];
};
