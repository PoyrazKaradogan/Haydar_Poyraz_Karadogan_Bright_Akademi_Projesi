import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const FrontEndDeveloper = () => {
  return (
    <Container r fluid className='page' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Row className='justify-content-center'>
        <Col lg='12'>
          <div className='container main-div'>
            <div className='container-header text-center d-flex flex-column align-items-center w-100'>
              <Col lg='9'>
                <h1 className='me-5 w-100 container-header-text text-danger'>Front-End Developer</h1>
              </Col>
              <Col lg='8'>
                <br />
                <p className='main-div-text p-2 text-light'>Bir web sitesinin ana sayfada yer alan tüm fonksiyonlarının ve sistemsel veya yazılımsal kısımlarının çalışmasına olanak tanıyan web tasarım geliştiricileridir.

Bir web sitesinin kullanıcıya ulaşması için ön yüz geliştiricileri olarak adlandırılan developer çalışanlarına ihtiyaç bulunmaktadır. Web tasarım geliştiricileri arasında önemli bir yere sahip olan ön yüz tasarımcıları, web sitesinin kullanıcının karşısına çıkmasında çok önemli bir rol oynamaktadır. Çünkü temel olarak konuya yaklaşıldığında, bir web sitesinin görsel düzenlemelerinin yer aldığı tasarım aşaması kullanıcının web sitesi ile ilk tanıştığı kısımdır.

Ön yüz geliştiricileri, zamandan tasarruf etmek ve daha profesyonel bir proje çıkarmak için çeşitli yazılım dillerini ve ileri teknolojileri öğrenmektedir. Böylece alanında uzmanlaşan kişiler ile birlikte daha sağlıklı bir proje oluşumuna olanak sağlarlar.

Peki, MGS Software çatısı altında ön yüz geliştiriciler ne iş yapar? Nasıl Çalışır?, web yazılım dili nedir ve ne işe yarar? inceleyelim.
<h3 className='text-danger'>
Front-End Nedir?
Front-End Nedir Ne İşe Yarar?</h3>
Web tasarım olarak da bilinen Frontend terimi, bir web sitesinin etkileşime girildiği ilk alanıdır. Web sitesinde görev alan bu önyüz geliştiricileri arayüz tasarımı ve geliştirilmesinde sorumluluk sahibi olurlar. İnternet dünyasında çok önemli bir yere sahip olan Front-End Nedir Ne İşe Yarar?

Adobe XD, Photoshop, Sketch gibi tasarım programlarıyla birlikte HTML, CSS, JavaScript ve JQuery ile kod yazabilen alanında uzman web tasarımcılarıdır ve web sitesinin önyüzünün stabil kullanılmasını sağlarlar.

FrontEnd Developer Kimdir? web sitesinin ön uç öğelerinin tasarlanması ve kodlanmasında görev alan web sitesi geliştiricileridir ve kullanıcı deneyiminin doğru, hatasız ve sağlıklı çalışması için yazılım geliştirirler. Bu noktada, web sitesinde ki hataları tespit edip ayıklanmasında görev alırlar ve tasarım alanında estetik bir gönüm sağlarlar. Ön yüz geliştiriciler, genellikle görsel bileşenler üzerinde çalışmaktadır ve uygulama, web sitesi gibi çeşitli alanlarda kullanılabilirliği arttırmaktadırlar. <hr style={{ border: '3px solid white', borderRadius: '3px' }} className='text-white mt-5' /></p>
              </Col>
            </div>
          </div>
          <Row className='text-center'>
            <Col lg='12'>
              <Button variant="outline-danger mb-2" href='/Contact'style={{width:'200px', height:'70px'}}><h3>Başvuru Yap</h3></Button>
            </Col>

          </Row>
         
        </Col>
      </Row>
    </Container>
  )
}

export default FrontEndDeveloper
