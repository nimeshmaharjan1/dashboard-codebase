import '@shared/layouts/main/main-layout.scss';
import '@styles/globals.scss';

// import Loader from '@shared/components/spinner';
import { store } from '@store/index';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import NextNProgress from 'nextjs-progressbar';

import { ConfigProvider, theme } from 'antd';
import { Provider } from 'react-redux';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <ConfigProvider theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: '#00b96b',
        },
      }}>
        {getLayout(
          <>
            <NextNProgress />
            <Component {...pageProps} />
          </>
        )}</ConfigProvider>
    </Provider>
  )

}

export default App;
