const filterByRating=(type,productlist)=>{
    if (type.rating==="4_STARS_AND_ABOVE"){
        return productlist.filter(element=>element.rating>=4)
    }
    if (type.rating==="3_STARS_AND_ABOVE"){
        return productlist.filter(element=>element.rating>=3)
    }
    if (type.rating==="2_STARS_AND_ABOVE"){
        return productlist.filter(element=>element.rating>=2)
    }
    if (type.rating==="1_STAR_AND_ABOVE"){
        return productlist.filter(element=>element.rating>=1)
    }
    
    return productlist
}

export {filterByRating}