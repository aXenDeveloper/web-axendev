import { ReactNode, useEffect, useState } from 'react';
import { DarkThemeContext } from '../../context/useDarkTheme';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [getDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const checkDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkTheme(
      localStorage.getItem('aXenDev_darkTheme')
        ? true
        : false || (checkDark && !localStorage.getItem('aXenDev_darkTheme_manual'))
    );
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
