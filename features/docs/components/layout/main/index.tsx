import Sidebar from '@features/docs/components/layout/main/sidebar';
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
        <Sidebar {...{ children }}></Sidebar>
      </div>
    </>
  );
};

export default DocumentationLayout;
