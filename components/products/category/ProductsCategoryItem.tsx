import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { ProductsCategoryItemType } from '../../../types/components/productsTypes';

const ProductsCategoryItem = ({ name, currentPath }: ProductsCategoryItemType) => {
  const { t } = useTranslation('global');

  return (
    <li
      className={`products_category_item${
        currentPath === name ? ' products_category_item:active' : ''
      }`}
    >
      <Link href={`/products/${name}`}>{t(`page_products_${name}`)}</Link>
    </li>
  );
};

export default ProductsCategoryItem;
