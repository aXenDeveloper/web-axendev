'use client';

import { useFloatingPortalNode } from '@floating-ui/react';
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import { GlobalContext } from '@/hooks/useGlobal';

interface Props {
  children: ReactNode;
}

export const Provider = ({ children }: Props) => {
  const portalNode = useFloatingPortalNode({
    id: 'floating'
  });

  return (
    <ThemeProvider>
      <GlobalContext.Provider
        value={{
          floatingPortalNode: portalNode
        }}
      >
        {children}
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};
