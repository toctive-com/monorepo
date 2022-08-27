import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3333/api/v1/';

/* Localization for  moment.js */
import moment from 'moment';
import 'moment/locale/ar'; // without this line it didn't work
import 'moment/locale/en-gb'; // without this line it didn't work
typeof document !== 'undefined' &&
  document.dir &&
  document.dir.toLowerCase() === 'rtl' &&
  moment.locale('ar');

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
import { appWithTranslation } from 'next-i18next';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to frontend!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}
import i18nextConfig from '../next-i18next.config';
export default appWithTranslation(CustomApp, i18nextConfig);

// export default CustomApp;
