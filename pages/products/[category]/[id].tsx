import { GetStaticPaths } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { FC } from 'react';
import productsDataAPI from '../../../components/api/productsDataAPI';
import Layout from '../../../components/layouts/Layout';
import { productsDataAPIType } from '../../../types/api/productsDataAPIType';
import { ProductsItemPageStaticPropsType, ProductsItemPageType } from '../../../types/pagesTypes';

const ProductsItemPage: FC<ProductsItemPageType> = ({ product }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>
          {product.name} - {t('page_products')} - aXenDev.net
        </title>
      </Head>
      <div>{product.name}</div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mapDataAPI = (locale: string) => {
    return productsDataAPI.map((el: productsDataAPIType) => {
      return {
        params: { category: el.category, id: el.key },
        locale
      };
    });
  };

  return {
    paths: [...mapDataAPI('en'), ...mapDataAPI('pl')],
    fallback: false
  };
};

export const getStaticProps = async ({ params }: ProductsItemPageStaticPropsType) => {
  const filterData = productsDataAPI.find(el => el.key === params.id);

  return {
    props: { product: filterData }
  };
};

export default ProductsItemPage;
