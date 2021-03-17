import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ProductsPageType } from '../../types/pagesTypes';
import productsDataAPI from '../../components/api/productsDataAPI';
import Layout from '../../components/layouts/Layout';
import ProductsCategory from '../../components/products/ProductsCategory';
import ProductsContent from '../../components/products/ProductsContent';
import { useRouter } from 'next/router';

const ProductsPage: FC<ProductsPageType> = ({ products }) => {
  const { t } = useTranslation('global');
  const { push, query } = useRouter();

  const [data, setData] = useState(products);
  const [sortData, setSortData] = useState('DESC');

  const handleSelectSortData = (typeSort: string) => {
    setSortData(typeSort);

    const sortData = [...data].sort((a, b) => {
      const sortType: { [typeSort: string]: number } = {
        priceDESC: b.price.price - a.price.price,
        priceASC: a.price.price - b.price.price,
        DESC: b.id - a.id,
        ASC: a.id - b.id
      };

      return sortType[typeSort];
    });

    setData(sortData);

    push(
      {
        pathname: '/products/',
        query: { sort: typeSort }
      },
      undefined,
      { shallow: true }
    );
  };

  useEffect(() => {
    setData([...products]);
    setSortData('DESC');
  }, [products]);

  useEffect(() => {
    switch (query.sort) {
      case 'DESC':
        handleSelectSortData('DESC');
        break;
      case 'ASC':
        handleSelectSortData('ASC');
        break;
      case 'priceDESC':
        handleSelectSortData('priceDESC');
        break;
      case 'priceASC':
        handleSelectSortData('priceASC');
        break;
    }
  }, [query.sort]);

  return (
    <Layout>
      <Head>
        <title>{t('page_products')} - aXenDev.net</title>
      </Head>

      <main className="container">
        <h1>test</h1>

        <div className="products">
          <ProductsCategory handleSelectSortData={handleSelectSortData} sortData={sortData} />

          <div className="products_content">
            <ProductsContent products={data} />
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
