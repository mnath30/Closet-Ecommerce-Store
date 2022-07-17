import axios from "axios";
import {
  GET_WISHLIST_ITEMS,
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  WISHLIST_LOADING,
  WISHLIST_ERROR,
} from "../helper/constants";

const getWishlistService = async (dispatch, token) => {
  try {
    dispatch({ type: WISHLIST_LOADING });
    const response = await axios.get("/api/user/wishlist", {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      dispatch({ type: GET_WISHLIST_ITEMS, payload: response.data.wishlist });
    }
  } catch (error) {
    dispatch({ type: WISHLIST_ERROR, payload: error });
  }
};

const addToWishlistService = async (dispatch, token, product) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      dispatch({ type: ADD_TO_WISHLIST, payload: response.data.wishlist });
    }
  } catch (error) {
    dispatch({ type: WISHLIST_ERROR, payload: error });
  }
};

const deleteFromWishlistService = async (dispatch, token, productId) => {
  try {
    dispatch({ type: WISHLIST_LOADING });
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: { authorization: token },
    });
    console.log(response);
    if (response.status === 200) {
      dispatch({ type: DELETE_FROM_WISHLIST, payload: response.data.wishlist });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: WISHLIST_ERROR, payload: error });
  }
};

export { getWishlistService, addToWishlistService, deleteFromWishlistService };
