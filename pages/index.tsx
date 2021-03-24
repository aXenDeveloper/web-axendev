import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';
import SkillsHome from '../components/home/SkillsHome';
import DoHome from '../components/home/DoHome';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome />
      <DoHome />
      <SkillsHome />
    </Layout>
  );
};

export default HomePage;
