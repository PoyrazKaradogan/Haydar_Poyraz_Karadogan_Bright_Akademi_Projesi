import Header from './Header/Header';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/'/>
     </Routes>
     </BrowserRouter>
    
</>
  );
}

export default App;
