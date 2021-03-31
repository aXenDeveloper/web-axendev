import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faMedkit, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';

const FooterGridFindMe = () => {
  const { t } = useTranslation('global');

  return (
    <li className="footer_grid_item">
      <h4 className="footer_grid_item:title">
        <span>{t('footer_title_findMe_1')}</span> {t('footer_title_findMe_2')}
      </h4>

      <ul className="footer_grid_findMe">
        <li className="footer_grid_findMe_item">
          <a
            href="https://invisioncommunity.com/profile/580858-axendev/"
            target="blank"
            rel="noopener nofollow"
            className="footer_grid_findMe_item_link"
          >
            <span className="footer_grid_findMe_item_link:icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </span>
            Invision Community
          </a>
        </li>

        <li className="footer_grid_findMe_item">
          <a
            href="https://forum.invisionize.pl/profile/19185-axen/"
            target="blank"
            rel="noopener nofollow"
            className="footer_grid_findMe_item_link"
          >
            <span className="footer_grid_findMe_item_link:icon">
              <FontAwesomeIcon icon={faMedkit} />
            </span>
            forum.invisionize.pl
          </a>
        </li>

        <li className="footer_grid_findMe_item">
          <a
            href="https://www.pecetowicz.pl/profile/36319-axendev/"
            target="blank"
            rel="noopener nofollow"
            className="footer_grid_findMe_item_link"
          >
            <span className="footer_grid_findMe_item_link:icon">
              <FontAwesomeIcon icon={faLaptopCode} />
            </span>
            Pecetowicz.pl
          </a>
        </li>
      </ul>
    </li>
  );
};

export default FooterGridFindMe;
