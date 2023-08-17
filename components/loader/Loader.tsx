import cx from 'clsx';

import style from './Loader.module.scss';

interface Props {
  className?: string;
  inline?: boolean;
  padding?: boolean;
}

export const Loader = ({ className, inline, padding }: Props) => (
  <div
    className={cx(style.wrapper, className, {
      [style.inline]: inline,
      [style.padding]: padding
    })}
  >
    <div>
      <svg viewBox="25 25 50 50">
        <circle className={style.circle} cx={50} cy={50} r={20} />
        <circle className={style.circle_background} cx={50} cy={50} r={20} />
      </svg>
    </div>
  </div>
);
