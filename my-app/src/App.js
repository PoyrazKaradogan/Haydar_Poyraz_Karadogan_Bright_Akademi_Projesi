import Header from './Components/Header';
import HomePage from "./Pages/HomePage/HomePage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from './Components/Contexts/Contexts.js';
import Footer from './Components/Footer.js';
import Contact from './Pages/Contact/Contact';
import About from "./Pages/About/About.js";
import Education from "./Pages/Education/Education.js";
import Teacher from "./Pages/Teacher/Teacher.js";



function App() {
  
  
  return (
    <>
     <AppContext.Provider value={{}}>
     <BrowserRouter>
     <Header />
    
     <Routes>
     <Route path='/' element={<HomePage />} />   
     <Route path='/contact' element={<Contact />} />
     <Route path='/about' element={<About />} />
      <Route path='/educations' element={<Education />} />
      <Route path='/instructors' element={<Teacher />} />
     </Routes> 
    
     <Footer />
     </BrowserRouter>
    
    </AppContext.Provider>
</>
  );
}

export default App;
