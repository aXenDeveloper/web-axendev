import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ErrorPageType = {
  code: string;
};

const ErrorPage: FC<ErrorPageType> = ({ children, code }) => {
  const { t } = useTranslation('global');

  return (
    <div className="container flex flex_ai:center flex_jc:center">
      <div className="errorPage">
        <div className="errorPage_icon">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </div>

        <div className="errorPage_content">
          <span className="errorPage_content:title">{t('error_title')}</span>

          <p>{children}</p>

          <span className="errorPage_content:code">
            {t('error_code')}: <span>{code}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
