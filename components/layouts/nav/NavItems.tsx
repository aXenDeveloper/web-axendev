import { faCubes, faHome, faPhoneAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';

const NavItems = () => (
  <>
    <NavItem icon={faHome} name="home" />
    <NavItem icon={faCubes} name="products" />
    <NavItem icon={faQuestion} name="faq" />
    <NavItem icon={faPhoneAlt} name="contact" />
  </>
);

export default NavItems;
