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
  SET_CURRENT_ADDRESS,
  TOTAL_PRICE,
  SET_LATEST_ORDER,
  CLEAR_CART,
  CLEAR_CURRENT_DELIVERY_ADDRESS,
} from "../helper/constants";

const cartWishlistReducer = (state, action) => {
  switch (action.type) {
    case CART_LOADING:
      return {
        ...state,
        cartLoading: true,
        cartError: "",
      };
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
    case TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case SET_CURRENT_ADDRESS:
      return { ...state, currentDeliveryAddress: action.payload };
    case SET_LATEST_ORDER:
      return {
        ...state,
        latestOrder: {
          paymentId: action.payload,
          orderItems: [...state.cart],
          orderTotal: state.totalPrice,
          shippingAddress: { ...state.currentDeliveryAddress },
        },
      };
    case CLEAR_CURRENT_DELIVERY_ADDRESS:
      return { ...state, currentDeliveryAddress: {} };
    case CLEAR_CART:
      return { ...state, cart: action.payload };
    default:
      return { ...state };
  }
};

export { cartWishlistReducer };
