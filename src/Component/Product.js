import React from 'react';
import { NavLink } from 'react-router-dom';
import PriceFormat from './PriceFormat';
const Product = (product) => {
    const {id , title ,image ,  price , category} = product;
  return (
    <>
    <NavLink to={`/singleproduct/${id}`} style={{textDecoration:"none"}} className="product">
  
        <img src={image} alt={category} />
        <div className="product-info">
        <div className='info'>
        <h2>{title}</h2>
        <h3><PriceFormat price={price} /></h3>
        </div>
        <h4 className='category'>{category}</h4>
        </div>
    
    </NavLink>
    </>
  )
}

export default Product;