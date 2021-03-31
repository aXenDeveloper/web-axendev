import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import ChangeLang from '../ChangeLang';
import NavItems from './nav/NavItems';
import DarkButton from './DarkButton';
import GitHubButton from './GitHubButton';

const DrawerMobile = () => {
  const { t } = useTranslation('global');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpenDrawer}
        className="drawer_button drawer_button_open"
        aria-label={t('drawer_button_open')}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <button
        onClick={handleCloseDrawer}
        className={`drawer_button drawer_button_close${
          isOpen ? ' drawer_button_close:active' : ''
        }`}
        aria-label={t('drawer_button_close')}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className={`drawer${isOpen ? ' drawer:active' : ''}`}>
        <ul className="drawer_action">
          <li>
            <DarkButton />
          </li>
          <li>
            <ChangeLang />
          </li>
        </ul>

        <nav className="drawer_nav">
          <ul className="drawer_nav_list">
            <NavItems />
          </ul>
        </nav>

        <div className="drawer_github">
          <GitHubButton />
        </div>
      </div>

      <div
        onClick={handleCloseDrawer}
        className={`drawer_background${isOpen ? ' drawer_background:active' : ''}`}
      />
    </>
  );
};

export default DrawerMobile;
