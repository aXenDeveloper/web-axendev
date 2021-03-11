import Head from 'next/head';
import Layout from '../../components/layouts/Layout';
import Tippy from '@tippyjs/react';

const Contact = () => (
  <Layout>
    <Head>
      <title>Contact - aXenDev.net</title>
    </Head>

    <main className="container">
      <Tippy content={<span>Tooltip</span>}>
        <button>My button</button>
      </Tippy>
    </main>
  </Layout>
);

export default Contact;
