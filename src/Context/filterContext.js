import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import { ProductStore } from "./ProductContext";
import reducer from "../Reducer/FilterReducer";

// Create Context
const FilterContext = createContext();
const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sort_value:"lowest",
    filters:{
      text:"",
      category:"all",
      price:0,
      maxPrice:0,
      minPrice:0,
    }
}
// Create Provider 
export const  FilterContextProvider = ({ children }) => {
  const {products} = ProductStore();
  const [state,dispatch] = useReducer(reducer,initialState);  
  const setGridView = ()=>{
    dispatch({type:"SET_GEID_VIEW"})
  }
  const setListView = ()=>{
    dispatch({type:"SET_LIST_VIEW"})
  }
  // Sort product Data 
  const sortingProductData = (event)=>{
    let sortValue= event.target.value;
    dispatch({type:"GET_SORT_VALUE",payload:sortValue});
  }

  // Set Input Filter value
  const UpdateFilterValue = (e)=>{
    let name = e.target.name;
    let value = e.target.value
    dispatch({type:"SET_FILTER_VALUE",payload:{name,value}});
  }
  useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"});
    dispatch({type:"SET_SORT_PRODUCTS"});
  },[state.sort_value,state.filters])

  useEffect(() => {
    dispatch({type:"ALL_FILTER_PRODUCTS", payload:products })
  },[products]);

  // Clear All Filters
  const clearAllFilters=()=>{
    dispatch({type:"CLRAE_FILTERS"});
    dispatch({type:"ALL_FILTER_PRODUCTS", payload:products })
  }

  return( 
  <FilterContext.Provider value={{
    ...state , 
    setGridView,
    setListView,
    sortingProductData,
    UpdateFilterValue,
    clearAllFilters
  }}>
  {children}
  </FilterContext.Provider>
  );
};

// Custom hook for reusability
export const useFilterContext = () => {
  return useContext(FilterContext);
};