import { createContext, useContext } from "react";
import { useReducer } from "react";
import { cartWishlistReducer } from "../reducer";

const initialState = {
  cart: [],
  cartLoading: false,
  cartError: "",
  wishlist: [],
  wishlistLoading: false,
  wishlistError: "",
  totalPrice: 0,
};

const CartWishlistContext = createContext(initialState);
const useCartWishlist = () => useContext(CartWishlistContext);

const CartWishlistProvider = ({ children }) => {
  const [cartWishlist, cartWishlistDispatch] = useReducer(
    cartWishlistReducer,
    initialState
  );
  return (
    <CartWishlistContext.Provider
      value={{ cartWishlist, cartWishlistDispatch }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};

export { CartWishlistProvider, useCartWishlist };
