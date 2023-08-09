import { ReactNode } from 'react';
import cx from 'clsx';

import style from './Badge.module.scss';
import { MessageKindTypes } from '../message/Message';

interface Props {
  children: ReactNode;
  className?: string;
  kind?: MessageKindTypes;
}

export const Badge = ({ children, className, kind = 'info' }: Props) => (
  <span className={cx(style.wrapper, className, style[kind])}>{children}</span>
);
