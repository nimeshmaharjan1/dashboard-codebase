import React, { useState } from 'react';

import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

const NavItems = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return;
  //You can concatenate or just give one styles such as shown below
  return (
    <Nav className="ms-auto">
      <Nav.Link className="px-3">
        <Link href="/">Home</Link>
      </Nav.Link>

      <Nav.Link className="px-3">
        <Link href="#">Features</Link>
      </Nav.Link>

      <Nav.Link className="px-3">
        <Link href="#">Pricing</Link>
      </Nav.Link>

      <Nav.Link className="px-3">
        <Link href="/contact">Contact</Link>
      </Nav.Link>

      <Nav.Link className="px-3">
        <Link href="/about">About</Link>
      </Nav.Link>
      <NavDropdown title="Link" id="navbarScrollingDropdown" className="px-3">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default NavItems;
