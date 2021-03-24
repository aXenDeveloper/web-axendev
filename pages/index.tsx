import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';
import SkillsHome from '../components/home/SkillsHome';
import DoHome from '../components/home/DoHome';
import CooperationHome from '../components/home/cooperation/CooperationHome';

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
      <SkillsHome />
    </Layout>
  );
};

export default HomePage;
