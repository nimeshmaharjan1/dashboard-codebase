import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const Page: NextPage<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen mx-auto flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 py-6">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Page;
