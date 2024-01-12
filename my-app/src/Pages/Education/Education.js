import React, { useContext } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { AppContext } from '../../Components/Contexts/Contexts';

const Education = () => {
    const context = useContext(AppContext)

    return (
      <>
        <Container className='d-flex justify-content-center align-items-center '>
          <Card className='border-0 w-75 mt-5 p-5 text-light card-bau'>
            <Card.Body>
              <Card.Title className='display-5 mb-5'>
                {context}
              </Card.Title>
              <Card.Text className='fs-5'>
                {context}
              </Card.Text>
              <Card.Text className='fs-5'>
                {context}
              </Card.Text>
              <Card.Text className='fs-5'>
                Detaylı bilgi için lütfen pdf dosyasına bakınız.
              </Card.Text>
            </Card.Body>
            <Button href={context} className=' mx-auto btn-danger mt-3' >PDF DOSYASI</Button>
          </Card>
        </Container>
      </>
    )

}

export default Education