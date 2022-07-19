import {
  ADD_ADDRESS,
  UPDATE_ADDRESS,
  DELETE_ADDRESS,
  GET_ADDRESS,
  ADDRESS_ERROR,
  ADDRESS_LOADING,
  CURRENT_UPDATING_ADDRESS,
} from "../helper/constants";

const addressReducer = (state, action) => {
  switch (action.type) {
    case ADDRESS_LOADING:
      return { ...state, addressLoading: true, addressError: "" };
    case ADDRESS_ERROR:
      return { ...state, addressError: action.payload, addressLoading: false };
    case GET_ADDRESS:
      return {
        ...state,
        userAddressList: action.payload,
        addressLoading: false,
        addressError: "",
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        userAddressList: action.payload,
        addressLoading: false,
        addressError: "",
      };
    case ADD_ADDRESS:
      return {
        ...state,
        userAddressList: action.payload,
        addressLoading: false,
        addressError: "",
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        userAddressList: action.payload,
        addressLoading: false,
        addressError: "",
      };
    case CURRENT_UPDATING_ADDRESS:
      return {
        ...state,
        currentEditingAddress: action.payload,
        editingAddress: action.editing,
      };
    default:
      return {
        ...state,
      };
  }
};

export { addressReducer };
