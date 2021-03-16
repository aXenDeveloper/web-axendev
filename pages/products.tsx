import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import ProductsContent from '../components/products/ProductsContent';

const Products = ({ products }) => {
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

          <ProductsContent products={products} />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/products');
  const data = await res.json();

  return {
    props: { products: data }
  };
};

export default Products;
