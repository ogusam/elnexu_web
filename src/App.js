
import './App.css';
//import Footer from './component/Footer';
//import HomeBrand from './component/HomeBrand';
//import Navbar from './component/Navbar';
//import AboutUs from './component/AboutUs';
//import Products from './component/Products';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import FormManager from './component/FormManager';
import SinglePage from './component/SinglePage';

function App() {
  return (
    <>
    

    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<SinglePage/>}/>
      <Route path='form' element={<FormManager/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
