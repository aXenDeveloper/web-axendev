import {
  faComments,
  faCubes,
  faHome,
  faPhoneAlt,
  faQuestion
} from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';

const NavItems = () => (
  <>
    <NavItem icon={faHome} name="home" />
    <NavItem icon={faComments} name="forum" />
    <NavItem icon={faCubes} name="products" />
    <NavItem icon={faQuestion} name="faq" />
    <NavItem icon={faPhoneAlt} name="contact" />
  </>
);

export default NavItems;
