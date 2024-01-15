import React from 'react'
import { Container ,Row , Col, Button } from 'react-bootstrap'

const BackEndDeveloper = () => {
  return (
    <Container fluid className='page' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Row className='justify-content-center'>
        <Col lg='12'>
            <div className='container'>
                <div className='container-header d-flex flex-column align-items-center w-100'>
              <Col lg='9'>
                <h1 className='w-75 container-header-text text-danger'>Back-End Developer</h1>
              </Col>
              <Col lg='12'>
                <br />
                <p className='  text-light'>Bir web sitesinin, kullanıcı tarafından görülmeyen kısımları yani arka yüzüdür, Back-End Developer Kimdir?; arka yüz geliştiricisi olarak PHP, ASP.net, MYSQL ve MYSSQL gibi çeşitli araçları kullanarak kodlama yapan web geliştirici uzmanıdır.

Web sitesinde arka yüz kodlaması, kullanıcı tarafından fark edilmese de, web sitesinin doğru ve stabil çalışması için gerekli bir fonksiyondur. Arka yüz geliştiricileri proje oluşturma aşamasında veya proje içerisinde data mining yapmak; proje read map oluşturmak ve tasarımın nasıl çalıştığıyla ilgilenen bir birimdir. Server Side ile web sitesinin doğru çalışmasını sağlayan arka yüz geliştiricileri, kullanıcının site içerisinde etkileşime girdiği her alanın stabil olmasını sağlar ve veri alışverişleri yapılmasına olanak tanır.

Bilgi sistemi ve yazılım alanında mantıksal arka yüz çalışmalarını sağlayan bu programcılar, pek çok yazılım dilini uygulayarak ve manipüle etmek için algoritmalar oluşturur. Bu algoritmalar, en basit düzeyde bile kreatif çözümler sunmaya odaklıdır. Peki, bu bilgiler ışığında, arka yüz geliştiricisi nasıl olunur?; ne iş yaparlar ve hangi dilleri bilmeleri gerekir?
<h3 className='text-danger'>
back-end develeoper nedir
Back End Developer Neler Yapar?</h3>
Arka yüz geliştiriciler veya ön yüz geliştiriciler,  yazılım projelerinde gerekli teknik konuların arka planda çalışarak kullanıcıların görmediği sistemleri kurgular ve sistemin istikrarlı bir şekilde çalışmasını sağlar.  Son kullanıcının bir web sitesinde rahatlıkla gezebilmesi ve web sitesinden maksimum performans elde edebilmesi için mantıksal hesaplamalar, iyileştirmeler veya gerekli programların kurulması çok önemlidir.

Backend Geliştirici, web sitesi veya bir yazılımın arka veya ön yüz olarak ifade edilen alanında bulunması gereken programları ve yazılımları hazırlayan uzmanlardır. Bilgisayar ortamında işlerini icra eden ön yüz geliştiricileri, diğer yazılım alanları ile iş birliği içerisinde çalışarak gerekli programları hazırlar. Programlama dillerinden birine veya birkaçına hâkim olan bu arka yüz geliştiricileri, bir web sitesinin görünmeyen tarafında işlem yapsalar da kullanıcı deneyimine doğrudan etkileri de bulunur.
  
                <hr  style={{ border: '3px solid white', borderRadius : '3px'}} className='text-white mt-5'/></p> 
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

export default BackEndDeveloper
