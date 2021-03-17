import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import productsDataAPI from '../components/api/productsDataAPI';
import Layout from '../components/layouts/Layout';
import ProductsContent from '../components/products/ProductsContent';

const Products = ({ products }) => {
  const { t } = useTranslation('global');
  const { query } = useRouter();
  const [dataProducts, setDataProducts] = useState(products);
  const [querySort, setQuerySort] = useState({ sort: 'DESC', category: '' });

  const sortData = (el: string) => {
    const sortedProducts = [...products].sort((a, b) => {
      const sortType = {
        priceDESC: a.price.price - b.price.price,
        priceASC: b.price.price - a.price.price,
        DESC: 1,
        ASC: -1
      };

      return sortType[el];
    });

    setDataProducts(sortedProducts);
  };

  useEffect(() => {
    if (query.sort === 'DESC') {
      sortData('DESC');
      setQuerySort({ sort: 'DESC', category: querySort.category });
    }
    if (query.sort === 'ASC') {
      sortData('ASC');
      setQuerySort({ sort: 'ASC', category: querySort.category });
    }
    if (query.sort === 'priceDESC') sortData('priceDESC');
    if (query.sort === 'priceASC') sortData('priceASC');
  }, [query.sort]);

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

          <ProductsContent products={dataProducts} querySort={querySort} />
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
