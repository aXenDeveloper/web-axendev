import { faCubes, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const HeaderHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section home_top">
      <div className="container">
        <div className="home_section_contant">
          <h1 className="home_section_contant_title">
            {t('home_header_text_amazing')}{' '}
            <span className="text:gradient">{t('home_header_text_projects')}</span>{' '}
            {t('home_header_text_for')}{' '}
            <span className="text:gradient">{t('home_header_text_you')}</span>!
          </h1>

          <p>{t('home_header')}</p>

          <div className="home_section_contant_buttons">
            <Link href="/products">
              <a className="button button_large button_primary">
                <span>
                  <FontAwesomeIcon icon={faCubes} /> {t('home_header_products')}
                </span>
              </a>
            </Link>

            <span className="home_section_contant_buttons:or">{t('home_header_or')}</span>

            <Link href="/contact">
              <a className="button button_large button_light">{t('home_header_cooperate')}</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderHome;
