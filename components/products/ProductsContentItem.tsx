import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { FC } from 'react';
import { ProductsContentItemType } from '../../types/components/productsTypes';

const ProductsContentItem: FC<ProductsContentItemType> = ({ product }) => {
  const { name, img, price } = product;
  const { t } = useTranslation('global');

  return (
    <li className="products_content_item">
      <div className="products_content_item_generic">
        <div className="products_content_item_generic:img">
          <Image
            src={img || 'https://raw.githubusercontent.com/aXenDeveloper/ips-administrative-bar/master/1.png'}
            objectFit="cover"
            layout="fill"
          />
        </div>

        <div className="products_content_item_generic:price">
          {price.price ? `$${price.price}` : t('products_price_free')}
        </div>
      </div>

      <div className="products_content_item_main">
        <h4>{name}</h4>

        <p>Test desc</p>

        <div className="products_content_item_main_buttons">test</div>
      </div>
    </li>
  );
};

export default ProductsContentItem;
