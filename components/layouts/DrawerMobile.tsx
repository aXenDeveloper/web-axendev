import { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

const DrawerMobile = () => {
  const { t } = useTranslation('global');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={handleOpenDrawer}
        className="drawer_button_open"
        aria-label={t('drawer_button_open')}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <button
        onClick={handleCloseDrawer}
        className={`drawer_button_close${isOpen ? ' drawer_button_close:active' : ''}`}
        aria-label={t('drawer_button_close')}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className={`drawer${isOpen ? ' drawer:active' : ''}`}>
        <div className="padding">test</div>
      </div>

      <div
        onClick={handleCloseDrawer}
        className={`drawer_background${isOpen ? ' drawer_background:active' : ''}`}
      />
    </>
  );
};

export default DrawerMobile;
