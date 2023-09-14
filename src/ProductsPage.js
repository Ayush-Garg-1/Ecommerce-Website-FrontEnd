import React from "react";
import TopFilter from "./Component/TopFilter";
import ProductsList from "./Component/ProductsList";
import { useFilterContext } from "./Context/filterContext";
import PriceFormat from "./Component/PriceFormat";
const ProductsPage = () => {
  const {
    filters: { text , price , maxPrice ,minPrice },
    IsFilterLoading,
    UpdateFilterValue,
    all_products,
    clearAllFilters
  } = useFilterContext();
  // Get Unique Data
  const getAttributeProduct = (all_products, property) => {
    let data = all_products.map((ele) => {
      return ele[property];
    });
    const uniqueData = ["all", ...new Set(data)];
    return uniqueData;
  };
  const categoryProductData = getAttributeProduct(all_products, "category");


  if(all_products.length == 0 ){
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
    <section className="ProductsPage-section">
      <div className="filter-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search Products . . ."
            value={text}
            onChange={UpdateFilterValue}
          />
        </form>
        <div className="category-filter">
          <h2>categories</h2>
          {categoryProductData.map((categoryEle, index) => {
            return (
              <button
                key={index}
                type="button"
                name="category"
                value={categoryEle}
                onClick={UpdateFilterValue}
              >{categoryEle}
              </button>
            );
          })}
        </div>
        <div className="product-price-range">
        <h2>price</h2>
        <PriceFormat price={price} />
        <input type="range" 
        name="price"
        min={minPrice}
        max={maxPrice}
        value={price} 
        onChange={UpdateFilterValue}
        />
        </div>
        <button className="clear-filter-btn" onClick={clearAllFilters} >clear filter</button>
      </div>
      <div className="filter-product-section">
        <TopFilter />
        <ProductsList />
      </div>
    </section>
  );
};

export default ProductsPage;
