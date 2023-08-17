'use client';

import {
  Comment24Filled,
  Apps24Regular,
  Apps24Filled,
  Comment24Regular,
  Question24Filled,
  Question24Regular,
  Mail24Filled,
  Mail24Regular
} from '@fluentui/react-icons';

import { ItemNavProps } from './item/ItemNav';

export const useStateNav = (): ItemNavProps[] => {
  return [
    {
      id: 'forum',
      href: '/forum',
      icons: {
        active: <Comment24Filled />,
        unActive: <Comment24Regular />
      }
    },
    {
      id: 'products',
      href: '/products',
      icons: {
        active: <Apps24Filled />,
        unActive: <Apps24Regular />
      },
      activeWithChildren: true
    },
    {
      id: 'faq',
      href: '/faq',
      icons: {
        active: <Question24Filled />,
        unActive: <Question24Regular />
      },
      activeWithChildren: true
    },
    {
      id: 'contact',
      href: '/contact',
      icons: {
        active: <Mail24Filled />,
        unActive: <Mail24Regular />
      }
    }
  ];
};
