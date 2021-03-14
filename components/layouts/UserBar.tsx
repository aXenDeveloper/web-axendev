import ChangeLang from '../ChangeLang';
import DrawerMobile from './DrawerMobile';

const UserBar = () => (
  <ul className="userBar">
    <li className="responsive_show:desktop">
      <ChangeLang />
    </li>

    <li>
      <DrawerMobile />
    </li>
  </ul>
);

export default UserBar;
