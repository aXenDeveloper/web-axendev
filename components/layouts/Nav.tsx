import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation('global');

  return (
    <nav>
      <div className="container responsive_show:desktop">
        <ul className="navBar">
          <li className={pathname == '/' ? 'active' : ''}>
            <Link href="/">{t('page_home')}</Link>
          </li>

          <li className={pathname == '/products' ? 'active' : ''}>
            <Link href="/products">{t('page_products')}</Link>
          </li>

          <li className={pathname == '/contact' ? 'active' : ''}>
            <Link href="/contact">{t('page_contact')}</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
