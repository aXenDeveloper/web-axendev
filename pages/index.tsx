import Head from 'next/head';
import Layout from '../components/layouts/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>aXenDev.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">Home</main>
    </Layout>
  );
};

export default Home;
