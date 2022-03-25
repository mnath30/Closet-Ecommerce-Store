// import { useState } from 'react'
import './product-card.css'

const ProductCard=({product})=>{

    //The below code will be used later to change the text being displayed on button of the card
    // const [addToCart,setAddToCart]=useState(isAddedToCart?"Go to Cart":"Add to Cart")
    // const [addToWishlist,setAddToWishlist]=useState(isAddedToWishlist?"Remove from Wishlist":"Add to Wishlist")

    const {source,information,brand,itemname,price,rating,isAddedToWishlist,isAddedToCart}=product
    return(
        <div className="card card-vert ">
            <div className="card-img card-header-with-badge">
                <img className="responsive-img" src={source} alt={information}/>
                <span className="card-badge card-bottom-left-badge">{rating}<i className="fas fa-star text-danger"></i></span>
            </div> 
            <div className="card-body">
                <h5 className="card-header">{brand}</h5>
                <p className="card-para">{itemname}<br/>Rs. {price}</p>
                <div className="card-buttons">
                    <button className="btn-card bg-secondary card-btn-main">{isAddedToCart?"Go to Cart":"Add to Cart"}</button>
                    <button className="btn-card card-btn-second">{isAddedToWishlist?"Remove from Wishlist":"Add to Wishlist"}</button>
                </div>
            </div>
        </div> 
    )
}

export {ProductCard}