import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ProductsContentItemType } from '../../../types/components/productsTypes';
import ProductLinks from '../ProductLinks';

const ProductsContentItem: FC<ProductsContentItemType> = ({ product }) => {
  const { name, img, price, links, key, category } = product;
  const { t } = useTranslation('global');

  return (
    <li className="products_content_item">
      <div className="products_content_item_generic">
        <Link href={`/products/${category}/${key}`}>
          <a>
            <div className="products_content_item_generic:img">
              <Image src={img[0]} objectFit="cover" layout="fill" />
            </div>
          </a>
        </Link>

        <div className="products_content_item_generic:price">
          {price.price ? `$${price.price.toFixed(2)}` : t('products_price_free')}
        </div>
      </div>

      <div className="products_content_item_main">
        <Link href={`/products/${category}/${key}`}>
          <a>
            <h4>{name}</h4>
          </a>
        </Link>

        <span className="text:light">
          {t('products_in')}:{' '}
          <Link href={`/products/${category}`}>
            <a className="text_weight:700">{t(`page_products_${category}`)}</a>
          </Link>
        </span>

        <p>{t(`products_desc_${key}`)}</p>

        <ul className="products_content_item_main_buttons">
          <ProductLinks price={price} links={links} />
        </ul>
      </div>
    </li>
  );
};

export default ProductsContentItem;
