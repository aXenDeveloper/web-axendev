import cx from 'classnames';

import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={style.main}>
      <div className={cx('layout_wrapper', style.wrapper)}>Test</div>
    </footer>
  );
};
