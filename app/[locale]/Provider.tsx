'use client';

import { useFloatingPortalNode } from '@floating-ui/react';
import { ReactNode, useEffect } from 'react';

import { GlobalContext } from '../../hooks/useGlobal';

interface Props {
  children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  const portalNode = useFloatingPortalNode({
    id: 'floating'
  });

  useEffect(() => {
    const checkDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (
      (checkDark && !localStorage.getItem('aXenDev_theme_manual')) ||
      localStorage.getItem('aXenDev_theme') === 'dark'
    ) {
      document.documentElement.setAttribute('theme', 'dark');
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        floatingPortalNode: portalNode
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
