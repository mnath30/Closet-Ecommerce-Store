import { useCartWishlist } from "../../context/CartWishlistContext"
import "./wishlist-card.css"

const WishlistCard=({item})=>{
  const { cartWishlistDispatch }=useCartWishlist();
  const {itemname,brand,rating,information,price,source}=item
  return (
    <div className="card card-vert ">
      <div className="card-img card-header-with-badge">
        <img className="responsive-img" src={source} alt={information}/>
        <span className="card-badge card-top-right-badge cursor" onClick={()=>cartWishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:item})}><i className="fas fa-times"></i></span>
        <span className="card-badge card-bottom-left-badge">{rating}<i className="fas fa-star text-danger"></i></span>
      </div> 
      <div className="card-body">
        <h5 className="card-header">{brand}</h5>
        <p className="card-para">{itemname}<br/>Rs. {price}</p>
        <div className="card-buttons">
          <button className="btn-card bg-secondary btn-block" onClick={()=>cartWishlistDispatch({type:"MOVE_TO_CART",payload:item})}>Move to Cart</button>
        </div>
      </div>
    </div> 
  )
}

export {WishlistCard}