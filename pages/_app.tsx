import '@shared/layouts/main/main-layout.scss';
import '@styles/globals.scss';

// import Loader from '@shared/components/spinner';
import { store } from '@store/index';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

import NextNProgress from 'nextjs-progressbar';

import { ConfigProvider, theme } from 'antd';
import { Session } from "next-auth";
import { SessionProvider as AuthProvider } from "next-auth/react";

import { Provider } from 'react-redux';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: { session?: Session; };
};
function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <AuthProvider session={session}>
        <ConfigProvider theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#00b96b',
          },
        }}>
          {getLayout(
            <>
              <NextNProgress color='#00b96b' options={{ showSpinner: false }} showOnShallow height={6} />
              <Component {...pageProps} />
            </>
          )}</ConfigProvider>
      </AuthProvider>
    </Provider>
  );

}

export default App;
