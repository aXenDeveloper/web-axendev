import NavItems from './NavItems';

const Nav = () => (
  <nav>
    <div className="container responsive_show:desktop">
      <ul className="navBar">
        <NavItems />
      </ul>
    </div>
  </nav>
);

export default Nav;
