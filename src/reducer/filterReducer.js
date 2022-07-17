import { initialState } from "../helper";
import { GET_ALL_PRODUCTS } from "../helper/constants";

const filterReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, productData: action.payload };

    case "FILTER_BY_PRICE":
      return { ...state, pricerange: action.payload };

    case "FILTER_BY_BRANDS":
      return {
        ...state,
        listofbrands: state.listofbrands.includes(action.payload)
          ? state.listofbrands.filter((ele) => ele !== action.payload)
          : [...state.listofbrands, action.payload],
      };

    case "RATING":
      return { ...state, rating: action.payload };

    case "PRICE_HIGH_TO_LOW":
      return { ...state, sorting: action.payload };

    case "PRICE_LOW_TO_HIGH":
      return { ...state, sorting: action.payload };

    case "FILTER_BY_GENDER":
      return { ...state, gender: action.payload };

    case "CLEAR_ALL":
      return { ...initialState };

    default:
      return { ...state };
  }
};

export { filterReducer };
