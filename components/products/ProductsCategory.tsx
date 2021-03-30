import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductsCategory = () => {
  const { asPath } = useRouter();
  const currentPath = asPath
    .split('/')
    .join('?')
    .split('?')
    .filter(x => x)[1];
  const { t } = useTranslation('global');

  return (
    <li className="box">
      <div className="box_title">
        <h3>{t('products_categories')}</h3>
      </div>

      <div className="padding:half">
        <ul className="products_category">
          <li
            className={`products_category_item${
              currentPath === 'ips-community-suite' ? ' products_category_item:active' : ''
            }`}
          >
            <Link href="/products/ips-community-suite">
              {t('page_products_ips-community-suite')}
            </Link>
          </li>

          <li
            className={`products_category_item${
              currentPath === 'ips-community-suite-lang' ? ' products_category_item:active' : ''
            }`}
          >
            <Link href="/products/ips-community-suite-lang">
              {t('page_products_ips-community-suite-lang')}
            </Link>
          </li>

          <li
            className={`products_category_item${
              currentPath === 'react' ? ' products_category_item:active' : ''
            }`}
          >
            <Link href="/products/react">{t('page_products_react')}</Link>
          </li>

          <li
            className={`products_category_item${
              currentPath === 'others' ? ' products_category_item:active' : ''
            }`}
          >
            <Link href="/products/others">{t('page_products_others')}</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ProductsCategory;
