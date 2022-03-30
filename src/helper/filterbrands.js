const filterbrands=(brandname,productList)=>{
    let newFilteredarray=[];
    let brandFilter;
    if(brandname.listofbrands.length!==0){
        brandname.listofbrands.forEach(brand=>{
        brandFilter=productList.filter(item=>item.brand.toLowerCase()===brand.toLowerCase())    
        newFilteredarray=[...newFilteredarray,...brandFilter]
    
    })
    return newFilteredarray
    }
    return productList
   
}

export {filterbrands}

