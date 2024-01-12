import React, { useContext } from 'react'
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap'
import { AppContext } from './Contexts/Contexts'



const Form = () => {
    const context = useContext(AppContext)
    return (
        <>
            <Container className='pt-2 d-flex justify-content-center align-items-center'>
               
                <Card className=' border-0  text-light mb-0'>
      
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center text-center bg-dark'>
                        
                        
                        <Card.Text className='fs-4'>
                        <h3 className=''>Üniversite onaylı sertifikanı al, lider bilişimci ol.</h3> Detaylı bilgi için: <a href="">0212 381 50 00</a>
                        </Card.Text>
                        <ButtonGroup className='mt-5'>
                            <Card.Link href="/about"><Button className='rounded-pill fs-5 btn-danger' style={{ width: '140px' }}>Detaylı Bilgi</Button></Card.Link>
                            <Card.Link href="/contact"><Button className='rounded-pill fs-5 btn-danger' style={{ width: '140px' }}>İletişim</Button></Card.Link>
                        </ButtonGroup>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Form