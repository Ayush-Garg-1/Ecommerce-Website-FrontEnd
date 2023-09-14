import React from 'react';
import { NavLink } from 'react-router-dom';
const SameSection = ({heading}) => {
  return (
    <>
    <main>
    <div className="web-info">
    <span>Welcome to</span>
    <h1 className='main-heading'>{heading}</h1>
    <p>We are provide quality products and diffenent type of services like, Super Fast And Free Delivery, Provide High Quality Product, Super Secure Payment System and featured products</p>
    <NavLink to="/products">
    <button className='reuse-btn'>shop now</button>
    </NavLink>
    </div>
    <div className="product-img">
    <img src="./images/shopping.jpg" alt="shopping-img"/>
    </div>
    </main>
    </>
  )
}

export default SameSection