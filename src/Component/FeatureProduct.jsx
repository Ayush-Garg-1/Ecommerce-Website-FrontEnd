import React from "react";
import { ProductStore } from "../Context/ProductContext";
import Product from "./Product";

const FeatureProduct = () => {
  const { IsLoading, featureProducts } = ProductStore();
  console.log(IsLoading,"adddd",featureProducts)
  if (IsLoading) {
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
      <section className="feature-product-section">
        <div className="feature-product-info">
          <p>click now!</p>
          <h2>our feature product's</h2>
        </div>
        <div className="feature-product-box">
          {featureProducts.map((ele, index) => {
            return <Product key={index} {...ele} />;
          })}
        </div>
      </section>
    </>
  );
};

export default FeatureProduct;
