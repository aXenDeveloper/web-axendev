'use client';

import { ReactNode, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  useEffect(() => {
    const checkDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (
      (checkDark && !localStorage.getItem('aXenDev_theme_manual')) ||
      localStorage.getItem('aXenDev_theme') === 'dark'
    ) {
      document.documentElement.setAttribute('theme', 'dark');

      return;
    }

    document.documentElement.setAttribute('theme', 'light');
  }, []);

  return <>{children}</>;
};
