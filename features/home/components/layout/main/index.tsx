import React from 'react';

import Footer from '@features/home/components/layout/main/footer';
import Header from '@features/home/components/layout/main/header';
import Sidebar from '@features/home/components/layout/main/sidebar';
import Head from 'next/head';

export type Props = {
  children: React.ReactNode;
};

const CmsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-light text-white min-vh-100">
      <Head>
        <title>Home</title>
      </Head>
      <header>
        <Header></Header>
      </header>
      <nav>
        <Sidebar></Sidebar>
      </nav>
      <main className="container">{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default CmsLayout;
