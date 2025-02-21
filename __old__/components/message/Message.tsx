import { XCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { ReactNode } from 'react';
import cx from 'clsx';

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
      return <XCircle />;
    }

    if (kind === 'warning') {
      return <AlertTriangle />;
    }

    if (kind === 'success') {
      return <CheckCircle />;
    }

    return <Info />;
  };

  return (
    <div className={cx(style.wrapper, style[kind])} data-testid={`message_${kind}_${id}`}>
      {generateIcon()}
      <div className={style.content}>
        {title && <span className={style.title}>{title}</span>}
        <p className={style.desc}>{children}</p>
      </div>
    </div>
  );
};
