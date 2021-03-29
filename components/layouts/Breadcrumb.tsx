import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb: FC = ({ children }) => {
  const { asPath, pathname } = useRouter();
  const path = asPath
    .split('/')
    .slice(1)
    .filter(x => x);
  const { t } = useTranslation('global');

  const [breadcrumbs, setBreadcrumbs] = useState<string[]>();

  useEffect(() => {
    const linkPath = asPath.split('/').filter(x => x);

    const pathArray = linkPath.map((path, i) => {
      return linkPath.slice(0, i + 1).join('/');
    });

    setBreadcrumbs(pathArray.slice(0, pathArray.length - 1));
  }, [asPath]);

  return (
    <div className="container responsive_show:desktop">
      <ul className="breadcrumb">
        <li>
          <FontAwesomeIcon icon={faHome} />
          <Link href="/">{t(`page_home`)}</Link>
        </li>

        {breadcrumbs &&
          breadcrumbs.map((pageElement, index) => {
            const pathNameLang = path
              .slice(0, index + 1)
              .join('_')
              .split('?')[0];

            return (
              <li key={`page_${pageElement}`}>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link href={`/${pageElement}`}>
                  {pathname === '/404' ? t('page_404') : t(`page_${pathNameLang}`)}
                </Link>
              </li>
            );
          })}

        <li className="text:light">
          <FontAwesomeIcon icon={faChevronRight} />
          <span>{children}</span>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
