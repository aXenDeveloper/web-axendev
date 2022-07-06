import { GetStaticProps } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import faqDataAPI from '../components/api/faqDataAPI';
import FaqTabs from '../components/faq/FaqTabs';
import Breadcrumb from '../components/layouts/breadcrumb/Breadcrumb';
import Layout from '../components/layouts/Layout';
import { FaqPageType } from '../types/pagesTypes';

const FaqPage = ({ faqListData }: FaqPageType) => {
  const { t } = useTranslation('global');

  return (
    <Layout>
      <Head>
        <title>{t('page_faq')} - aXenDev.net</title>
        <meta property="og:title" content={`${t('page_faq')} - aXenDev.net`} />
        <meta property="og:url" content="https://axendev.net/faq" />
        <meta name="description" content="Najczęściej zadawane pytania od klientów" />
        <meta name="og:description" content="Najczęściej zadawane pytania od klientów" />
        <meta property="og:image" content="https://axendev.net/assets/img_metatag.png" />
      </Head>

      <Breadcrumb top>{t('page_faq')}</Breadcrumb>

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
