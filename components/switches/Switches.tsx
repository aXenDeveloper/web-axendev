import cx from 'clsx';

import { LanguageSwitch } from './lang/LanguageSwitch';
import { ThemeSwitch } from './theme/ThemeSwitch';
import style from './Switches.module.scss';

interface Props {
  className?: string;
  disableTooltip?: boolean;
}

export const Switches = ({ className, disableTooltip }: Props) => (
  <div className={cx(style.wrapper, className)}>
    <ThemeSwitch disableTooltip={disableTooltip} />
    <LanguageSwitch />
  </div>
);
