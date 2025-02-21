import { createContext, useContext } from 'react';

interface Args {
  floatingPortalNode: HTMLElement | null;
}

export const GlobalContext = createContext<Args>({
  floatingPortalNode: null
});

export const useGlobal = () => useContext(GlobalContext);
