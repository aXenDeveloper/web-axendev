'use client';

import {
  Comment24Filled,
  Apps24Regular,
  Apps24Filled,
  Comment24Regular
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
    }
  ];
};
