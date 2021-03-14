import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const DrawerMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = () => setIsOpen(true);
  const handleCloseDrawer = () => setIsOpen(false);

  return (
    <>
      <button onClick={handleOpenDrawer} className="drawer_button_open">
        <FontAwesomeIcon icon={faBars} />
      </button>

      <button onClick={handleCloseDrawer} className={`drawer_button_close${isOpen ? ' drawer_button_close:active' : ''}`}>
        <FontAwesomeIcon icon={faTimes} />
      </button>

      <div className={`drawer${isOpen ? ' drawer:active' : ''}`}>
        <div className="padding">test</div>
      </div>

      <div onClick={handleCloseDrawer} className={`drawer_background${isOpen ? ' drawer_background:active' : ''}`} />
    </>
  );
};

export default DrawerMobile;
