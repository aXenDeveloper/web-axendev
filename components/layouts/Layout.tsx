import { FC, useEffect, useState } from 'react';
import { DarkThemeContext } from '../../context/useDarkTheme';
import Breadcrumb from './Breadcrumb';
import Header from './Header';
import { LayoutType } from './LayoutsType';

const Layout: FC<LayoutType> = ({ children, desableBreadcrumb }) => {
  const [getDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setDarkTheme(localStorage.getItem('darkTheme') ? true : false);
  }, [getDarkTheme]);

  return (
    <DarkThemeContext.Provider value={{ getDarkTheme, setDarkTheme }}>
      <Header />
      {!desableBreadcrumb && <Breadcrumb />}
      {children}
    </DarkThemeContext.Provider>
  );
};

export default Layout;
