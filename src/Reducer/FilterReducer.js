const FilterReducer = (state, action) => {
  switch (action.type) {
    case "ALL_FILTER_PRODUCTS":
      let priceArr = action.payload.map((ele) => {
        return ele.price;
      });
      // find max element from an array
      let maxPrice = Math.max(...priceArr);
      return {
        ...state,
        filter_products: action.payload,
        all_products: action.payload,
        filters: {
          ...state.filters,
          price: maxPrice,
          maxPrice,
        },
      };
    case "SET_GEID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sort_value: action.payload,
      };

    case "SET_SORT_PRODUCTS": {
      let sortedData;
      const { sort_value, filter_products } = state;
      let tempProductdata = [...filter_products];
      const SortingProducts = (a, b) => {
        switch (sort_value) {
          case "atoz":
            return a.title.localeCompare(b.title);
          case "ztoa":
            return b.title.localeCompare(a.title);
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
        }
      };
      sortedData = tempProductdata.sort(SortingProducts);

      return {
        ...state,
        filter_products: sortedData,
      };
    }
    case "SET_FILTER_VALUE": {
      let { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }
    case "FILTER_PRODUCTS": {
      let { all_products } = state;
      let { text, category, price} = state.filters;
      let tempFilterProducts = [...all_products];
      if (text !== "all") {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.title.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.category === category;
        });
      }
      if (price) {
        tempFilterProducts = tempFilterProducts.filter((ele) => {
          return ele.price <= price
        });
      }
      return {
        ...state,
        filter_products: tempFilterProducts,
      };
    }
    case "CLRAE_FILTERS":{
      return{
        ...state,
          filters:{
            text:"",
            category:"all",
            price:0,
            maxPrice:0,
            minPrice:0,
        }
      }
    }
    default:
      return state;
  }
};

export default FilterReducer;
