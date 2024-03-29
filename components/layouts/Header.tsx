import Logo from './Logo';
import NavBar from './nav/NavBar';
import UserBar from './UserBar';

const Header = () => {
  return (
    <header className="header">
      <div className="container flex flex_jc:between flex_ai:center padding">
        <Logo header />

        <UserBar />
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
