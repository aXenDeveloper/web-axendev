import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { ProductsCategoryPageStaticPropsType, ProductsCategoryPageType } from '../../types/pagesTypes';
import Layout from '../../components/layouts/Layout';
import ProductsContent from '../../components/products/ProductsContent';
import productsDataAPI from '../../components/api/productsDataAPI';
import ProductsCategory from '../../components/products/ProductsCategory';

const ProductsCategoryPage: FC<ProductsCategoryPageType> = ({ productsFilterByCategory, category }) => {
  const { t } = useTranslation('global');
  const { push, query } = useRouter();

  const [data, setData] = useState(productsFilterByCategory);
  const [sortData, setSortData] = useState('DESC');

  useEffect(() => {
    setData([...productsFilterByCategory]);
  }, [productsFilterByCategory]);

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
        pathname: `/products/${category}`,
        query: { sort: typeSort }
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Layout>
      <Head>
        <title>Category - aXenDev.net</title>
      </Head>

      <main className="container">
        <h1>{t(`page_products_${category}`)}</h1>

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { category: 'react' } }, { params: { category: 'ips-community-suite' } }],
    fallback: false
  };
};

export const getStaticProps = async ({ params }: ProductsCategoryPageStaticPropsType) => {
  const filterData = productsDataAPI.filter(el => el.category === params.category);

  return {
    props: { productsFilterByCategory: filterData, category: params.category }
  };
};

export default ProductsCategoryPage;
