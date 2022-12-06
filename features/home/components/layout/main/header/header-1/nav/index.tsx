import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavItems = () => {
  //You can concatenate or just give one styles such as shown below
  return (
    <Nav className="ms-auto">
      <Nav.Link href="#" className="px-3">
        Home
      </Nav.Link>

      <Nav.Link href="#" className="px-3">
        Features
      </Nav.Link>

      <Nav.Link href="#" className="px-3">
        Pricing
      </Nav.Link>

      <Nav.Link href="#" className="px-3">
        FAQs
      </Nav.Link>

      <Nav.Link href="#" className="px-3">
        About
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
