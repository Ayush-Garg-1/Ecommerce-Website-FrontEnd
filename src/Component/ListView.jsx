import React from "react";
import { NavLink } from "react-router-dom";
import PriceFormat from "./PriceFormat";
const ListView = ({ product }) => {
  const { id, category, image, price, description} = product;
  return (
    <>
        <div className="listview-product">
          <img src={image} alt={category} />
          <div className="listview-product-info">
            <h2>{category}</h2>
            <h4 style={{color:"blue"}}><PriceFormat price={price} /></h4>
            <p>{description}</p>
            <NavLink to={`/singleproduct/${id}`} style={{ textDecoration: "none" }}>
            <button> read more</button>
            </NavLink>
          </div>
        </div>
    </>
  );
};

export default ListView;
