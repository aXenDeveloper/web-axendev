import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import productsDataAPI from '../../components/api/productsDataAPI';
import Layout from '../../components/layouts/Layout';
import ProductsCategory from '../../components/products/ProductsCategory';
import ProductsContent from '../../components/products/ProductsContent';

const Products = ({ products }) => {
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

export default Products;

/* const sortData = (e: string) => {
    const sortedProducts = dataProducts.sort((a, b) => {
      const sortType = {
        priceDESC: b.price.price - a.price.price,
        priceASC: a.price.price - b.price.price,
        DESC: b.id - a.id,
        ASC: a.id - b.id
      };

      return sortType[e];
    });

    setDataProducts(sortedProducts);
  }; */
