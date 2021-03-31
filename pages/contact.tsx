import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import useTranslation from 'next-translate/useTranslation';
import ContactForm from '../components/contact/ContactForm';
import Breadcrumb from '../components/layouts/breadcrumb/Breadcrumb';
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
        <meta name="description" content="Masz pytanie? Skontaktuj się ze mną przez formularz" />
      </Head>

      <Breadcrumb top>{t('page_contact')}</Breadcrumb>

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
