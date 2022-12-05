//Import module scss as styles

import Link from 'next/link';
import HeaderOne from './header-1';
import styles from './header.module.scss';
const Header = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <>
      <HeaderOne></HeaderOne>
      {/* <div className="container">
        <div className={`${styles.header_top}`}>
        <div
          className={`container-fluid d-flex pt-3 pb-lg-0 pb-2 justify-content-center`}
        >
          {/*header-top*/}
          <div className={`${styles.header_top_left} align-items-center`}>
            <p className={`text-black d-none d-lg-block`}>
              Welcome To Our Store
            </p>
          </div>

          <div className={`${styles.header_top_right} ms-lg-auto d-flex`}>
            <div className={`${styles.header_dropdown} `}>
              <Link href="/">
                <select
                  id="category"
                  name="category"
                  className={`${styles.currency_select}form-control shadow-none form-select pt-1 border-end`}
                >
                  <option value="">USD</option>
                  <option value="">EUR</option>
                </select>
              </Link>
            </div>
            <div className={'d-lg-block d-none'}>
              <Link href="/"> Blog</Link>
              <Link href="/">Contact Us</Link>
              <Link href="/">My Account</Link>
            </div>

            <span className={'text-black'}>
              <a href="/" className={`pe-1`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className={`bi bi-person me-1`}
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                Signin
              </a>
              <span>/</span>
              <a href="/" className={`ms-0 ps-1`}>
                Register
              </a>
            </span>
          </div>
        {/* </div>
      </div> */}
      {/*header-top-end*/}

      {/*header-middle*/}
      <div className={`${styles.header_middle}`}>
        <div
          className={`container-fluid d-flex flex-lg-nowrap flex-wrap gap-5 `}
        >
          <a href="/" className={'navbar-brand p-0 align-self-center '}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="32"
              viewBox="0 0 118 94"
              role="img"
              className={'me-5'}
            >
              <title>Bootstrap</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          <div
            className={`${styles.header_middle_left} align-items-center d-flex order-2 order-xl-1 flex-grow-1`}
          >
            <form
              action=""
              className={`${styles.header_middle_search} d-flex m-auto position-relative`}
            >
              <div
                className={`${styles.header_middle_search_searchbox} d-xl-block d-none `}
              >
                <select
                  id="category"
                  name="category"
                  className={`form-control shadow-none form-select`}
                >
                  <option value="">All Categories</option>
                  <option value="4">Fashion</option>
                  <option value="5">Furniture</option>
                  <option value="6">Shoes</option>
                  <option value="7">Sports</option>
                  <option value="8">Games</option>
                  <option value="9">Computers</option>
                  <option value="10">Electronics</option>
                  <option value="11">Kitchen</option>
                  <option value="12">Clothing</option>
                </select>
              </div>
              <input
                type="text"
                className={`form-control shadow-none`}
                name="search"
                id="search"
                placeholder="Search in..."
              />
              <span className={`position-absolute pe-3 pt-2`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </form>
          </div>
          <div
            className={`${styles.header_middle_right} ms-auto d-flex order-xl-2 order-1 mb-xl-0 align-self-center`}
          >
            <a href="">
              <div
                className={`d-flex h3 border-end lg:border-1 pe-xl-4 me-xl-4 pe-0 `}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className={`me-3 mt-1 bi bi-telephone-fill align-self-center`}
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <div className={`d-xl-block d-none`}>
                  <p
                    className={`${styles.header_middle_right_info} fs-5 mb-0 fw-normal`}
                  >
                    Call us :
                  </p>
                  <p className={`mb-0 fw-bold`}>01(3399221)</p>
                </div>
              </div>
            </a>

            <a href="/" className={`me-xl-5 me-3 d-block`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-heart text-center d-block m-auto fw-bolder`}
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <p className={'d-xl-block d-none'}>Wishlist</p>
            </a>
            <a href="/" className={`me-xl-5 me-3 d-block`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-heart text-center d-block m-auto`}
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
              <p className={'d-xl-block d-none'}>Compare</p>
            </a>
            <a
              href="/"
              className={` d-block position-relative  me-0`}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-bag text-center d-block m-auto`}
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
              <p className={'d-xl-block d-none'}>Cart</p>
              <span
                className={`${styles.badge} position-absolute top-0 text-xs start-100 translate-middle  border border-light badge rounded-circle`}
              >
                2
              </span>
            </a>
          </div>
        </div>
      </div>
      {/*header-middle-end*/}

      {/*header-bottom*/}
      <div
        className={`${styles.header_bottom} mb-2 sticky-content fix-top sticky-header border-top border-bottom bg-white d-xl-block d-none`}
      >
        <div className={`container-fluid d-flex `}>
          <div className={`${styles.header_bottom_left} d-flex`}>
            <div>
              <select
                className={`form-select form-select-lg fw-bold `}
                aria-label=".form-select-lg example"
              >
                <option selected>BROWSE CATEGORIES</option>
                <option value="" kk></option>
              </select>
              <div
                className={`${styles.dropdown_content_category} position-absolute d-none`}
              >
                <ul className={`ms-0`}>
                  <li>Lorem.</li>
                  <li>lorem</li>
                  <li>Lorem.</li>
                  <li>lorem</li>
                </ul>
              </div>
            </div>

            <ul>
              <li>
                <Link href="">Home</Link>
                <div className={`${styles.dropdown_content}`}>
                  <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li>
                <Link href="">Shop</Link>
                <div className={`${styles.dropdown_content}`}>
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li>
              <li>
                <Link href="">Vendor</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">Docs</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.header_bottom_right} ms-auto`}>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-geo-alt me-2`}
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              Track order
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className={`bi bi-tag me-2`}
                viewBox="0 0 16 16"
              >
                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
              </svg>
              Daily Deals
            </a>
          </div>
        </div>
      </div>

      {/*header-bottom-responsivez*/}
      <a
        className={'btn btn-light d-block w-10 d-xl-none'}
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </a>
      {/*header-bottom-end*/}

      {/*ecommerceheader*/}
      <div className={`${styles.ecommerce_header} shadow-sm mt-5`}>
        {/*ecommerce-header-top*/}
        <div className={`${styles.ecommerce_header_top}  bg-dark`}>
          <div
            className={
              'container-fluid d-flex align-items-center justify-content-between fs-5'
            }
          >
            <div className={'d-flex fs-5'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="red"
                className={'bi bi-headset me-1'}
                viewBox="0 0 16 16"
              >
                <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
              </svg>
              <p className={'text-white mb-0 pe-2'}>Support</p>
              <Link href="/" className={'text-white'}>
                (00)390033
              </Link>
            </div>
            <div className={'d-xl-block d-none'}>
              <a href="">
                <p className={'mb-0'}>
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className={`bi bi-arrow-right ms-1`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </p>
              </a>
            </div>
            <div className={'d-flex'}>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className={`bi bi-geo-alt me-2 align-self-center`}
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </Link>
              <div className={`${styles.header_dropdown} `}>
                <Link href="/">
                  <select
                    id="category"
                    name="category"
                    className={`${styles.currency_select}form-control shadow-none form-select`}
                  >
                    <option value="">USD</option>
                    <option value="">EUR</option>
                  </select>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*ecommerce-header-middle*/}
        <div className={`${styles.ecommerce_header_middle} navbar bg-light `}>
          <div className={'container-fluid'}>
            <div className={'navbar navbar-expand-lg navbar-light w-100'}>
              <Link
                className={'navbar-brand d-none d-sm-block flex-shrink-0'}
                href="/"
              >
                Logohere
              </Link>
              <div
                className={`${styles.ecommerce_input_group} input-group d-none d-lg-flex  flex-nowrap`}
              >
                <input
                  type="text"
                  className={`${styles.form_control} form-control rounded-end pe-5`}
                />
                <button
                  className={'btn btn-outline-secondary'}
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className={'bi bi-search me-2 ms-2'}
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
              <div
                className={
                  'navbar-toolbar d-flex flex-shrink-0 align-items-center '
                }
              >
                <a href="" className={`text-decoration-none`}>
                  <div
                    className={`d-flex h3 border-end pe-xl-4 pe-0 me-xl-4 me-0`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className={`me-3 mt-1 bi bi-person align-self-center`}
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                    <div className={`d-xl-block d-none`}>
                      <p
                        className={`${styles.header_middle_right_info} mb-0 fw-normal text-muted fs-6`}
                      >
                        Hello,sign in
                      </p>
                      <p className={`mb-0 fw-normal fs-5`}>My Account</p>
                    </div>
                  </div>
                </a>

                <a href="/" className={`me-4 d-block position-relative`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className={`bi bi-heart text-center d-block m-auto fw-bolder`}
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                  <span
                    className={`${styles.badge} position-absolute top-0 text-xs start-100 translate-middle  border border-light badge rounded-circle`}
                  >
                    2
                  </span>
                </a>

                <a
                  href="/"
                  className={` ${styles.carticon} d-block position-relative me-4`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className={`bi bi-bag text-center d-block m-auto`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>

                  <span
                    className={`${styles.badge} position-absolute top-0 text-xs start-100 translate-middle  border border-light badge rounded-circle`}
                  >
                    2
                  </span>
                </a>
                <a
                  href="/"
                  className={` d-block position-relative  text-decoration-none fw-semibold`}
                >
                  <p className={'fs-5 mb-0'}>$150.00</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*ecommerce-header-bottom*/}
        <div
          className={`${styles.header_bottom} mb-2 pb-2 sticky-content fix-top sticky-header pt-0 pb-4 bg-white d-xl-block d-none`}
        >
          <div className={`container-fluid d-flex justify-between`}>
            <div className={'me-5 align-self-center me-4 '}>
              <a href="" className={'d-flex fw-bold'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className={'bi bi-border-all me-2 align-self-center'}
                  viewBox="0 0 16 16"
                >
                  <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
                </svg>
                Departments
              </a>
            </div>
            <div className={`${styles.header_bottom_left} d-flex`}>
              <ul>
                <li>
                  <Link href="">Home</Link>
                  <div className={`${styles.dropdown_content}`}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </li>
                <li>
                  <Link href="">Shop</Link>
                  <div className={`${styles.dropdown_content}`}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </li>
                <li>
                  <Link href="">Vendor</Link>
                  <div className={`${styles.dropdown_content}`}>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                  </div>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
                <li>
                  <Link href="">Docs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*header-bottom-responsivez*/}
        <a
          className={'btn btn-light d-block w-10 d-xl-none'}
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </a>
        {/*header-bottom-end*/}
      </div>
      {/* </div> */} */}
    </>
  );
};

export default Header;
