import Link from 'next/link';
import Logo from './Logo';
import Nav from './Nav';
import UserBar from './UserBar';

const Header = () => {
  return (
    <header>
      <div className="container flex flex_jc:between flex_ai:center padding">
        <Link href="/">
          <a className="padding:half">
            <Logo />
          </a>
        </Link>

        <UserBar />
      </div>

      <Nav />
    </header>
  );
};

export default Header;