import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomMenu = () => {
  return (
    <section className='bottem-menu-section s'>
   <a href="/" className="home-icon same-property">
   <i class="fa-solid fa-house"></i>
   <p>home</p>
   </a>
    <NavLink to="/products" className="more-icon same-property">
    <i class="fa-solid fa-magnifying-glass"></i>
    <p>search</p>
    </NavLink>
    <NavLink to="/cart" className="cart-icon same-property">
    <i class="fa-solid fa-cart-shopping"></i>
    <p>cart</p>
    </NavLink>
    <a href="tel:1234567892" className="contact-icon same-property">
    <i class="fa-solid fa-phone-volume"></i>
    <p>contact</p>
    </a>   
    </section> 
  )
}

export default BottomMenu