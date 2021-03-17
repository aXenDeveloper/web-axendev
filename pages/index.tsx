import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';

const HomePage = () => {
  return (
    <Layout desableBreadcrumb>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome />
      <main className="container"></main>
    </Layout>
  );
};

export default HomePage;
