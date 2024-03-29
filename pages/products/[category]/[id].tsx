import { FC } from 'react';
import Head from 'next/head';
import { GetStaticPaths } from 'next';
import useTranslation from 'next-translate/useTranslation';
import { productsDataAPIType } from '../../../types/api/productsDataAPIType';
import { ProductsItemPageStaticPropsType, ProductsItemPageType } from '../../../types/pagesTypes';
import productsDataAPI from '../../../components/api/productsDataAPI';
import Layout from '../../../components/layouts/Layout';
import ProductImage from '../../../components/products/item/ProductImage';
import ProductLinks from '../../../components/products/ProductLinks';
import Breadcrumb from '../../../components/layouts/breadcrumb/Breadcrumb';

const ProductsItemPage: FC<ProductsItemPageType> = ({ product }) => {
  const { t } = useTranslation('global');
  const { name, key, img, price, links, category } = product;

  return (
    <Layout>
      <Head>
        <title>
          {name} - {t('page_products')} - aXenDev.net
        </title>
        <meta property="og:title" content={`${name} - ${t('page_products')} - aXenDev.net`} />
        <meta property="og:url" content={`https://axendev.net/products/${category}/${key}`} />
        <meta name="description" content={t(`products_desc_${key}`)} />
        <meta name="og:description" content={t(`products_desc_${key}`)} />
        <meta property="og:image" content={img[0]} />
      </Head>

      <Breadcrumb top>{name}</Breadcrumb>

      <main className="container container:medium">
        <h1 className="page_title">{name}</h1>

        <ul className="box padding products_item">
          <li>
            <h2 className="products_item_h2">
              {t('product_price')}:{' '}
              <span>{price.price ? '$' + price.price.toFixed(2) : t('products_price_free')}</span>
            </h2>
          </li>

          <li>
            <h2 className="products_item_h2">{t('description')}</h2>
            <p className="products_item_p">{t(`products_desc_${key}`)}</p>
          </li>

          <li>
            <h2 className="products_item_h2">{t('links')}</h2>
            <ul className="products_item_links">
              <ProductLinks price={price} links={links} />
            </ul>
          </li>

          <li>
            <h2 className="products_item_h2">{t('graphics')}</h2>
            <ProductImage images={img} />
          </li>
        </ul>
      </main>

      <Breadcrumb>{name}</Breadcrumb>
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
