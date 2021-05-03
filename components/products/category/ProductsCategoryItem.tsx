import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { FC } from 'react';
import { ProductsCategoryItemType } from '../../../types/components/productsTypes';

const ProductsCategoryItem: FC<ProductsCategoryItemType> = ({ name, currentPath }) => {
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
