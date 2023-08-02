import { ReactNode } from 'react';
import '@/styles/global.scss';
import { Metadata } from 'next';

import { CONFIG_TITLE } from '../config';

export function generateMetadata(): Metadata {
  const desc =
    "I'm Maciej Piotr Balcerzak and I'm working as Software Engineer with a passion for creating beautiful and user-friendly products. I have experience in front-end, back-end, testing and UX/UI design, but my primary experience is front-end. Also I'm contributor for Invision Community making themes and apps.";

  return {
    title: {
      default: CONFIG_TITLE,
      template: `%s - ${CONFIG_TITLE}`
    },
    icons: {
      shortcut: '/icons/favicon.ico'
    },
    description: desc,
    themeColor: '#e21124',
    openGraph: {
      title: CONFIG_TITLE,
      description: desc,
      images: [
        {
          url: '/icons/og.png',
          width: 1050,
          height: 350,
          alt: CONFIG_TITLE
        }
      ]
    }
  };
}

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return children;
}
