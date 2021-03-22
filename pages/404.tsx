import useTranslation from 'next-translate/useTranslation';
import ErrorPage from '../components/ErrorPage';
import Breadcrumb from '../components/layouts/Breadcrumb';
import Layout from '../components/layouts/Layout';

const Error404Page = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Breadcrumb>{t('page_404')}</Breadcrumb>

      <ErrorPage code={'404 Not Found'}>{t('error_text_404')}</ErrorPage>

      <Breadcrumb>{t('page_404')}</Breadcrumb>
    </Layout>
  );
};

export default Error404Page;
