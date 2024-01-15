import Carousel from 'react-bootstrap/Carousel';
import resim1 from "../Images/EnginHoca.png"
import resim2 from "../Images/poyraz.jpeg"
import resim3 from "../Images/ilber.jpg"
import resim4 from "../Images/serenay.jpg"
import resim5 from "../Images/çağatay.jpg"
import { Image } from 'react-bootstrap';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image style={{width:"600px",height:"600px" ,justifyContent:"center" }}
          className="d-block m-auto"
          src= {resim1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-white'>Engin Niyazi ERGÜL</h2>
          <h3 className='text-white'>Senior Developer ve Usta Eğitmen</h3> 
          <a href='/contact' className='btn btn-danger'>İletişim</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image style={{width:"600px",height:"600px", justifyContent:"center" }}
          className="d-block m-auto"
          src= {resim2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-white'>Poyraz KARADOĞAN</h2>
          <h3 className='text-white'>Senior Developer</h3>
          <a href='/contact' className='btn btn-danger'>İletişim</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image style={{width:"600px",height:"600px" ,justifyContent:"center" }}
          className="d-block m-auto"
          src= {resim3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-white'>İlber ORTAYLI</h2>
          <h3 className='text-white'>Senior Database Uzmanu</h3>
          <a href='/contact' className='btn btn-danger'>İletişim</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image style={{width:"600px",height:"600px", justifyContent:"center" }}
          className="d-block m-auto"
          src= {resim4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-white'>Serenay SARIKAYA</h2>
          <h3 className='text-white'>Network Uzmanı</h3>
          <a href='/contact' className='btn btn-danger'>İletişim</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image style={{width:"600px",height:"600px", justifyContent:"center" }}
          className="d-block m-auto"
          src= {resim5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2 className='text-white'>Çağatay ULUSOY</h2>
          <h3 className='text-white'>Konu Mankeni</h3>
          <a href='/contact' className='btn btn-danger'>İletişim</a>
        </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    
  );
}

export default DarkVariantExample;