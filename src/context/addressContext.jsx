import { createContext, useContext, useReducer } from "react";
import { addressReducer } from "../reducer";

const initialState = {
  addressLoading: false,
  addressError: "",
  userAddressList: [],
  currentEditingAddress: {},
  editingAddress: false,
};
const addressContext = createContext(initialState);
const useAddress = () => useContext(addressContext);

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(
    addressReducer,
    initialState
  );
  return (
    <addressContext.Provider value={{ addressState, addressDispatch }}>
      {children}
    </addressContext.Provider>
  );
};

export { AddressProvider, useAddress };
