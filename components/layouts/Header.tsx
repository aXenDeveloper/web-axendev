import Logo from './Logo';
import NavBar from './nav/NavBar';
import UserBar from './UserBar';

const Header = () => {
  return (
    <header>
      <div className="container flex flex-jc:between flex-ai:center padding">
        <Logo />

        <UserBar />
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
