const moveToCart=(item,cartArray,wishlistArray)=>{
  let newCart,newWishlist;
    if(cartArray.some(element=>element._id===item._id)){
      newCart=[...cartArray]
    }
    else {
      newCart=[...cartArray,{...item,qty:1,isAddedToCart:true,isAddedToWishlist:false}]
    }
    newWishlist=[...wishlistArray.filter(element=>element._id!==item._id)]
    localStorage.setItem("cart",JSON.stringify(newCart))
    localStorage.setItem("wishlist",JSON.stringify(newWishlist))
    return [newCart,newWishlist]
}

export { moveToCart }