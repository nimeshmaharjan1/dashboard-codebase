import '@shared/layouts/main/main-layout.scss';
import '@styles/globals.scss';

import type { AppProps } from 'next/app';
import { NextPage } from 'next';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function App({ Component, pageProps: { ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />)

}

export default App;
