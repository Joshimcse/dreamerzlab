import Head from 'next/head';
import Map from '../components/Map';
import styles from '../styles/Home.module.css';

import { MAPBOX_TOKEN } from '../config';
import polygonsGeoJSON from '../geojson-polygons-us-state.json';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Interactive Map with Next.js</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Map MAPBOX_TOKEN={MAPBOX_TOKEN} polygonsGeoJSON={polygonsGeoJSON} />
    </div>
  );
};

export default Home;
