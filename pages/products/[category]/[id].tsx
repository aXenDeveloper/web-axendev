import { FC } from 'react';
import Head from 'next/head';
import { GetStaticPaths } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { productsDataAPIType } from '../../../types/api/productsDataAPIType';
import { ProductsItemPageStaticPropsType, ProductsItemPageType } from '../../../types/pagesTypes';
import productsDataAPI from '../../../components/api/productsDataAPI';
import Layout from '../../../components/layouts/Layout';
import ProductImage from '../../../components/products/item/ProductImage';

const ProductsItemPage: FC<ProductsItemPageType> = ({ product }) => {
  const { t } = useTranslation('global');
  const { name, key, img } = product;

  return (
    <Layout>
      <Head>
        <title>
          {name} - {t('page_products')} - aXenDev.net
        </title>
      </Head>

      <main className="container">
        <h1 className="page_title">{name}</h1>

        <div className="box padding">
          <h2>Description</h2>
          <p>{t(`products_desc_${key}`)}</p>

          <h2>Graphic</h2>

          <ProductImage images={img} />
        </div>
      </main>
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
