const incrementQuantity=(item,cartArray)=>{
    const updatedCart=cartArray.map(element=>element._id===item._id?
      {...element,qty:element.qty+1}:{...element})
    localStorage.setItem("cart",JSON.stringify(updatedCart))  
    return updatedCart  
}

const decrementQuantity=(item,cartArray)=>{
  const updatedCart=cartArray.map(element=>element._id===item._id && element.qty!==0?
    {...element,qty:element.qty-1}:{...element})
  localStorage.setItem("cart",JSON.stringify(updatedCart))  
  return updatedCart  
}

export { incrementQuantity,decrementQuantity }