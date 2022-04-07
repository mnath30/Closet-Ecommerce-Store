import { emptywishlist } from "../asset"
import { WishlistCard,EmptyPage } from "../Components"
import { useCartWishlist } from "../context/CartWishlistContext"

const emptydata={
    source:emptywishlist,
    information:"empty-wishlist",
    message:"Your Wishlist is Empty"
}

const Wishlist=()=>{
    const { cartWishlist } =useCartWishlist()
    const { wishlist } = cartWishlist
    return(
       <>
        <h4 className="heading-h4 txt-center padding-md">My Wishlist</h4>
        <div className="flex padding-lg">
            { wishlist.length===0? <EmptyPage item={emptydata}/> :
             wishlist.map(element=><WishlistCard key={element._id} item={element}/>) }
        </div>
       </> 
    )
}

export {Wishlist}