import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3333/api/v1/';

// import moment from 'moment';
// import 'moment/locale/ar'; // without this line it didn't work
// moment.locale('ar');

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; //styles of nprogress
NProgress.configure({ showSpinner: false });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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

export default CustomApp;
