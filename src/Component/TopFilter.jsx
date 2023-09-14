import React from "react";
import { useFilterContext } from "../Context/filterContext";
const TopFilter = () => {
    const {setGridView,setListView,filter_products,sortingProductData} = useFilterContext();
  return (
    <div className="top-filter-box">
      <div className="grid-list-view-btns">
        <button onClick={setGridView}  className="grid-line-btn-active"><i class="fa-solid fa-grip"></i></button>
        <button onClick={setListView} className="grid-line-btn-active"><i class="fa-solid fa-bars"></i></button>
      </div>
      <p>{filter_products.length} total products</p>
      <select name="sort" id="sort" className="dropdown" onClick={sortingProductData}>
        <option value="lowest">price (lowest)</option>
        <option disabled></option>
        <option value="highest">price (highest)</option>
        <option disabled></option>
        <option value="atoz">a to z</option>
        <option disabled></option>
        <option value="ztoa">z to a</option>
      </select>
    </div>
  );
};

export default TopFilter;
