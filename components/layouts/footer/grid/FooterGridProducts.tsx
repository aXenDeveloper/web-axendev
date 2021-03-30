import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const FooterGridProducts = () => {
  const { t } = useTranslation('global');

  return (
    <li className="footer_grid_item">
      <h4 className="footer_grid_item:title">
        {t('footer_title_products_1')} <span>{t('footer_title_products_2')}</span>
      </h4>

      <ul className="footer_grid_links">
        <li>
          <Link href="/products/ips-community-suite">{t('page_products_ips-community-suite')}</Link>
        </li>

        <li>
          <Link href="/products/ips-community-suite-lang">
            {t('page_products_ips-community-suite-lang')}
          </Link>
        </li>

        <li>
          <Link href="/products/react">{t('page_products_react')}</Link>
        </li>

        <li>
          <Link href="/products/others">{t('page_products_others')}</Link>
        </li>
      </ul>
    </li>
  );
};

export default FooterGridProducts;
