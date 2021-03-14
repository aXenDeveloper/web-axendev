import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Layout from '../../components/layouts/Layout';

const Products = () => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_products')} - aXenDev.net</title>
      </Head>

      <main className="container">
        <h1>{t('page_products')}</h1>
      </main>
    </Layout>
  );
};

export default Products;
