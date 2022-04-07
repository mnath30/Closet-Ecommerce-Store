const cartWishlistInitialState={
  cart:localStorage.getItem("cart")?[...JSON.parse(localStorage.getItem("cart"))]:[],
  wishlist:localStorage.getItem("wishlist")?[...JSON.parse(localStorage.getItem("wishlist"))]:[],
  totalPrice:0
}

export {cartWishlistInitialState}