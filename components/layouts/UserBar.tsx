import ChangeLang from '../ChangeLang';
import DarkButton from './DarkButton';
import DrawerMobile from './DrawerMobile';

const UserBar = () => (
  <ul className="userBar">
    <li>
      <DarkButton />
    </li>

    <li className="responsive_show:desktop">
      <ChangeLang />
    </li>

    <li className="responsive_hide:desktop">
      <DrawerMobile />
    </li>
  </ul>
);

export default UserBar;
