import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import useTranslation from 'next-translate/useTranslation';
import ContactForm from '../components/contact/ContactForm';
import Breadcrumb from '../components/layouts/Breadcrumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useRouter } from 'next/router';

const ContactPage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_contact')} - aXenDev.net</title>
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>

      <Breadcrumb>{t('page_contact')}</Breadcrumb>

      <main className="container container:small">
        <h1 className="page_title">{t('page_contact')}</h1>

        <div className="contact box padding">
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA}
            language={locale}
          >
            <ContactForm />
          </GoogleReCaptchaProvider>
        </div>
      </main>

      <Breadcrumb>{t('page_contact')}</Breadcrumb>
    </Layout>
  );
};

export default ContactPage;
