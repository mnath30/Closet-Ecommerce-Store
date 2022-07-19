const searchProducts = (state, productList) => {
  const searchResults = productList.filter(
    (product) =>
      product.brand.toLowerCase().includes(state.search.toLowerCase()) ||
      product.category.toLowerCase().includes(state.search.toLowerCase()) ||
      product.itemname.toLowerCase().includes(state.search.toLowerCase())
  );
  return searchResults;
};

export { searchProducts };
