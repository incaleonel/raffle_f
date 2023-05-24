import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store'; 

export default function App({ Component, pageProps }: AppProps) {
  
  return <>
      <Head>
        <link rel="icon" href="/esfera.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Audiowide&family=Yantramanav&display=swap" rel="stylesheet"/>
        <title> dbs.argentina </title>
      </Head>
      <Provider store={store}>

      <Component {...pageProps} />
      </Provider>
    </>
}
