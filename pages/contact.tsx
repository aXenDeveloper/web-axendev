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

      <main className="container">
        <h1 className="page_title">{t('page_contact')}</h1>

        <div className="contact">
          <ContactForm />

          <div className="contact_other">test123</div>
        </div>
      </main>
    </Layout>
  );
};

export default ContactPage;
