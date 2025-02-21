import cx from 'clsx';

import { LanguageSwitch } from './lang/LanguageSwitch';
import { ThemeSwitch } from './theme/ThemeSwitch';
import style from './Switches.module.scss';

interface Props {
  className?: string;
}

export const Switches = ({ className }: Props) => (
  <div className={cx(style.wrapper, className)}>
    <ThemeSwitch />
    <LanguageSwitch />
  </div>
);
