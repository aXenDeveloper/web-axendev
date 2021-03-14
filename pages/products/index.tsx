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

        <div className="products">
          <div className="products_nav box">
            <div className="box_title">
              <h3>Category</h3>
            </div>

            <div className="padding:half">
              <ul>
                <li>test</li>
              </ul>
            </div>
          </div>

          <div className="products_content">content</div>
        </div>
      </main>
    </Layout>
  );
};

export default Products;
