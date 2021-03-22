import { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductLinksType } from '../../types/components/productsTypes';

const ProductLinks: FC<ProductLinksType> = ({ price, links }) => {
  const { t } = useTranslation('global');

  return (
    <>
      {price.link && (
        <li>
          <a href={links[price.link]} className="button button_medium button_primary" target="blank" rel="noopener nofollow">
            <span>
              <FontAwesomeIcon icon={faShoppingCart} /> {t('products_buyNow')}
            </span>
          </a>
        </li>
      )}

      {links.github && (
        <li>
          <a href={links.github} className="button button_medium button_primary" target="blank" rel="noopener nofollow">
            <span>
              <FontAwesomeIcon icon={faGithub} /> Github
            </span>
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
    </>
  );
};

export default ProductLinks;
