const addToCart=(item,cartArray)=>{
  if(cartArray.some(element=>element._id===item._id)){
    return [...cartArray]
  }
  const newCart=[...cartArray,{...item,qty:1,isAddedToCart:true}]
  localStorage.setItem("cart",JSON.stringify(newCart))
  return newCart
}

export { addToCart }