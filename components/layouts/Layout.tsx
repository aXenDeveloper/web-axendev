import { FC, useEffect, useState } from 'react';
import { DarkThemeContext } from '../../context/useDarkTheme';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }) => {
  const [getDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setDarkTheme(localStorage.getItem('darkTheme') ? true : false);
  }, [getDarkTheme]);

  return (
    <DarkThemeContext.Provider value={{ getDarkTheme, setDarkTheme }}>
      <Header />

      {children}

      <Footer />
    </DarkThemeContext.Provider>
  );
};

export default Layout;
