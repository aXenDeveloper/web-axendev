import { ReactNode } from 'react';

import { Header } from './header/Header';

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header /> {children}
    </>
  );
};
