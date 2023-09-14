const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        IsLoading: true,
      };
    case "SET_DATA":
      const featureData = action.payload.filter((ele) => {
        return ele.id === 4 || ele.id == 6 || ele.id == 7;
      });
      return {
        ...state,
        IsLoading: false,
        IsError: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "SET_ERROR":
      return {
        ...state,
        IsLoading: false,
        IsError: true,
      };
    case "SET_SINGLE_LOADING":
      return {
        ...state,
        IsSingleLoading: true,
      };
    case "SET_SINGLE_ERROR":
        return {
          ...state,
          IsSingleLoading: false,
          IsSingleERRORr: true,
        };  
    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        IsSingleLoading: false,
        IsSingleERROR: false,
        singleProduct: action.payload,
      };
    default:
      return state;
  }
};
export default ProductReducer;
