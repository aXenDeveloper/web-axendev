import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductsCategory = () => {
  const { asPath } = useRouter();
  const currentPath = asPath.split('/')[2];
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
            <Link href="/products/ips-community-suite">IPS Community Suite</Link>
          </li>

          <li className={`products_category_item${currentPath === 'react' ? ' products_category_item:active' : ''}`}>
            <Link href="/products/react">React</Link>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default ProductsCategory;