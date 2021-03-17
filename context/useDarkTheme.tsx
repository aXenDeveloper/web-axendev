import { createContext, useContext } from 'react';
import { DarkThemeContextType } from '../types/api/contextTypes';

export const DarkThemeContext = createContext<DarkThemeContextType | null>(null);

export const useDarkTheme = () => useContext(DarkThemeContext);
