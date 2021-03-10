import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Breadcrumb = () => {
  const { pathname } = useRouter();
  const path = pathname
    .split('/')
    .slice(1)
    .filter(x => x);
  const { t } = useTranslation('common');

  return (
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <FontAwesomeIcon icon={faHome} />
          <Link href="/">{t(`page_home`)}</Link>
        </li>

        {path.map(pageElement => (
          <li key={`page_${pageElement}`}>
            <FontAwesomeIcon icon={faChevronRight} />
            <Link href={`/${path[path.length - 1]}`}>{t(`page_${pageElement}`)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
