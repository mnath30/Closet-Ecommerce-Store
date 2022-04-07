const moveToWishlist = (item, wishlistArray, cartArray) => {
  let newCart, newWishlist;
  if (wishlistArray.some((element) => element._id === item._id)) {
    newWishlist = [...wishlistArray];
  } else {
    newWishlist = [
      ...wishlistArray,
      { ...item, isAddedToWishlist: true, isAddedToCart: false },
    ];
  }
  newCart = [...cartArray.filter((element) => element._id !== item._id)];
  localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  localStorage.setItem("cart", JSON.stringify(newCart));
  return [newCart, newWishlist];
};

export { moveToWishlist };
