import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/CartReducer";
import { useEffect } from "react";

const CartContext = createContext();
// Get Data From Lacal Storage
const getLocalStorageData = () => {
  let localStorageData = localStorage.getItem("VANCartData");
  if (localStorageData === null) {
    return [];
  } else {
    try {
      return JSON.parse(localStorageData); 
    } catch (error) {
      return [];
    }
  }
};

const initialState = {
  cart: getLocalStorageData(),
  total_cart_product:0,
  total_price:0,
  shipping_fee:500,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

//   store add to cart products
  const SetCartData = (id, quantities, singleProduct) => {
    dispatch({
      type: "SET_CART_DATA",
      payload: { id, quantities, singleProduct },
    });
  };
//   remove AddToCart Product
const removeAddToCartProduct = (id)=>{
    dispatch({type:"REMOVE_CART_PRODUCT",payload:id})
}
// Clear All The Cart Products
const clearAllCartProducts=()=>{
  dispatch({type:"CLEAR_ALL_CART_PRODUCT"})
}
// Decrement the Quentity in Cart Product
const decrement = (id)=>{
  dispatch({type:"DECREMENT_QUANTITY",payload:id});
}
// Increment the Quentity in Cart Product
const increment  = (id)=>{
  dispatch({type:"INCREMENT_QUANTITY",payload:id});
}

  useEffect(() => {
    dispatch({type:"SET_CART_ITEMS"});
    dispatch({type:"SET_TOTAL_PRICE"});
    localStorage.setItem("VANCartData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        SetCartData,
        removeAddToCartProduct,
        clearAllCartProducts,
        decrement,
        increment
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
