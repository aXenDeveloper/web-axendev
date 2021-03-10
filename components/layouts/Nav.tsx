import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <div className="container">
        <ul className="navBar">
          <li className={pathname == '/' ? 'active' : ''}>
            <Link href="/">Home</Link>
          </li>
          <li className={pathname == '/contact' ? 'active' : ''}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
