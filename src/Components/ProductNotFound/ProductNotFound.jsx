import "./product-not-found.css"

import {errorproductimg} from '../../asset'
const ProductNotFound=()=>{
  return (
    <div>
      <img src={errorproductimg} className="error-img" alt="product-not-found"/>  
      <h1 className="error-img-heading">There are no products in the filtered category...</h1>
    </div>
  )
}

export {ProductNotFound}