// import {
//   addToCart,
//   addToWishlist,
//   removeFromCart,
//   removeFromWishlist,
//   moveToCart,
//   incrementQuantity,
//   decrementQuantity,
//   moveToWishlist,
// } from "../helper";
import {
  CART_LOADING,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CART_QUANTITY,
  CART_ERROR,
  GET_CART_ITEMS,
  GET_WISHLIST_ITEMS,
  ADD_TO_WISHLIST,
  DELETE_FROM_WISHLIST,
  WISHLIST_LOADING,
  WISHLIST_ERROR,
} from "../helper/constants";

const cartWishlistReducer = (state, action) => {
  switch (action.type) {
    case CART_LOADING:
      return { ...state, cartLoading: true, cartError: "" };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartLoading: false,
        cartError: "",
        cart: [...action.payload],
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartLoading: false,
        cartError: "",
        cart: [...action.payload],
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartLoading: false,
        cartError: "",
        cart: [...action.payload],
      };
    case CHANGE_CART_QUANTITY:
      console.log(action.payload);
      return {
        ...state,
        cartLoading: false,
        cartError: "",
        cart: [...action.payload],
      };
    case CART_ERROR:
      return {
        ...state,
        cartLoading: false,
        cartError: "There was some error in processing your request",
      };
    case WISHLIST_LOADING:
      return { ...state, wishlistLoading: true };
    case GET_WISHLIST_ITEMS:
      return {
        ...state,
        wishlistLoading: false,
        wishlistError: "",
        wishlist: [...action.payload],
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlistLoading: false,
        wishlistError: "",
        wishlist: [...action.payload],
      };
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        wishlistLoading: false,
        wishlistError: "",
        wishlist: [...action.payload],
      };
    case WISHLIST_ERROR:
      return {
        ...state,
        wishlistError: "There was some error in processing your request",
      };
    // case "MOVE_TO_CART":
    //   const [updatedCart, updatedWishlist] = moveToCart(
    //     action.payload,
    //     state.cart,
    //     state.wishlist
    //   );
    //   return {
    //     ...state,
    //     cart: [...updatedCart],
    //     wishlist: [...updatedWishlist],
    //   };
    // case "INCREASE_QTY":
    //   return {
    //     ...state,
    //     cart: [...incrementQuantity(action.payload, state.cart)],
    //   };
    // case "DECREASE_QTY":
    //   return {
    //     ...state,
    //     cart: [...decrementQuantity(action.payload, state.cart)],
    //   };
    // case "MOVE_TO_WISHLIST":
    //   const [newCart, newWishlist] = moveToWishlist(
    //     action.payload,
    //     state.wishlist,
    //     state.cart
    //   );
    // return { ...state, wishlist: [...newWishlist], cart: [...newCart] };
    case "TOTAL_PRICE":
      return { ...state, totalPrice: action.payload };
    default:
      return { ...state };
  }
};

export { cartWishlistReducer };
