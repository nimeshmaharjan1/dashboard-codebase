import Footer from '@features/docs/components/layout/main/footer';
import Header from '@features/docs/components/layout/main/header';
import Head from 'next/head';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const DocumentationLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Docs - Code Base</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ minHeight: '100vh' }}
      >
        <Header></Header>
        <main className="container">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default DocumentationLayout;
