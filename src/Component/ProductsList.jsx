import React from "react";
import Product from "./Product";
import ListView from './ListView';
import { useFilterContext } from "../Context/filterContext";

const ProductsList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (grid_view === true) {
    return (
      <div className="products-box">
        {filter_products.map((ele, index) => {
          return <Product key={index} {...ele} />;
        })}
      </div>
    );
  }else if(grid_view === false){
    return(
     <div className="listview-products-box">
      {filter_products.map((ele, index) => {
          return <ListView key={index} product = {ele} />;
        })}
     </div>   
    )
  }
};

export default ProductsList;
