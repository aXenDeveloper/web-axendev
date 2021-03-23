import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Breadcrumb from '../components/layouts/Breadcrumb';
import Layout from '../components/layouts/Layout';

const FaqPage = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_faq')} - aXenDev.net</title>
      </Head>

      <Breadcrumb small>{t('page_faq')}</Breadcrumb>

      <h1 className="page_title">{t('page_faq')}</h1>

      <main className="container container:small">test</main>

      <Breadcrumb small>{t('page_faq')}</Breadcrumb>
    </Layout>
  );
};

export default FaqPage;
