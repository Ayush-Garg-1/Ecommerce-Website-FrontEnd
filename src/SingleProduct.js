import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ProductStore } from "./Context/ProductContext";
import PriceFormat from "./Component/PriceFormat";
import Star from './Component/Star';
import { useCartContext } from "./Context/cartContext";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { id } = useParams();
  const { GetSingleProduct, IsSingleLoading, singleProduct } = ProductStore();
  const {
    title,
    image,
    price,
    description,
    category,
  } = singleProduct;

  const {SetCartData} = useCartContext();


  useEffect(() => {
    GetSingleProduct(`${API}/${id}`);
  }, []);

  const [quantities,setquantities] = useState(1);


  if (IsSingleLoading) {
    return( 
      <div className="loading-section">
      <div className="load-box">
      <div className="loader">
      </div>
      </div>
      </div>
  );
  }

  return (
    <>
      <div className="top-heading">
        <NavLink to="/" className="home-link">Home</NavLink>
        <p> / {category}</p>
      </div>
      <section className="single-product-section">
        <div className="single-product-image">
        <img src={image} alt={category}/>
        </div>
        <div className="single-product-info">
          <h1>{title}</h1>
          <div className="product-qualities">
          <div className="star-box">
          <Star stars={3.6}/>
          </div>
          <p>({5*id} Customer's Reviews)</p>
          </div>
         <p className="product-price">MRP : <del>{<PriceFormat price={price + price*0.83} />}</del></p>
          <p className="product-price" style={{color:"rgb(128, 0, 255)"}}>profitable deal : {<PriceFormat price = {price}/>}</p>
          <p className="product-description">{description}</p>
          <hr className="hr-line"/>
          <p>category : {category}</p>
          <p>Available stock : {(2*id)-quantities}</p>
          <p className="product-id">ID : {id}</p>
          <hr className="hr-line" />
          <div className="quantities-box">
          <p>quantities  : </p>
          <div className="quantities-btns">
          <p onClick={ quantities > 1 ? ()=>setquantities(quantities-1) : ()=>setquantities(1) } >-</p>
          <p className="quantity">{quantities}</p>
          <p onClick={quantities < 2*id  ? ()=>setquantities(quantities+1) : ()=> setquantities(2*id)} >+</p>
          </div>
          </div>
          <NavLink to="/cart" onClick={()=>SetCartData(id, quantities , singleProduct)}  className="cart-btn">
          add to cart
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
