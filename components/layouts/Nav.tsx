import Link from 'next/link';

const Nav = () => (
  <nav>
    <div className="container">
      <ul className="navBar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
