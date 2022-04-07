import { createContext,useContext } from "react";
import { cartWishlistInitialState  } from "../helper";
import { useReducer } from "react";
import { cartWishlistReducer } from "../reducer/cartWishlistReducer";

const CartWishlistContext=createContext({cart:[],wishlist:[]})
const useCartWishlist=()=>useContext(CartWishlistContext);

const CartWishlistProvider=({children})=>{
  const [cartWishlist,cartWishlistDispatch]=useReducer(cartWishlistReducer,cartWishlistInitialState)
      return(
        <CartWishlistContext.Provider value={{ cartWishlist,cartWishlistDispatch }}>
          {children}
        </CartWishlistContext.Provider>       
      )
}

export { CartWishlistProvider,useCartWishlist }