const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark dark-mode position-relative py-5 text-white">
        <div className="position-absolute top-0 start-0 w-100 h-100"></div>
        <div className="container position-relative zindex-2 pb-xl-2 pt-2 pt-sm-3 pt-xl-4 pt-xxl-5">
          <div className="row pb-5 pt-md-3 pt-lg-4 mb-md-3 mb-lg-4">
            <div className="col-md-6 col-xxl-5 pb-3 pb-md-0 mb-2 mb-sm-3 mb-md-0">
              <div className="h1 pb-3 text-white">
                Support us on Kickstarter and get{' '}
                <span
                  style={{
                    background:
                      'linear-gradient(90.72deg, #cbfdb1 3.49%, #acbff1 50.67%, #efa7ec 100.79%)',
                  }}
                >
                  20% discount
                </span>{' '}
                on headphones
              </div>
              <div className="d-flex flex-wrap pb-4 pb-xl-5 mb-md-2 mb-lg-3">
                <div className="d-flex pe-3 me-3 mb-2">
                  <i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                  <span>$4,200 pledget</span>
                </div>
                <div className="d-flex pe-3 me-3 mb-2">
                  <i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                  <span>45 funded</span>
                </div>
                <div className="d-flex mb-2">
                  <i className="ai-check-alt text-white fs-4 mt-n1 me-2"></i>
                  <span>12 days to go</span>
                </div>
              </div>
              <a className="btn btn-outline-light" href="#">
                Support us on Kickstarter
              </a>
            </div>
            <div className="col-md-5 col-xl-4 offset-md-1 offset-xl-2 offset-xxl-3">
              <div className="row row-cols-2">
                <div className="col">
                  <ul className="nav flex-column pb-4 mb-2 pb-md-5 mb-lg-1">
                    <li className="nav-item mt-1">
                      <a className="nav-link py-1 px-0" href="#">
                        Features
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link py-1 px-0" href="#">
                        Colors
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link py-1 px-0" href="#">
                        Product details
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link py-1 px-0" href="#">
                        Privacy policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="nav flex-column">
                    <li className="nav-item mt-1">
                      <a
                        className="nav-link py-1 px-0"
                        href="mailto:email@example.com"
                      >
                        email@example.com
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link py-1 px-0" href="tel:+15262200459">
                        + 1 526 220 0459
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link py-1 px-0" href="tel:+15262200444">
                        + 1 526 220 0444
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Copyright--> */}
          <p className="fs-sm mb-0">
            <span className="opacity-70">© All rights reserved. Made by </span>
            <a
              className="nav-link d-inline fw-normal p-0"
              target="_blank"
              rel="noopener"
            >
              Code
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
