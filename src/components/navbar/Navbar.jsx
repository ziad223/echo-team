import './navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuMoon, LuSun } from "react-icons/lu";
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

const Navbar = ({changeTheme , dark}) => {

  useEffect(() =>{
    document.querySelector(".menu-icon").onclick = function(){
      document.querySelector(".nav-middle ul").classList.toggle("open")
    }
  } , [])


  return (
    <Fragment>
    <div className='navbar'>
      <div className="nav-left">
      <TiShoppingCart className='cart-icon'/>
      </div>
     
      <div className="nav-middle">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="nav-right">
        {dark ?
         <LuSun className='sun-icon' onClick={changeTheme}/>
          : <LuMoon className='moon-icon' onClick={changeTheme}/>}
         
         
       <MdOutlineShoppingBag className='bag-icon'/>
        <span>0</span>
      </div>
      <FiMenu className='menu-icon'/>
    </div>
    <hr />
    </Fragment>
  )
}

export default Navbar
