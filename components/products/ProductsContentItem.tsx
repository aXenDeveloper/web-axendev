import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ProductsContentItemType } from '../../types/components/productsTypes';

const ProductsContentItem: FC<ProductsContentItemType> = ({ product }) => {
  const { name, img, price, links, key, category } = product;
  const { t } = useTranslation('global');

  return (
    <li className="products_content_item">
      <div className="products_content_item_generic">
        <div className="products_content_item_generic:img">
          <Image
            src={img || 'https://raw.githubusercontent.com/aXenDeveloper/ips-administrative-bar/master/1.png'}
            objectFit="cover"
            layout="fill"
            placeholder="blur"
          />
        </div>

        <div className="products_content_item_generic:price">
          {price.price ? `$${price.price.toFixed(2)}` : t('products_price_free')}
        </div>
      </div>

      <div className="products_content_item_main">
        <h4>{name}</h4>
        <span className="text:light">
          {t('products_in')}:{' '}
          <Link href={`/products/${category}`}>
            <a className="text_weight:700">{t(`products_category_${category}`)}</a>
          </Link>
        </span>

        <p>{t(`products_desc_${key}`)}</p>

        <ul className="products_content_item_main_buttons">
          {price.link && (
            <li>
              <a
                href={links[price.link]}
                className="button button_medium button_primary"
                target="blank"
                rel="noopener nofollow"
              >
                <FontAwesomeIcon icon={faShoppingCart} /> {t('products_buyNow')}
              </a>
            </li>
          )}

          {links.github && (
            <li>
              <a href={links.github} className="button button_medium button_primary" target="blank" rel="noopener nofollow">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </li>
          )}

          {links.ipsmarketplace && (
            <li>
              <a
                href={links.ipsmarketplace}
                className="button button_medium button_light"
                target="blank"
                rel="noopener nofollow"
              >
                IPS Marketplace
              </a>
            </li>
          )}

          {links.demo && (
            <li>
              <a href={links.demo} className="button button_medium button_light" target="blank" rel="noopener nofollow">
                Demo
              </a>
            </li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default ProductsContentItem;
