const itemInCartWishlist = (productId, alreadyPresentProducts) => {
  const isProductPresent = alreadyPresentProducts.some(
    (item) => item._id === productId
  );
  return isProductPresent;
};

export { itemInCartWishlist };
