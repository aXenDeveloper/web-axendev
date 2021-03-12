import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';

const Home = () => {
  return (
    <Layout desableBreadcrumb>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome />
    </Layout>
  );
};

export default Home;
