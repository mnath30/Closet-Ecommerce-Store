import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  PRODUCT_LOADING,
  PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_LOADING,
  GET_SINGLE_PRODUCT_ERROR,
} from "../helper/constants";

const getAllProductService = async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LOADING });
    const response = await axios.get("/api/products");
    if (response.status === 200) {
      dispatch({ type: GET_ALL_PRODUCTS, payload: response.data.products });
    }
  } catch (error) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const getSingleProductService = async (dispatch, productId) => {
  try {
    dispatch({ type: GET_SINGLE_PRODUCT_LOADING });
    const response = await axios.get(`/api/products/${productId}`);
    if (response.status === 200) {
      if (response.data.product !== null) {
        dispatch({ type: GET_SINGLE_PRODUCT, payload: response.data.product });
      } else {
        dispatch({
          type: GET_SINGLE_PRODUCT_ERROR,
          payload: "There was some error in processing your request",
        });
      }
    }
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PRODUCT_ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

export { getAllProductService, getSingleProductService };
