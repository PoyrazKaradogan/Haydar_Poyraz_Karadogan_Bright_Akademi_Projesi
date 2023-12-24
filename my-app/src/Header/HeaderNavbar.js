
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand className='fw-bolder fs-2 text-light'href="#home">
        <FontAwesomeIcon icon={faGraduationCap} />Bright
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0  text-white"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Ana Sayfa</Nav.Link>
            <Nav.Link href="#action2">İletişim</Nav.Link>
           <Nav.Link href="#"> Hakkımızda</Nav.Link>
            <NavDropdown title="Eğitimler" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Front-End Developer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Back-End Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Fullstack Developer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2">Eğitmenler</Nav.Link>
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

export default NavScrollExample;
