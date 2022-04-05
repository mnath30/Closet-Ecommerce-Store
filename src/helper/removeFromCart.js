const removeFromCart=(item,cartArray)=>{
  const updatedCart=cartArray.filter(element=>element._id!==item._id)
  localStorage.setItem("cart",JSON.stringify(updatedCart))
  return updatedCart
}

export { removeFromCart }