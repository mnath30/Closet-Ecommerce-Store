import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
  moveToCart,
  incrementQuantity,
  decrementQuantity,
  moveToWishlist,
} from "../helper";

const cartWishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...addToCart(action.payload, state.cart)] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...removeFromCart(action.payload, state.cart)],
      };
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...addToWishlist(action.payload, state.wishlist)],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...removeFromWishlist(action.payload, state.wishlist)],
      };
    case "MOVE_TO_CART":
      const [updatedCart, updatedWishlist] = moveToCart(
        action.payload,
        state.cart,
        state.wishlist
      );
      return {
        ...state,
        cart: [...updatedCart],
        wishlist: [...updatedWishlist],
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cart: [...incrementQuantity(action.payload, state.cart)],
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cart: [...decrementQuantity(action.payload, state.cart)],
      };
    case "MOVE_TO_WISHLIST":
      const [newCart, newWishlist] = moveToWishlist(
        action.payload,
        state.wishlist,
        state.cart
      );
      return { ...state, wishlist: [...newWishlist], cart: [...newCart] };
    case "TOTAL_PRICE":
      return { ...state, totalPrice: action.payload };
    default:
      return { ...state };
  }
};

export { cartWishlistReducer };
