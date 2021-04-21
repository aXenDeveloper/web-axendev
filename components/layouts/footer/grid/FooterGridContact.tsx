import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Logo from '../../Logo';

const FooterGridContact = () => {
  const { t } = useTranslation('global');

  return (
    <li className="footer_grid_item text_align:center">
      <Logo />

      <a className="footer_grid_contact:email" href="mailto:ithereplay@gmail.com">
        ithereplay@gmail.com
      </a>

      <Link href="/contact">
        <a className="button button_medium button_primary margin_top:half">
          <span>{t('page_contact')}</span>
        </a>
      </Link>
    </li>
  );
};

export default FooterGridContact;
