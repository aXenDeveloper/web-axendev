import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import HeaderHome from '../components/home/HeaderHome';
import TabsHome from '../components/home/tabs/TabsHome';

const Home = () => {
  return (
    <Layout desableBreadcrumb>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderHome />
      <main className="container">
        <TabsHome />
      </main>
    </Layout>
  );
};

export default Home;
