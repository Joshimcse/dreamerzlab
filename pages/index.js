import Head from 'next/head';
import Map from '../components/Map';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interactive Map with Next.js</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Map />
    </div>
  );
};

export default Home;
