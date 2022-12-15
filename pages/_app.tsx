import '@shared/layouts/main/main-layout.scss';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { store } from '@store/index';

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
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  )

}

export default App;
