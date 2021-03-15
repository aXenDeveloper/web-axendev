import { createContext, useContext } from 'react';
import { DarkThemeContextType } from './contextTypes';

export const DarkThemeContext = createContext<DarkThemeContextType>(null);

export const useDarkTheme = () => useContext(DarkThemeContext);
