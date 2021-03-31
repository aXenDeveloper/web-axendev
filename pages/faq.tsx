import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { FC } from 'react';
import faqDataAPI from '../components/api/faqDataAPI';
import FaqTabs from '../components/faq/FaqTabs';
import Breadcrumb from '../components/layouts/Breadcrumb';
import Layout from '../components/layouts/Layout';
import { FaqPageType } from '../types/pagesTypes';

const FaqPage: FC<FaqPageType> = ({ faqListData }) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_faq')} - aXenDev.net</title>
      </Head>

      <Breadcrumb>{t('page_faq')}</Breadcrumb>

      <h1 className="page_title">{t('page_faq')}</h1>

      <main className="container container:small">
        <FaqTabs faqListData={faqListData} />
      </main>

      <Breadcrumb>{t('page_faq')}</Breadcrumb>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const faqListData = faqDataAPI;

  return {
    props: { faqListData }
  };
};

export default FaqPage;
