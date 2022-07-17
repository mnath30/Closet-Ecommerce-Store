import axios from "axios";
import {
  CART_LOADING,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CART_QUANTITY,
  CART_ERROR,
  GET_CART_ITEMS,
} from "../helper/constants";

const getCartService = async (dispatch, token) => {
  try {
    dispatch({ type: CART_LOADING });
    const response = await axios.get("/api/user/cart", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200)
      dispatch({ type: GET_CART_ITEMS, payload: response.data.cart });
  } catch (error) {
    dispatch({ type: CART_ERROR, payload: error });
  }
};

const addToCartService = async (dispatch, token, product) => {
  try {
    console.log(product, dispatch, token);
    const response = await axios.post(
      "/api/user/cart",
      { product },
      { headers: { authorization: token } }
    );
    console.log(response);
    if (response.status === 201) {
      console.log(response);
      dispatch({ type: ADD_TO_CART, payload: response.data.cart });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: "CART_ERROR", payload: error });
  }
};

const deleteFromCartService = async (dispatch, token, productId) => {
  try {
    dispatch({ type: CART_LOADING });
    const response = await axios.delete(`/api/user/cart/${productId}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      dispatch({ type: DELETE_FROM_CART, payload: response.data.cart });
    }
  } catch (error) {
    dispatch({ type: CART_ERROR, payload: error });
  }
};

const changeCartQuantityService = async (
  dispatch,
  token,
  action,
  productId
) => {
  try {
    console.log(action, productId);
    dispatch({ type: CART_LOADING });
    const response = await axios.post(
      `/api/user/cart/${productId}`,
      { action },
      { headers: { authorization: token } }
    );
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: CHANGE_CART_QUANTITY, payload: response.data.cart });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: CART_ERROR, payload: error });
  }
};

export {
  getCartService,
  addToCartService,
  deleteFromCartService,
  changeCartQuantityService,
};
