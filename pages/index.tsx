import CmsLayout from '@features/home/components/layout/main';
import { NextPageWithLayout } from '@pages/_app';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

import Monitor from '../public/assets/images/monitor.svg';
import Complete from '../public/assets/images/project_complete.svg';
import Surveillance from '../public/assets/images/surveillance.svg';
import ReactImage from '../public/assets/react.svg';
const Dashboard: NextPageWithLayout = () => {
  return (
    <>
      <section className="hero-section py-3 ">
        <div className="container">
          <div className="row align-items-center">
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
                  paddingBottom: '60vh',
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
      {/* How does it works section */}
      <section className="how-section py-5">
        <div className="container my-md-2 my-lg-3 my-xl-4 my-xxl-5">
          <h3 className="mb-3 text-center fw-bold section-title">
            How Does It <span className="text-primary">Work</span>
          </h3>
          <div className="mb-5 text-center section-intro">
            You are only a few simple steps away
          </div>
          <div className="row align-items-center">
            <div className=" col-12 col-md-4 col-sm-6">
              <div className="item">
                <Card className="shadow-sm border-0 mb-lg-0 mb-3 pt-4 pb-2">
                  <Image
                    src={Monitor}
                    width="120px"
                    height="100px"
                    objectFit="contain"
                    className="card-img-top"
                    alt=""
                  />
                  <Card.Body>
                    <Card.Title className="my-md-3 my-2">Monitor</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                  </Card.Body>

                  <Card.Body>
                    <Card.Link className="btn btn-outline-primary stretched-link">
                      Get Details
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <div className="item">
                <Card className="shadow-sm border-0 mb-lg-0 mb-md-3 pt-4 pb-2">
                  <Image
                    src={Surveillance}
                    width="120px"
                    height="100px"
                    objectFit="contain"
                    className="card-img-top"
                    alt=""
                  />
                  <Card.Body>
                    <Card.Title className="my-md-3 my-2">Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                  </Card.Body>

                  <Card.Body>
                    <Card.Link className="btn btn-outline-primary stretched-link">
                      Get Details
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-12 col-md-4 col-sm-6">
              <div className="item">
                <Card className="shadow-sm border-0 mb-lg-0 mb-md-3 pt-4 pb-2">
                  <Image
                    src={Complete}
                    width="120px"
                    height="100px"
                    objectFit="contain"
                    className="card-img-top"
                    alt=""
                  />
                  <Card.Body>
                    <Card.Title className="my-md-3 my-2">
                      Project Complete
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </Card.Text>
                  </Card.Body>

                  <Card.Body>
                    <Card.Link className="btn btn-outline-primary stretched-link">
                      Get Details
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service section  */}
      <section className="service-section py-5">
        <div className="container my-md-2 my-lg-3 my-xl-4 my-xxl-5">
          <div className="row py-1 py-sm-3 py-md-4 my-lg-2">
            <div className="col-lg-4 offset-xl-1">
              <div className="position-sticky top">
                <h3 className="text-center text-lg-start fw-bold mb-lg-3 mb-5 section-title">
                  Our <span className="text-primary">services</span>
                </h3>
                {/* <!-- Show on screens > 992px--> */}
                <ul className="list-unstyled d-none d-lg-block pb-3 mb-3 mb-lg-4 fw-medium">
                  <li className="d-flex align-items-center pt-2">
                    <span className="text-primary fs-lg me-2 ">1.</span>
                    Individual approach to the brand
                  </li>
                  <li className="d-flex align-items-center pt-2">
                    <span className="text-primary fs-lg me-2 ">2.</span>
                    We guarantee the result after a month
                  </li>
                  <li className="d-flex align-items-center pt-2">
                    <span className="text-primary fs-lg me-2 ">3.</span>
                    Completing tasks exactly on time
                  </li>
                </ul>
                <a className="btn btn-primary d-none d-lg-inline-flex" href="#">
                  See all services
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="row row-cols-1 row-cols-sm-2">
                <div className="col">
                  <div className="card border-0 bg-info">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">SEO Website Audit</h3>
                      <p className="fs-sm">
                        Consectetur adipiscing elit proin volutpat mollis
                        egestas nam in luctus facilisis ultrices llentesque
                        volutpat ligula est dignissim.
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-warning mt-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Content Marketing</h3>
                      <p className="fs-sm">
                        Morbi et massa fames ac lerisque sit commodo dignissim
                        faucibus vel quisque proin lectus orbi et massa fames ac
                        massa.
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-info mt-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Social Networks</h3>
                      <p className="fs-sm">
                        Pharetra in morbi quis is massa maecenas arcu vulputate
                        pulvinar elit non nullage a, duis tortor mi massa ipsum
                        in eu eu eget libero.
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-warning mt-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Secondary Networks</h3>
                      <p className="fs-sm">
                        Pharetra in morbi quis is massa maecenas arcu vulputate
                        pulvinar elit non nullage a, duis tortor mi massa ipsum
                        in eu eu eget libero.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col pt-lg-3">
                  <div className="card border-0 bg-warning mt-4 mt-sm-0 mt-lg-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Email Marketing</h3>
                      <p className="fs-sm">
                        Sapiener ultrices egestas at faucibus eu diam velit diam
                        id amet nibh quam rutrum diam diam natoque scelerisque
                        viverra.
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-info mt-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Social Networks</h3>
                      <p className="fs-sm">
                        Pharetra in morbi quis is massa maecenas arcu vulputate
                        pulvinar elit non nullage a, duis tortor mi massa ipsum
                        in eu eu eget libero.
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-warning mt-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Content Marketing</h3>
                      <p className="fs-sm">
                        Morbi et massa fames ac lerisque sit commodo dignissim
                        faucibus vel quisque proin lectus orbi et massa fames ac
                        massa.
                      </p>
                    </div>
                  </div>
                  <div className="card border-0 bg-info mt-4">
                    <div className="card-body">
                      <h3 className="h5 my-md-3 my-2">Social Networks</h3>
                      <p className="fs-sm">
                        Pharetra in morbi quis is massa maecenas arcu vulputate
                        pulvinar elit non nullage a, duis tortor mi massa ipsum
                        in eu eu eget libero.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Show button on screens < 992px--> */}
              <div className="d-lg-none text-center pt-3 mt-3 mt-sm-4">
                <a className="btn btn-primary" href="#">
                  See all servises
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* horizontal line */}
      <div className="container">
        <hr></hr>
      </div>
      {/* get started section */}
      <section className=" get-started-section py-5">
        <div className="container my-md-2 my-lg-3 my-xl-4 my-xxl-5">
          <div className="mw-60 mx-auto text-center">
            <h3 className="mb-3 fw-bold">
              Get Started in <span className="text-primary"> No Time</span>
            </h3>
            <div className="section-intro   mx-auto">
              CoderPro makes it super easy to get your software project online,
              so you can start promoting or selling your digital product to your
              audience.
            </div>
            <div className="pt-3 ">
              <a className="btn btn-outline-primary" href="">
                Get Started
              </a>
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
