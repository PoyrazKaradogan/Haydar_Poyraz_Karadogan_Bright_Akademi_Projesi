import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import '../Components/Form.css'


function FormExample() {
    const { Formik } = formik;
  
    const schema = yup.object().shape({
      firstName: yup.string().required().oneOf([true], 'Adınızı ve soyadınızı boş bırakamazsınız.'),
      Eposta: yup.string().required().oneOf([true], 'Bilgilerimin doğru olduğunu beyan ediyorum.'),
   
      terms: yup.bool().required().oneOf([true], 'Lütfen bilgi güvenliğiniz için soldaki kutucuğu işaretleyiniz.'),
    });
  
    return (
      <Formik 
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstName: false,
          Eposta: false,
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form className='bg-dark text-light text-center align-items-center ' noValidate onSubmit={handleSubmit}>
            <h1>Bilgi Talep Formu</h1>
            <Row className="mb-3">
              <Form.Group as={Col} md="10" controlId="validationFormik01"className='ms-5'>
              <Form.Control.Feedback type="invalid">
                {errors.isimSoyisim}
              </Form.Control.Feedback>
                <Form.Control
                 
                  type="text"
                  name="isimsoyisim"
                  placeholder='İsim-Soyisim giriniz...'
                  value={values.isimSoyisim}
                  onChange={handleChange}
               
                  isInvalid={!!errors.isimSoyisim}
                />
                <Form.Control.Feedback>Kaydedildi...</Form.Control.Feedback>
              </Form.Group>
       
         
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} md="10" controlId="validationFormik02" className='ms-5 text-center'>
                <Form.Label></Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="E-posta"
                  placeholder='Eposta giriniz...'
                  value={values.Eposta}
                  onChange={handleChange}
                  feedback={errors.Eposta}
                  feedbackType="invalid"
                  isValid={touched.Eposta && !errors.Eposta}
                  id="validationFormik0"
                />
  
  <Form.Control.Feedback>Form Başarıyla Gönderildi.</Form.Control.Feedback>
              </Form.Group>
             
            </Row>
            <Row className='text-center'>
            <Form.Group className="mb-3 ms-5">
            <Form.Check
              required
              name="terms"
              label="Rıza Metini"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
           
             </Form.Group> 
             </Row>
            <Button className='mb-5' type="submit">Gönder</Button>
           
          </Form>
        )}
      </Formik>
    );
  }
  
  export default FormExample;

