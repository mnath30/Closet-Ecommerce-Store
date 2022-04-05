const removeFromWishlist=(item,wishlistArray)=>{
  const updatedWishlist=wishlistArray.filter(element=>element._id!==item._id)
  localStorage.setItem("wishlist",JSON.stringify(updatedWishlist))
  return updatedWishlist
}

export { removeFromWishlist }