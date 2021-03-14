import Logo from './Logo';
import Nav from './Nav';
import UserBar from './UserBar';

const Header = () => {
  return (
    <header>
      <div className="container flex flex-jc:between flex-ai:center padding">
        <Logo />

        <UserBar />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
