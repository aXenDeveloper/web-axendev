import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';
import SkillsHome from '../components/home/SkillsHome';
import DoHome from '../components/home/DoHome';
import CooperationHome from '../components/home/cooperation/CooperationHome';
import ClientHome from '../components/home/ClientHome';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome />
      <DoHome />
      <CooperationHome />
      <ClientHome />
      <SkillsHome />
    </Layout>
  );
};

export default HomePage;
