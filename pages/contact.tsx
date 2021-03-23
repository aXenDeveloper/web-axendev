import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import useTranslation from 'next-translate/useTranslation';
import ContactForm from '../components/contact/ContactForm';
import Breadcrumb from '../components/layouts/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_contact')} - aXenDev.net</title>
      </Head>

      <Breadcrumb small>{t('page_contact')}</Breadcrumb>

      <main className="container container:small">
        <h1 className="page_title">{t('page_contact')}</h1>

        <div className="contact box padding">
          <ContactForm />

          <div className="contact_other padding:half">
            <ul className="contact_other_list">
              <li className="contact_other_list_item">
                <span className="contact_other_list_item_icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a href="mailto:ithereplay@gmail.com">ithereplay@gmail.com</a>
              </li>
              <li className="contact_other_list_item">
                <span className="contact_other_list_item_icon">
                  <FontAwesomeIcon icon={faComments} />
                </span>
                <a href="https://invisioncommunity.com/profile/580858-axendev/" target="blank" rel="noopener nofollow">
                  Invisioncommunity.com
                </a>
              </li>
              <li className="contact_other_list_item">
                <span className="contact_other_list_item_icon">
                  <FontAwesomeIcon icon={faComments} />
                </span>
                <a href="https://invisioncommunity.com/profile/580858-axendev/" target="blank" rel="noopener nofollow">
                  forum.Invisionize.pl
                </a>
              </li>
              <li className="contact_other_list_item">
                <span className="contact_other_list_item_icon">
                  <FontAwesomeIcon icon={faProductHunt} />
                </span>
                <a href="https://pecetowicz.pl/profile/36319-axendev/" target="blank" rel="noopener nofollow">
                  Pecetowicz.pl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Breadcrumb small>{t('page_contact')}</Breadcrumb>
    </Layout>
  );
};

export default ContactPage;
