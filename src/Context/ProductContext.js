import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";

// Create Context
const ProductContext = createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
    IsLoading:false,
    IsError:false,
    products:[],
    featureProducts:[],
    IsSingleLoading:false,
    singleProduct:{},
    IsSingleERROR:false   
}

// Create Provider 
const ProductProvider = ({ children }) => {
   
  const [state,dispatch] = useReducer(reducer,initialState);  
  // Get Single Product data
  const GetSingleProduct= async (url) => {
    dispatch({type:"SET_SINGLE_LOADING"});
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
    } catch (error) {
    dispatch({type:"SET_SINGLE_ERROR"});
    }
  };
  // Get All Products Data
  const getAPIData = async (url) => {
    dispatch({type:"SET_LOADING"});
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({type:"SET_DATA",payload:products})
    } catch (error) {
    dispatch({type:"SET_ERROR"});
    }
  };

  useEffect(() => {
    getAPIData(API);
  }, []);

  return( 
  <ProductContext.Provider value={{...state, GetSingleProduct}}>
  {children}
  </ProductContext.Provider>
  );
};

// Custom hook for reusability
const ProductStore = () => {
  return useContext(ProductContext);
};

export { ProductContext, ProductProvider, ProductStore };