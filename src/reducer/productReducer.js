import { initialState } from "../helper";
import {
  GET_ALL_PRODUCTS,
  FILTER_BY_PRICE,
  FILTER_BY_BRANDS,
  RATING,
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  FILTER_BY_GENDER,
  CLEAR_ALL,
  GET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_ERROR,
  SEARCH,
} from "../helper/constants";

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, productData: action.payload };

    case GET_SINGLE_PRODUCT_LOADING:
      return { ...state, currentProductLoading: true };

    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        currentProductLoading: false,
        currentProduct: { ...action.payload },
        currentProductError: "",
      };

    case GET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        currentProductLoading: false,
        currentProductError: action.payload,
      };

    case FILTER_BY_PRICE:
      return { ...state, pricerange: action.payload };

    case FILTER_BY_BRANDS:
      return {
        ...state,
        listofbrands: state.listofbrands.includes(action.payload)
          ? state.listofbrands.filter((ele) => ele !== action.payload)
          : [...state.listofbrands, action.payload],
      };

    case RATING:
      return { ...state, rating: action.payload };

    case PRICE_HIGH_TO_LOW:
      return { ...state, sorting: action.payload };

    case PRICE_LOW_TO_HIGH:
      return { ...state, sorting: action.payload };

    case FILTER_BY_GENDER:
      return { ...initialState, gender: action.payload };

    case SEARCH:
      return { ...initialState, search: action.payload };

    case CLEAR_ALL:
      return { ...initialState };

    default:
      return { ...state };
  }
};

export { productReducer };
