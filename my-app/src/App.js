import Header from './Components/Header/Header.js';
import HomePage from "./Pages/HomePage/HomePage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from './Components/Contexts/Contexts.js';
import Footer from './Components/Footer.js';
import Contact from './Pages/Contact/Contact';
import About from "./Pages/About/About.js";
import Teacher from "./Pages/Teacher/Teacher.js";
import { Container } from 'react-bootstrap';
import FullStackDeveloper from './Pages/FullStackDeveloper.js';
import FrontEndDeveloper from './Pages/FrontEndDeveloper.js';
import BackEndDeveloper from './Pages/BackEndDeveloper.js';


function App() {

  
  return (
    
    <>
     <AppContext.Provider value={{}}>
     <BrowserRouter>
     <Container fluid className='m-0 p-0' >
     <Header />
  
     <Routes>
     <Route path='/' element={<HomePage />} />   
     <Route path='/contact' element={<Contact />} />
     <Route path='/about' element={<About />} />
     <Route path='/FullStackDeveloper' element={<FullStackDeveloper />} />
     <Route path='/FrontEndDeveloper' element={<FrontEndDeveloper />} />
     <Route path='/BackEndDeveloper' element={<BackEndDeveloper />} />
      <Route path='/Teacher' element={<Teacher />} />
     </Routes> 
    
     <Footer />
      </Container>
     </BrowserRouter>
    
    </AppContext.Provider>
</>
  );
}

export default App;
