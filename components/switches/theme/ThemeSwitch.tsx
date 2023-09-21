/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import { Sun, Moon, Computer } from 'lucide-react';
import cx from 'clsx';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import style from './ThemeSwitch.module.scss';

import { Tooltip } from '../../tooltip/Tooltip';

export const ThemeSwitch = () => {
  const t = useTranslations('global');
  const { setTheme, theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('system');

  useEffect(() => {
    if (!theme) return;

    setCurrentTheme(theme);
  }, [theme]);

  const themes = [
    {
      id: 'light',
      icon: <Sun />
    },
    {
      id: 'dark',
      icon: <Moon />
    },
    {
      id: 'system',
      icon: <Computer />
    }
  ];

  return (
    <div className={style.wrapper}>
      {themes.map(item => (
        // @ts-expect-error
        <Tooltip content={t(`theme.${item.id}`)} key={item.id}>
          <button
            type="button"
            className={cx({
              [style.active]: currentTheme === item.id
            })}
            onClick={() => setTheme(item.id)}
            // @ts-expect-error
            aria-label={t(`theme.${item.id}`)}
          >
            {item.icon}
          </button>
        </Tooltip>
      ))}
    </div>
  );
};
