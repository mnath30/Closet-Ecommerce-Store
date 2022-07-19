import axios from "axios";
import {
  ADDRESS_ERROR,
  ADDRESS_LOADING,
  GET_ADDRESS,
  DELETE_ADDRESS,
  UPDATE_ADDRESS,
  ADD_ADDRESS,
} from "../helper/constants";

const getAddressService = async (dispatch, token) => {
  try {
    dispatch({ type: ADDRESS_LOADING });
    const response = await axios.get("/api/user/address", {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200)
      dispatch({ type: GET_ADDRESS, payload: response.data.address });
  } catch (error) {
    dispatch({
      type: ADDRESS_ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const addAddressService = async (dispatch, token, address) => {
  try {
    dispatch({ type: ADDRESS_LOADING });
    const response = await axios.post(
      "/api/user/address",
      { address },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      dispatch({ type: ADD_ADDRESS, payload: response.data.address });
    }
  } catch (error) {
    dispatch({
      type: ADDRESS_ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const deleteAddressService = async (dispatch, token, addressId) => {
  try {
    dispatch({ type: ADDRESS_LOADING });
    const response = await axios.delete(`/api/user/address/${addressId}`, {
      headers: { authorization: token },
    });
    if (response.status === 200) {
      dispatch({ type: DELETE_ADDRESS, payload: response.data.address });
    }
  } catch (error) {
    dispatch({
      type: ADDRESS_ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

const updateAddressService = async (dispatch, token, address, addressId) => {
  try {
    dispatch({ type: ADDRESS_LOADING });
    const response = await axios.post(
      `/api/user/address/${addressId}`,
      { address },
      { headers: { authorization: token } }
    );
    if (response.status === 200) {
      dispatch({ type: UPDATE_ADDRESS, payload: response.data.address });
    }
  } catch (error) {
    dispatch({
      type: ADDRESS_ERROR,
      payload: "There was some error in processing your request",
    });
  }
};

export {
  getAddressService,
  addAddressService,
  deleteAddressService,
  updateAddressService,
};
