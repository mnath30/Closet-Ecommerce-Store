const filterByGender = (state, productList) => {
  if (state.gender) {
    return productList.filter(
      (element) => element.gender.toLowerCase() === state.gender.toLowerCase()
    );
  }
  return productList;
};

export { filterByGender };
