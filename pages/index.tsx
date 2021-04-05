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
        <title>aXenDev - Front-end Developer</title>
        <meta property="og:title" content="aXenDev - Front-end Developer" />
        <meta property="og:url" content="https://axendev.net" />
        <meta
          name="description"
          content="Usługi tworzenia stron internetowych oraz aplikacji front-end / IPS Invision Community, które budują tętniącą życiem społeczność"
        />
        <meta
          name="og:description"
          content="Usługi tworzenia stron internetowych oraz aplikacji front-end / IPS Invision Community, które budują tętniącą życiem społeczność"
        />
        <meta property="og:image" content="https://axendev.net/assets/img_metatag.png" />
      </Head>

      <HeaderHome />
      <ClientHome />
      <CooperationHome />
      <SkillsHome />
    </Layout>
  );
};

export default HomePage;
