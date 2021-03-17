import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItemType } from '../../../types/components/navType';

const NavItem: FC<NavItemType> = ({ name, icon }) => {
  const { pathname } = useRouter();
  const { t } = useTranslation('global');

  const getNamePath = name === 'home' ? '' : name;

  return (
    <li className={pathname == `/${getNamePath}` ? 'active' : ''}>
      <Link href={`/${getNamePath}`}>
        <a>
          <FontAwesomeIcon icon={icon} /> {t(`page_${name}`)}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
