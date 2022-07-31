import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const initialUserState = {
  encodedToken: localStorage.getItem("encodedToken")
    ? localStorage.getItem("encodedToken")
    : "",
  userName: localStorage.getItem("username")
    ? localStorage.getItem("username")
    : "",
  email: "",
  loading: false,
  error: "",
  cart: [],
  cartLoading: false,
  cartError: "",
  wishlistLoading: false,
  wishlist: [],
  wishlistError: "",
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialUserState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
