import Head from 'next/head';
import Layout from '../../components/layouts/Layout';
import Tippy from '@tippyjs/react';
import useTranslation from 'next-translate/useTranslation';

const Contact = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_contact')} - aXenDev.net</title>
      </Head>

      <main className="container">
        <h1 className="page_title">{t('page_contact')}</h1>

        <Tippy content={<span>Tooltip</span>}>
          <button>My button</button>
        </Tippy>
      </main>
    </Layout>
  );
};

export default Contact;
