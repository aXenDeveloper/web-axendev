'use client';

import {
  System24Filled,
  System24Regular,
  WeatherMoon24Filled,
  WeatherMoon24Regular,
  WeatherSunny24Filled,
  WeatherSunny24Regular
} from '@fluentui/react-icons';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import style from './ThemeSwitch.module.scss';
import { CONFIG_LOCAL_STORAGE_THEME } from '@/config';

import { Tooltip } from '../../tooltip/Tooltip';

enum ThemeType {
  light = 'light',
  dark = 'dark',
  system = 'system'
}

interface Props {
  disableTooltip?: boolean;
}

export const ThemeSwitch = ({ disableTooltip }: Props) => {
  const t = useTranslations('global');
  const [theme, setTheme] = useState<ThemeType | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem(CONFIG_LOCAL_STORAGE_THEME);

    if (theme === ThemeType.light) {
      setTheme(ThemeType.light);

      return;
    }

    if (theme === ThemeType.dark) {
      setTheme(ThemeType.dark);

      return;
    }

    setTheme(ThemeType.system);
  }, []);

  const handleTheme = (theme: ThemeType) => {
    const checkDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === ThemeType.system) {
      localStorage.removeItem(`${CONFIG_LOCAL_STORAGE_THEME}_manual`);
      localStorage.removeItem(CONFIG_LOCAL_STORAGE_THEME);

      if (checkDark) {
        document.documentElement.setAttribute('theme', 'dark');
      } else {
        document.documentElement.removeAttribute('theme');
      }

      setTheme(theme);

      return;
    }

    localStorage.setItem(`${CONFIG_LOCAL_STORAGE_THEME}_manual`, '1');
    localStorage.setItem(CONFIG_LOCAL_STORAGE_THEME, theme);

    if (theme === ThemeType.dark) {
      document.documentElement.setAttribute('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('theme');
    }

    setTheme(theme);
  };

  const themes = [
    {
      id: ThemeType.light,
      icons: {
        active: <WeatherSunny24Filled />,
        unActive: <WeatherSunny24Regular />
      }
    },
    {
      id: ThemeType.dark,
      icons: {
        active: <WeatherMoon24Filled />,
        unActive: <WeatherMoon24Regular />
      }
    },
    {
      id: ThemeType.system,
      icons: {
        active: <System24Filled />,
        unActive: <System24Regular />
      }
    }
  ];

  return (
    <div className={style.wrapper}>
      {themes.map(item => (
        <Tooltip
          content={t(`theme.${item.id}`)}
          key={item.id}
          disable={disableTooltip}
        >
          <button
            type="button"
            className={cx({
              [style.active]: theme === item.id
            })}
            onClick={() => handleTheme(item.id)}
            aria-label={t(`theme.${item.id}`)}
          >
            {theme === item.id ? item.icons.active : item.icons.unActive}
          </button>
        </Tooltip>
      ))}
    </div>
  );
};