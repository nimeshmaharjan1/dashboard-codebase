//Import module scss as styles
import { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BtnLogin from './buttons';
import Logo from './logo';
import NavItems from './nav';
import Search from './search';

const HeaderOne = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 200);
    });
  }, []);
  //You can concatenate or just give one styles such as shown below
  return (
    <Navbar
      className={` ${scroll ? 'bg-navbar fixed-top shadow-sm' : ''}   py-3 `}
      aria-label="Main navigation"
    >
      <Container>
        <Navbar.Brand className="d-flex align-items-center me-auto" href="#">
          <Logo></Logo>
          <span className="fw-bold d-inline-block ml-2">Code</span>
        </Navbar.Brand>
        <button
          className="navbar-toggler p-0 border-0 d-lg-none d-block"
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
          className="offcanvas_collapse"
        >
          <Offcanvas.Header className="w-100" closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="w-100">
            <Search></Search>
            <NavItems></NavItems>
            {/* <BtnLogin></BtnLogin> */}
          </Offcanvas.Body>
        </Offcanvas>
        <div
          className="d-lg-flex flex-grow-1 align-items-center d-none"
          id="navbars"
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
