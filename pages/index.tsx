import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';
import SkillsHome from '../components/home/SkillsHome';
import CooperationHome from '../components/home/cooperation/CooperationHome';
import ClientHome from '../components/home/ClientHome';

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>aXenDev.net - Front-end Developer</title>
        <meta
          name="description"
          content="Usługi tworzenia stron internetowych oraz aplikacji front-end / IPS Invision Community, które budują tętniącą życiem społeczność"
        />
      </Head>

      <HeaderHome />
      <ClientHome />
      <CooperationHome />
      <SkillsHome />
    </Layout>
  );
};

export default HomePage;
