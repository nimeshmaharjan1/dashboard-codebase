//Import module scss as styles
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BtnLogin from './buttons';
import styles from './header-one.module.scss';
import Logo from './logo';
import NavItems from './nav';
import Search from './search';

const HeaderOne = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //You can concatenate or just give one styles such as shown below
  return (
    <Navbar
      className=" fixed-top py-3 shadow-sm bg-white"
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand className="d-flex align-items-center me-auto" href="#">
          <Logo></Logo>
          <span className="fw-bold d-inline-block ml-2">Code</span>
        </Navbar.Brand>
        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
          onClick={handleShow}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Offcanvas
          show={show}
          onHide={handleClose}
          className={`${styles.offcanvas_collapse} navbar-collapse `}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <NavItems></NavItems>
            <Search></Search>
            <BtnLogin></BtnLogin>
          </Offcanvas.Body>
        </Offcanvas>
        <div
          className={`${styles.offcanvas_collapse} navbar-collapse `}
          id="navbarsExampleDefault"
        >
          <NavItems></NavItems>
          {/* <Search></Search> */}
          <BtnLogin></BtnLogin>
        </div>
      </Container>
    </Navbar>
  );
};

export default HeaderOne;
