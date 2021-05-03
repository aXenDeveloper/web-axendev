import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductsCategoryItem from './ProductsCategoryItem';

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
          <ProductsCategoryItem name="ips-community-suite" currentPath={currentPath} />
          <ProductsCategoryItem name="ips-community-suite-lang" currentPath={currentPath} />
          <ProductsCategoryItem name="react" currentPath={currentPath} />
          <ProductsCategoryItem name="react-native" currentPath={currentPath} />
          <ProductsCategoryItem name="typescript" currentPath={currentPath} />
          <ProductsCategoryItem name="others" currentPath={currentPath} />
        </ul>
      </div>
    </li>
  );
};

export default ProductsCategory;
