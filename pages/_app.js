import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="Website jasa design dan pembuatan web" />
        <meta property="og:title" content="!lose" key="!lose" />
        <meta name="viewport" content="width=device-width, maximum-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <title>!lose</title>
      </Head>

      <div className="dark:bg-dark h-screen">
        <Navbar />
        <div className="dark:bg-dark">
          <div className="mx-8 sm:mx-12 2xl:mx-48">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
