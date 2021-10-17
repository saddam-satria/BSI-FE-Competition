import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';
import { useState } from 'react';
import ArrowUp from '../components/arrowUp';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState(false);

  return (
    <>
      <Head>
        <meta name="description" content="Website jasa design dan pembuatan web" />
        <meta property="og:title" content="!lose" key="!lose" />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>!lose</title>
      </Head>

      <div className="dark:bg-dark">
        <div className="mb-4 dark:bg-dark">
          <Navbar mode={mode} setMode={setMode} />
        </div>
        <div className="dark:bg-dark pb-16">
          <div className="mx-8 sm:mx-12 2xl:mx-48">
            <Component {...pageProps} />
          </div>
        </div>
        <ArrowUp mode={mode} />
      </div>
    </>
  );
}

export default MyApp;
