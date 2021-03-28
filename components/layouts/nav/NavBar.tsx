import GitHubButton from './GitHubButton';
import NavItems from './NavItems';

const Nav = () => (
  <div className="container responsive_show:desktop">
    <nav className="nav">
      <ul className="navBar">
        <NavItems />
      </ul>

      <GitHubButton />
    </nav>
  </div>
);

export default Nav;
