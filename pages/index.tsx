import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/home/hero';
import Layout from '../components/layout';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>前端开发人员 - 个人主页</title>
        <meta
          name='description'
          content='前端开发人员'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <section className='flex min-h-[90vh] flex-col items-center justify-center text-gray-600 body-font'>
          <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
            <Hero />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
