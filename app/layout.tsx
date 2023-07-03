/* eslint-disable @next/next/no-sync-scripts */
import { useLocale } from 'next-intl';
import { Montserrat } from 'next/font/google';
import { ReactNode } from 'react';
import '@/styles/global.scss';

interface Props {
  children: ReactNode;
}

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
});

export default function RootLayout({ children }: Props) {
  const locale = useLocale();

  return (
    <html lang={locale} className={montserrat.className}>
      <body>
        <script src="/aXenDev_theme.js" />
        {children}
      </body>
    </html>
  );
}
