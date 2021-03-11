import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">{t('title')}</main>
    </Layout>
  );
};

export default Home;
