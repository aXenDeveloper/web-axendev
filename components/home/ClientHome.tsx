import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

const ClientHome = () => {
  const { t } = useTranslation('global');

  return (
    <section className="home_section">
      <div className="container container:small">
        <div className="home_section_contant">
          <h2 className="home_section_contant_title">
            {t('home_client_title_1')}{' '}
            <span className="text:gradient">{t('home_client_title_2')}</span>{' '}
            {t('home_client_title_3')}!
          </h2>

          <p>{t('home_client_list_title')}</p>
          <ul>
            <li>
              {t('home_client_list_1_1')}{' '}
              <span className="text:color text_weight:700">{t('home_client_list_1_2')}</span>{' '}
              {t('home_client_list_1_3')}
            </li>
            <li>
              {t('home_client_list_2_1')} <span className="text:color text_weight:700">SEO</span>
              {t('home_client_list_2_2')}
            </li>
            <li>{t('home_client_list_3')}</li>
            <li>
              {t('home_client_list_4')} <span className="text:color text_weight:700">GitHub</span>
            </li>
          </ul>

          <div className="home_section_contant_buttons">
            <Link href="/contact">
              <a className="button button_large button_primary">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} /> {t('page_contact')}
                </span>
              </a>
            </Link>
          </div>
        </div>

        <div className="home_section_image">
          <Image
            src="/freepik/home_client.svg"
            objectFit="cover"
            layout="responsive"
            width={470}
            height={450}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
};

export default ClientHome;
