import { ChangeEvent } from 'react';

import style from './Checkbox.module.scss';

interface Props {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  tabIndex?: number;
}

export const Checkbox = ({ checked, onChange, tabIndex }: Props) => {
  return (
    <input
      tabIndex={tabIndex}
      className={style.wrapper}
      onChange={onChange}
      checked={checked}
      type="checkbox"
    />
  );
};
