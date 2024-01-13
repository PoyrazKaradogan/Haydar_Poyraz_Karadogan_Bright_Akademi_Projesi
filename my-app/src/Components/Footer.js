import React from 'react'
import { Button, ButtonGroup, Container, Image } from 'react-bootstrap'
import './Footer.css';
import logo from '../Images/logo.png';
const Footer = () => {
    return (
        <>
            <Container className='footer text-center m-0 p-0 text-light' fluid>
                <Container className='m-0 p-3 footer-container d-flex flex-column justfiy-content-center align-items-center' fluid>
                    <Image src={logo} style={{width:'180px', height:'57'}} className='mb-5' />
                    <ButtonGroup className='mb-1'>
                     
            <Button variant='light' className='rounded-circle p-1 btn-float' href='https://github.com'><i className="fa-brands fa-github fs-3"></i></Button>
                        <Button variant='light' className='rounded-circle p-1 btn-float' href='https://github.com'><i className="fa-brands fa-linkedin fs-3"></i></Button>
                        <Button variant='light' className='rounded-circle p-1 btn-float' href='https://github.com'><i className="fa-brands fa-whatsapp fs-3"></i></Button>
                    </ButtonGroup>
                    <div className='w-25 m-auto pt-3 footer-end'>Copyright &copy; 2023 Haydar KARADOĞAN. </div>
                </Container>
            </Container>
        </>
    )
}

export default Footer
