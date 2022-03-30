const filterByPrice=(state,productlist)=>{
    return productlist.filter(element=>Number(element.price)<=Number(state.pricerange))
}

export {filterByPrice}