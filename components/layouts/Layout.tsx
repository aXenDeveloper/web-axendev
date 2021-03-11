import { FC } from 'react';
import Breadcrumb from './Breadcrumb';
import Header from './Header';

type LayoutType = {
  desableBreadcrumb?: boolean;
};

const Layout: FC<LayoutType> = ({ children, desableBreadcrumb }) => {
  return (
    <>
      <Header />
      {!desableBreadcrumb && <Breadcrumb />}
      {children}
    </>
  );
};

export default Layout;
