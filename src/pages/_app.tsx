import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';
import {Box, Container} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fbae09',
      },
      secondary: {
        main: '#0fa8bfd1',
      },
    },
  });
  return <>
    <Head>
      <link rel="icon" href="/esfera.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <title> dbs.argentina </title>
    </Head>
    <Provider store={store}>
      <ThemeProvider  theme={theme}>
        <Box sx={{ minHeight: '100vh', py: 5, display: 'flex', alignItems: 'center' }}>

        <Container maxWidth='md' className='box shadow-drop-center' >

          <Component {...pageProps} />
        </Container>
      </Box>
      </ThemeProvider>
      
      
    </Provider>
  </>
}
