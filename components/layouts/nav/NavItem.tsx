import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItemType } from '../../../types/components/navType';

const NavItem = ({ name, icon }: NavItemType) => {
  const { asPath } = useRouter();
  const getPathSplit = asPath.split('/')[1].split('?')[0];
  const { t } = useTranslation('global');

  const getNamePath = name === 'home' ? '' : name;

  return (
    <li className={getPathSplit == getNamePath ? 'active' : ''}>
      <Link href={`/${getNamePath}`}>
        <a>
          <FontAwesomeIcon icon={icon} /> {t(`page_${name}`)}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
