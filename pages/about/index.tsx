import CmsLayout from '@features/home/components/layout/main';
import { NextPageWithLayout } from '@pages/_app';
import Image from 'next/image';
import Link from 'next/link';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AvatarOne from '../../public/assets/images/about/avatar-1.png';
import AvatarTwo from '../../public/assets/images/about/avatar-2.png';
import AvatarThree from '../../public/assets/images/about/avatar-3.png';
import AvatarFour from '../../public/assets/images/about/avatar-4.png';
import Illus from '../../public/assets/images/about/illus.png';
import Developer from '../../public/assets/images/developer.svg';
import Pair from '../../public/assets/images/pair.svg';

const About: NextPageWithLayout = () => {
  return (
    <div className="about-us">
      <div className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6">
            <h1 className="fw-bold mb-3">About Us</h1>
            <p className="">
              Front is a web company that builds websites. Businesses of every
              size—from new startups to public companies—use our theme to build
              and manage their businesses online.
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <Image
              src={Illus}
              alt=""
              width="526"
              height="422"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="bg-light-blue">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <h2 className="fw-medium">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/">
                <a className="btn btn-primary px-lg-5 px-3 py-2 shadow-sm">
                  Learn More
                </a>
              </Link>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <Image src={Pair} alt="" className="img-fluid mb-4 mb-lg-0" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <Image
                src={Developer}
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-medium">Lorem ipsum dolor sit amet</h2>
              <p className="font-italic text-muted mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <Link href="/">
                <a className="btn btn-primary px-lg-5 px-3 py-2 shadow-sm">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
        <div className="w-lg-75 text-center mx-lg-auto mb-md-5 mb-3">
          <h2 className="fw-bold h3">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="row text-center">
          {/* <!-- Team item--> */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className=" border border-opacity-10 rounded shadow-sm py-5 px-4">
              <div className="mb-3">
                <Image
                  src={AvatarFour}
                  alt="avatar"
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                  objectFit="cover"
                />
              </div>
              <h5 className="mb-0">Manuella Nevoresky</h5>
              <span className="fs-sm text-uppercase text-muted">
                CEO - Founder
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaFacebook />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaInstagram />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaLinkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End--> */}

          {/* <!-- Team item--> */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className=" border border-opacity-10 rounded shadow-sm py-5 px-4">
              <div className="mb-3">
                <Image
                  src={AvatarOne}
                  alt="avatar"
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                  objectFit="cover"
                />
              </div>
              <h5 className="mb-0">Samuel Hardy</h5>
              <span className="fs-sm text-uppercase text-muted">
                CEO - Founder
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaFacebook />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaInstagram />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaLinkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End--> */}

          {/* <!-- Team item--> */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className=" border border-opacity-10 rounded shadow-sm py-5 px-4">
              <div className="mb-3">
                <Image
                  src={AvatarTwo}
                  alt="avatar"
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                  objectFit="cover"
                />
              </div>
              <h5 className="mb-0">Tom Sunderland</h5>
              <span className="fs-sm text-uppercase text-muted">
                CEO - Founder
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaFacebook />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaInstagram />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaLinkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End--> */}

          {/* <!-- Team item--> */}
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className=" border border-opacity-10 rounded shadow-sm py-5 px-4">
              <div className="mb-3">
                <Image
                  src={AvatarThree}
                  alt="avatar"
                  width={100}
                  height={100}
                  style={{ borderRadius: '50%' }}
                  objectFit="cover"
                />
              </div>
              <h5 className="mb-0">John Tarly</h5>
              <span className="fs-sm text-uppercase text-muted">
                CEO - Founder
              </span>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaFacebook />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaTwitter />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaInstagram />
                    </a>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="/">
                    <a className="d-inline-block social-link px-2 py-1 border rounded-circle">
                      <FaLinkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- End--> */}
        </div>
      </div>
    </div>
  );
};

export default About;

About.getLayout = (page: React.ReactElement) => {
  return <CmsLayout>{page}</CmsLayout>;
};
