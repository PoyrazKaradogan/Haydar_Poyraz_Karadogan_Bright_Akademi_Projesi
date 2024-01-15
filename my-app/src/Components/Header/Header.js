
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../Images/logo.png";
import './Header.css'
import About from '../../Pages/About/About';

function HeaderNav () {
  return (
    <Navbar expand="lg"  className='navbar 'data-bs-theme="dark" >
      <Container c>
      <Navbar.Brand href="/"><Image src={logo} alt='' rounded /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-light fs-4 m-4"
            style={{ maxHeight: '300px' }}
            navbarScroll
          >
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <Nav.Link href="Contact">İletişim</Nav.Link>
           <Nav.Link href="About"> Hakkımızda</Nav.Link>
           <NavDropdown title="Eğitimlerimiz" id="navbarScrollingDropdown" data-bs-theme='dark'>
              <NavDropdown.Item href="FrontEndDeveloper">Front-End Developer</NavDropdown.Item>
              <NavDropdown.Item href="BackEndDeveloper">
                Back-End Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="FullStackDeveloper">
                Fullstack Developer
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="Teacher">Eğitmenler</Nav.Link>
          </Nav>
          <Form className="d-flex">
          
        
            <Button href='/contact' variant="outline-light me-5 fs-4 " style={{borderRadius:'2em', width:'200px'}}>Başvuru Yap</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderNav;
