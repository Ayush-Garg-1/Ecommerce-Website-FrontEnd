import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../Context/cartContext";
const Navbar = () => {
  const { total_cart_product } = useCartContext();
  const [ham,setHam] = useState(false);
  return (
    <>
      <nav>
      <div className="bars-box">
      <NavLink to="/" style={{textDecoration:"none" }}>
        <div className="logo">
            <p>Ayu</p>
            <span>store</span>
        </div>
        </NavLink>
        <div className="bar">
        <i className={ham ? "not-active" : "active"} onClick={()=>setHam(true)}><i class="fa-solid fa-bars" style={{fontSize:"28px",color:"orange" ,fontWeight:"bold"}}></i></i>
        <i className={ham ? "active" : "not-active"}  onClick={()=>setHam(false)}><i class="fa-solid fa-xmark" style={{fontSize:"28px",color:"orange" ,fontWeight:"bold"}}></i></i>
        </div>
        </div>
        <div className={ham ? " active menu center-menu" : "menu"}>
          <ul>
            <li>
              <NavLink to="/" className="menu-link" onClick={()=>setHam(false)}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="menu-link" onClick={()=>setHam(false)}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="menu-link" onClick={()=>setHam(false)}>
                products
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="menu-link" onClick={()=>setHam(false)}>
                contact
              </NavLink>
            </li>
          </ul>
         <NavLink to="/login">
         <button className="reuse-btn" onClick={()=>setHam(false)}>Login</button>
         </NavLink>
          <NavLink to="/cart" style={{textDecoration:"none"}} onClick={()=>setHam(false)} >
          <div className="cart-logo">
          <i class="fa-solid fa-cart-shopping"></i> <span>{total_cart_product}</span>
          </div>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
