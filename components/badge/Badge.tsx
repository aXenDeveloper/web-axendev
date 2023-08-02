import { ReactNode } from 'react';
import cs from 'classnames';

import style from './Badge.module.scss';
import { MessageKindTypes } from '../message/Message';

interface Props {
  children: ReactNode;
  className?: string;
  kind?: MessageKindTypes;
}

export const Badge = ({ children, className, kind = 'info' }: Props) => (
  <span className={cs(style.wrapper, className, style[kind])}>{children}</span>
);
