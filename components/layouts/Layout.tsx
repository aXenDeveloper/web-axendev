import { FC } from 'react';
import Breadcrumb from './Breadcrumb';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Breadcrumb />
      {children}
    </>
  );
};

export default Layout;
