import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <footer>
    <section className='above-footer'>
    <div className="foot-text">
    <p>ready to get started ?</p>
    <p>Shop now our quality product</p>
    </div>
    <NavLink to="/products">
    <button className='reuse-btn'>shop now</button>
    </NavLink>
    </section>
    <div className="footer-links">
    <div className="foot-about links">
    <h2>About us</h2>
    <p>We are a world best ecommerce website. we are provide quality products,super fast and free delivery and super secure payment system </p>
    </div>
    <div className="company-link links">
    <h2>Links</h2>
    <a href="/" className="foot-nav-link">home</a>
    <a href="/about" className="foot-nav-link">about</a>
    <a href="/products" className="foot-nav-link">products</a>
    <a href="/contact" className="foot-nav-link">contact us</a>
    </div>
    <hr className='line' />
    <div className="follow-us links">
    <h2>follow us</h2>
    <a href='https://www.linkedin.com/in/ayush-garg1' className="foot-nav-link"><span><i class="fa-brands fa-linkedin"></i></span>linked in</a>
    <a href='https://github.com/Ayush-Garg-1' className="foot-nav-link"><span className='git'><i class="fa-brands fa-square-github"></i></span>gitHub</a>
    <a href="/" className="foot-nav-link"><span><i class="fa-brands fa-square-instagram"></i></span>instagram</a>
    </div>
    <hr className='line' />
    <div className="contact-links links">
    <h2>contact Now</h2>
    <a href="tel9135689445" className="foot-nav-link">+91 9135-6894-45</a>
    <a href="email:abc@gmail.com" className="foot-nav-link">ayustore@gmail.com</a>
    <NavLink to='/contact' className="foot-nav-link">
    <button className='reuse-btn'>Contact</button>
    </NavLink>
    </div>
    </div>
    <hr className='line' />
    <div className="fotter-end">
    @ { new Date().getFullYear() } AYU Store, all right reserved
    </div>
    </footer>
    </>
  )
}

export default Footer