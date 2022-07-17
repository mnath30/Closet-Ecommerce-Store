const itemInCartWishlist = (productId, alreadyPresentProducts) => {
  const isProductPresent = alreadyPresentProducts.some(
    (item) => item._id === productId
  );
  console.log(isProductPresent);
  return isProductPresent;
};

export { itemInCartWishlist };
