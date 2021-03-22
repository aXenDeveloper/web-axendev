import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import useTranslation from 'next-translate/useTranslation';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_contact')} - aXenDev.net</title>
      </Head>

      <main className="container container:small">
        <h1 className="page_title">{t('page_contact')}</h1>

        <div className="contact">
          <ContactForm />

          <ul className="contact_other">
            <li className="box">
              <div className="box_title">
                <h3>Contact list</h3>
              </div>
              <div className="padding:half">
                <ul className="contact_other_list">
                  <li>
                    <a href="mailto:ithereplay@gmail.com">ithereplay@gmail.com</a>
                  </li>
                  <li>
                    <a href="https://invisioncommunity.com/profile/580858-axendev/" target="blank" rel="noopener nofollow">
                      Invisioncommunity.com
                    </a>
                  </li>
                  <li>
                    <a href="https://invisioncommunity.com/profile/580858-axendev/" target="blank" rel="noopener nofollow">
                      Invisionize.pl
                    </a>
                  </li>
                  <li>
                    <a href="https://pecetowicz.pl/profile/36319-axendev/" target="blank" rel="noopener nofollow">
                      Pecetowicz.pl
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
};

export default ContactPage;
