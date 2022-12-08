import React from 'react';

import Footer from '@features/home/components/layout/main/footer';
import Header from '@features/home/components/layout/main/header';
import Head from 'next/head';

export type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header>
        <Header></Header>
      </header>
      {/* <aside>
        <Sidebar></Sidebar>
      </aside> */}
      <main className="min-vh-75">{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
