import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import HomeDoSVG from '../SVG/HomeDoSVG';

const DoHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section home_section:background">
      <div className="container container:small">
        <div className="home_section_contant">
          <h2 className="home_section_contant_title">
            {t('home_do_title_1')} <span className="text:gradient">{t('home_do_title_2')}</span>?
          </h2>

          <p>{t('home_do')}</p>

          <div className="home_section_contant_buttons">
            <Link href="/faq">
              <a className="button button_large button_primary">
                <span>
                  <FontAwesomeIcon icon={faQuestion} /> {t('page_faq')}
                </span>
              </a>
            </Link>
          </div>
        </div>

        <div className="home_section_image">
          <HomeDoSVG />
        </div>
      </div>
    </section>
  );
};

export default DoHome;
