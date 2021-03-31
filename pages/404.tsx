import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import ErrorPage from '../components/ErrorPage';
import Layout from '../components/layouts/Layout';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_404')} - aXenDev.net</title>
        <meta name="robots" content="noindex" />
      </Head>

      <ErrorPage code={'404 Not Found'}>{t('error_text_404')}</ErrorPage>
    </Layout>
  );
};

export default Error404Page;
