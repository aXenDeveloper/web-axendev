import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { CONFIG } from '@/config';
import '@/styles/global.scss';

export function generateMetadata(): Metadata {
  const desc =
    "I'm Maciej Piotr Balcerzak and I'm working as Software Engineer with a passion for creating beautiful and user-friendly products. I have experience in frontend, back-end, testing and UX/UI design, but my primary experience is frontend. Also I'm contributor for Invision Community making themes and apps.";

  return {
    title: {
      default: CONFIG.title,
      template: `%s - ${CONFIG.title}`
    },
    icons: {
      shortcut: '/icons/favicon.ico',
      apple: '/icons/favicon.ico',
      icon: '/icons/favicon.ico'
    },
    description: desc,
    metadataBase: new URL('https://axendev.net/'),
    openGraph: {
      title: CONFIG.title,
      description: desc,
      images: [
        {
          url: '/icons/og.png',
          width: 1050,
          height: 350,
          alt: CONFIG.title
        }
      ]
    }
  };
}

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
