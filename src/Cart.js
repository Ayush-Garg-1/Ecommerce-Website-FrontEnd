import React from 'react';
import {NavLink} from 'react-router-dom';
import { useCartContext } from './Context/cartContext';
import PriceFormat from './Component/PriceFormat';
const Cart = () => {
  const {cart,
    removeAddToCartProduct,
    clearAllCartProducts,
    decrement,
    increment,
    total_price,
    shipping_fee
  } = useCartContext();

  if(total_price === 0){
    return <div className='empty-Cart'>
    <h1>Cart Is Empty</h1>
    <NavLink to="/products">
    <button type="button" className='shoping-btn'>Continue shoping</button>
    </NavLink>
    </div>
  }
  return (
    <>
    <section className="cart-section">
    {
      cart?.map((ele,index)=>{
      const {id, title, image, price, quantities} = ele;
       return( <div className="cart-product" key={index}>
        <div className="cart-product-img--info">
        <img src={image} alt={title}/>
        </div>
       <div className="product-price">
       <h3>price</h3>
       <PriceFormat price={price} />
       </div>
        <div className="cart-quantity">
        <h3>quantity</h3>
        <div className="cart-quantity-btns">
        <p onClick={()=>decrement(id)} >-</p>
        <p className="quantity">{quantities}</p>
        <p onClick={()=>increment(id)}>+</p>
        </div>
        </div>
        <div className="product-price">
       <h3>subPrice</h3>
       <PriceFormat price={price*quantities} />
       </div>
        <div className="remove-product">
        <h3>remove</h3>
        <button onClick={()=>removeAddToCartProduct(id)} ><i className="fa-solid fa-trash" style={{color:"red",fontSize:"25px"}}></i></button>
        </div>
        </div>
       )
      })
    }
    <hr />
    <div className="cart-btns">
    <NavLink to="/products">
    <button type="button" className='shoping-btn'>Continue shoping</button>
    </NavLink>
    <button type="button" className='clear-cart-btn'onClick={clearAllCartProducts} >clear cart</button>
    </div>
    </section>
    <div className="cart-price-section">
    <div className="cart-price-box">
    <p>subtotal : </p>
    <PriceFormat price={total_price} />
    </div>
    <div className="cart-price-box">
    <p>shipping fee:</p>
    <PriceFormat price={shipping_fee/40} />
    </div>
    <hr />
    <div className="cart-price-box">
    <p>order total</p>
    <PriceFormat price={(total_price+shipping_fee/40)} />
    </div>
    <hr />
    
    </div>
    </>
  )
}

export default Cart