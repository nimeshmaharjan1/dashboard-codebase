import CmsLayout from '@features/home/components/layout/main';
import { NextPageWithLayout } from '@pages/_app';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Image from 'next/image';

import Link from 'next/link';
import Illus from '../../public/assets/images/about/illus.png';

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <div className="contact-page">
        <div className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
          <div className="row h-100 align-items-center">
            <div className="col-lg-6">
              <h1 className="fw-bold mb-3">Contact Us</h1>
              <p className="">
                Front is a web company that builds websites. Businesses of every
                size—from new startups to public companies—use our theme to
                build and manage their businesses online.
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
        <div className="">
          <div className="container py-5 my-md-2 my-lg-3 my-xl-4 my-xxl-5">
            <div className="row">
              <div className="contact_form">
                <h3 className="fw-medium">
                  Contact <span className="text-primary">Form</span>
                </h3>
                <p className="text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
              </div>
              <div className="col-md-8 mb-md-0 mb-3">
                <Form className="p-lg-5 p-md-4 p-3 border border-opacity-10 shadow-sm ">
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-sm fw-medium">
                          First name
                        </Form.Label>
                        <Form.Control placeholder="First name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-sm fw-medium">
                          Last name
                        </Form.Label>
                        <Form.Control placeholder="Last name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="fs-sm fw-medium">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      className="form-control-lg fs-base"
                    />
                    <Form.Text className="text-muted">
                      We&apos;ll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicTextarea">
                    <Form.Label className="fs-sm fw-medium">Comment</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      className="form-control-lg fs-base"
                      style={{ height: '100px' }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Check me out"
                      className="fs-sm fw-medium"
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    className="px-5 py-2 mt-3"
                  >
                    Submit
                  </Button>
                </Form>
              </div>
              <div className="col-md-4">
                <div
                  className="p-lg-5 p-3 border border-opacity-10 shadow-sm position-sticky "
                  style={{ top: '100px' }}
                >
                  <div className="address-block mb-md-3  mb-4">
                    <h4 className="fw-bold fs-base">Headquarters</h4>
                    <p className="address-block-info fs-sm">
                      25 First Street, 2nd Floor
                      <br />
                      Cambridge, MA 02141
                      <br />
                      United States
                    </p>
                  </div>
                  <div className="info-block mb-md-3 mb-4">
                    <h5 className="fw-bold fs-base">Phone </h5>

                    <p className="fs-sm">
                      + 1 888 HUBSPOT <br /> (1+ 888 482 7768) <br /> <br />
                    </p>
                  </div>
                  <div className="info-block ">
                    <h5 className="fw-bold fs-base">
                      Press / Media / Blogger Information
                    </h5>

                    <p className="fs-sm">
                      <Link href="/">
                        <a>Visit our Newsroom for contact info</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;

Contact.getLayout = (page: React.ReactElement) => {
  return <CmsLayout>{page}</CmsLayout>;
};
