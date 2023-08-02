import {
  Checkmark24Filled,
  ErrorCircle24Filled,
  Warning24Filled,
  Info24Filled
} from '@fluentui/react-icons';
import { ReactNode } from 'react';
import cs from 'classnames';

import style from './Message.module.scss';

export type MessageKindTypes = 'info' | 'success' | 'warning' | 'error';

interface Props {
  children: ReactNode;
  id: string;
  kind?: MessageKindTypes;
  title?: string;
}

export const Message = ({ children, id, kind = 'info', title }: Props) => {
  const generateIcon = () => {
    if (kind === 'error') {
      return <ErrorCircle24Filled />;
    }

    if (kind === 'warning') {
      return <Warning24Filled />;
    }

    if (kind === 'success') {
      return <Checkmark24Filled />;
    }

    return <Info24Filled />;
  };

  return (
    <div className={cs(style.wrapper, style[kind])} data-testid={`message_${kind}_${id}`}>
      {generateIcon()}
      <div className={style.content}>
        {title && <span className={style.title}>{title}</span>}
        <p className={style.desc}>{children}</p>
      </div>
    </div>
  );
};
