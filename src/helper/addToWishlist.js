const addToWishlist=(item,wishlistArray)=>{
  if(wishlistArray.some(element=>element._id===item._id)){
    return [...wishlistArray]
  }
  const newWishlist=[...wishlistArray,{...item,qty:1,isAddedToWishlist:true}]
  localStorage.setItem("wishlist",JSON.stringify(newWishlist))
  return newWishlist
}

export { addToWishlist }