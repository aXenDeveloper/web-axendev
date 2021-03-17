import useTranslation from 'next-translate/useTranslation';
import ErrorPage from '../components/ErrorPage';
import Layout from '../components/layouts/Layout';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <ErrorPage code={'404 Not Found'}>{t('error_text_404')}</ErrorPage>
    </Layout>
  );
};

export default Error404Page;
