import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductProvider } from "./Context/ProductContext";
import { FilterContextProvider } from "./Context/filterContext";
import { CartContextProvider } from "./Context/cartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ProductProvider>
  <FilterContextProvider>
  <CartContextProvider>
  <App />
  </CartContextProvider>
  </FilterContextProvider>
  </ProductProvider>
);
