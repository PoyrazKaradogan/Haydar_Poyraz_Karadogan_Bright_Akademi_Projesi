
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../src/Images/logo.png";

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container >
      <Navbar.Brand href="/"><Image src={logo} alt='' rounded /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  text-white"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <Nav.Link href="Contact">İletişim</Nav.Link>
           <Nav.Link href="About"> Hakkımızda</Nav.Link>
            <NavDropdown title="Eğitimlerimiz" id="navbarScrollingDropdown">
              <NavDropdown.Item href="Education">Front-End Developer</NavDropdown.Item>
              <NavDropdown.Item href="Education">
                Back-End Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Education">
                Fullstack Developer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="Teacher">Eğitmenler</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light me-5">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
