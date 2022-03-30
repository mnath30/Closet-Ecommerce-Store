const sorting=(type,productlist)=>{
    if (type.sorting==="PRICE_HIGH_TO_LOW"){
        return productlist.sort((firstItem,nextItem)=>nextItem.price-firstItem.price)     
    }
    if (type.sorting==="PRICE_LOW_TO_HIGH"){
        return productlist.sort((firstItem,nextItem)=>firstItem.price-nextItem.price)
    }  
    return productlist
}

export {sorting}