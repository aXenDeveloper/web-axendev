import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const FooterGridQuickMenu = () => {
  const { t } = useTranslation('global');

  return (
    <li className="footer_grid_item">
      <h4 className="footer_grid_item:title">
        {t('footer_title_quickMenu_1')} <span>{t('footer_title_quickMenu_2')}</span>
      </h4>

      <ul className="footer_grid_links">
        <li>
          <Link href="/products">{t('page_products')}</Link>
        </li>

        <li>
          <Link href="/faq">{t('page_faq')}</Link>
        </li>

        <li>
          <Link href="/contact">{t('page_contact')}</Link>
        </li>
      </ul>
    </li>
  );
};

export default FooterGridQuickMenu;
