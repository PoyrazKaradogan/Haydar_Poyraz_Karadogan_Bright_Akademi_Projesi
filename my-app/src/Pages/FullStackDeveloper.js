import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const FullStackDeveloper = () => {


  return (

    <Container r fluid className='page'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Row className='justify-content-center'>
        <Col lg='12'>
          <div className='container main-div'>
            <div className='container-header text-center d-flex flex-column align-items-center w-100'>
              <Col lg='12'>
                <h1 className='me-5 w-75 container-header-text text-danger ms-5 mt-3'>Full Stack Developer Eğitimi</h1>
              </Col>
              <Col lg='12'>
                <br />
                <p className=' p-2 text-light'>Öncelikle yazılıma ve web teknolojilerine merakı olan herkese şunu belirtmek isterim, her şeyi temelden yani sıfırdan kavramak normal bir geliştirici için yıllar alırken bu kursumuzda şu an dünyanın en popüler teknolojilerini saatlere sığdırarak çok sağlam bir temel almanızı sağlamaya çalıştım.

Günümüzde bu tür teknolojilerin ana kaynakları genellikle Amerika asıllı olduğundan ve bu yüzyılda bilimin dili İngilizce olduğundan, genelde sağlam kaynaklar ve kursların hepsi İngilizce olarak bulunmaktadır. Bu kursu oluşturmamdaki bir diğer sebebim ise elinizde güzel bir Türkçe referans bulundurmaktır. 

Bu kursun sonunda güzel bir tam donanımlı web sitesi yapılmaktadır. Ancak konuların sonlarında sizlerin daha iyi anlamınızı sağlayacak oldukça fazla örnekler de yer almaktadır.

İsterseniz bu kursumuzu almakla öğreneceğiniz teknolojilere yakından bakalım :

HTML5
CSS3
Bootstrap
JavaScript
DOM Manipulation
jQuery
Unix(Command Line) Commands
NodeJS
NPM
ExpressJS
REST
MongoDB
Database Associations
Authentication
PassportJS
Authorization
<h3 className='text-danger'>KURS VİDEO GÜNCELLEMELERİ</h3>

Şu anki kurs 26 saat gözükmektedir ve şunu belirtmek isterim ki bu uzunluk aslında benim elimden geldiğince indirgemeye çalıştığım bir uzunluk. Bunun birkaç sebebi bulunmakta ve bunlardan ilki sizlerin değerli zamanınızı iyi kullanmak istemem.

Diğer önemli sebebi ise, bu eğitimin güncellenecek olması. Eğitim alanımız Web Development olduğu için, konular oldukça fazla. İlk aşamada sizlere en önemli parçaları göstererek nasıl bir bütün proje çıkaracağımızı öğretmeye çalışsam da asıl amacım güncellemeler ile su üstüne çıkacaktır.

Sizlerin orta düzeyde bilgi sahibi olacağı bu konuların hemen hemen hepsinin üzerine ileri düzeyde dediğimiz bir seviyede eğitim seti daha gelecektir. Bu eğitim setini zaman içerisinde sizlerle paylaşarak bilgilendireceğim elbette. 

Eğer şöyle küçük bir bilgilendirme yapılması gerekirse gelecek yeni videoları şu şekilde planlamaktayım:

İleri Düzey CSS3 - CSS Animations - Layout with Flexbox - Keyframes
Bootstrap - Daha fazla arayüz projeleri
Ajax
NodeJs Advanced ( with ES6  syntax )
MongoDB Advanced
NodeJS - MySQL Projesi
NodeJS REST 
Advanced Authentication 
Angular 
MEAN Stack
SEO Opt.
Umarım işinize çok yarıyacak bir eğitim seti - referansı olucak.

Şimdiden iyi çalışmalar ve mutlu kodlamalar...



<h3 className='text-danger'>

Bu kurs kimler için uygun:</h3>
Web programlama temellerini alarak hızlı bir şekilde orta-üst düzey bir web geliştiricisi olmak isteyenler
Full-stack Wev Developer - Tam Donanımlı Web Yazılımı Geliştiricisi olmak isteyenler
Bilgilerini tekrar pekiştirmek isteyenler
Bu alanda temeli olup daha fazlasını öğrenmek isteyenler
Kısacası yazılıma merakı olan herkes...<hr style={{ border: '3px solid white', borderRadius: '3px' }} className='text-white mt-5' /></p>
              </Col>
            </div>
          </div>
          <Row className='text-center'>
            <Col lg='12'>
              <Button variant="outline-danger mb-2" shref='/Pages/Contact/Contact'style={{width:'200px', height:'70px'}}><h3>Başvuru Yap</h3></Button>
            </Col>

          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default FullStackDeveloper
