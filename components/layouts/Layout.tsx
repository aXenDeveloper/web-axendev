import { FC } from 'react';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import { LayoutType } from './LayoutsType';

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
