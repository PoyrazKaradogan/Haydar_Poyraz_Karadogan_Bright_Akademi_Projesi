import Header from './Components/Header';
import HomePage from "./Pages/HomePage/HomePage.js";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppContext } from './Components/Contexts/AppContexts.js';
import Footer from './Pages/Footer/Footer.js';
function App() {
  return (
    <>
     <AppContext.Provider value={{}}>
     <BrowserRouter>
     <Header />
     <Routes>
     <Route path='/' element={<HomePage />} />
     </Routes> 
     <Footer />
     </BrowserRouter>
    
    </AppContext.Provider>
</>
  );
}

export default App;
