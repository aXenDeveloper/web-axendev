import { FC } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ProductsPageType } from '../../types/pagesTypes';
import productsDataAPI from '../../components/api/productsDataAPI';
import Layout from '../../components/layouts/Layout';
import ProductsCategory from '../../components/products/ProductsCategory';
import ProductsContent from '../../components/products/ProductsContent';

const ProductsPage: FC<ProductsPageType> = ({ products }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_products')} - aXenDev.net</title>
      </Head>

      <main className="container">
        <h1>test</h1>

        <div className="products">
          <ProductsCategory />

          <div className="products_content">
            <ProductsContent products={products} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { products: productsDataAPI }
  };
};

export default ProductsPage;
