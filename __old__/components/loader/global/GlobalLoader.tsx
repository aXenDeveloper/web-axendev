import { FloatingPortal } from '@floating-ui/react';

import style from './GlobalLoader.module.scss';

export const GlobalLoader = () => (
  <FloatingPortal>
    <div className={style.wrapper} />
  </FloatingPortal>
);
