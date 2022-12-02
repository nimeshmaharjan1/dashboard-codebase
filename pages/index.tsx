import CmsLayout from '@features/home/components/layout/main';
import { NextPageWithLayout } from '@pages/_app';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ReactImage from '../public/assets/react.svg';
const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <section className="hero-section py-3 py-md-5 py-xl-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pt-3 mb-5 mb-lg-0">
              <h1 className="site-headline fw-bold mb-3">
                Launch and promote your software project like a pro
              </h1>
              <div className="site-tagline fw-light mb-4">
                Designed for entrepreneurial software developers, CoderPro is
                the ultimate Bootstrap 5 Template for promoting or selling .
              </div>
              <div className=" mb-lg-3">
                <Link href="pricing.html">
                  <a className="btn btn-primary me-2 mb-3">Get Started Free</a>
                </Link>
                <Link href="docs.html">
                  <a className="btn btn-secondary mb-3">View Docs</a>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <div
                className="pt-5"
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingBottom: '20%',
                }}
              >
                <Image
                  src={ReactImage}
                  alt="logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = (page: React.ReactElement) => {
  return <CmsLayout>{page}</CmsLayout>;
};
