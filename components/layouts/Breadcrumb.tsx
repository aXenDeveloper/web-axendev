import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumb = () => {
  const { asPath } = useRouter();
  const path = asPath
    .split('/')
    .slice(1)
    .filter(x => x);
  const { t } = useTranslation('global');

  return (
    <div className="container responsive_show:desktop">
      <ul className="breadcrumb">
        <li>
          <FontAwesomeIcon icon={faHome} />
          <Link href="/">{t(`page_home`)}</Link>
        </li>

        {path.map((pageElement, index) => {
          const pathNameLang = path.slice(0, index + 1).join('_');

          return (
            <li key={`page_${pageElement}`}>
              <FontAwesomeIcon icon={faChevronRight} />
              <Link href={`/${path[path.length - 1]}`}>{t(`page_${pathNameLang}`)}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
