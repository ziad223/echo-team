import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Services from './page/Services';
import Shop from './page/Shop';
import Contact from './page/Contact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useState } from 'react';



const App = () => {

  let [dark , setDark] = useState(false);

  function changeTheme(){
    setDark(!dark);
    console.log(dark);
  }

 
 
  return (
 <div className={dark ? 'app-dark' : 'app'}>
    <BrowserRouter>
    <Navbar changeTheme = {changeTheme} dark = {dark}/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/services' element = {<Services/>}/>
      <Route path='/shop' element = {<Shop/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
 </div>
  )
}

export default App
