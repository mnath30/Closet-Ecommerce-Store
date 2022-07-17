import { useCartWishlist } from "../../context";
import {
  deleteFromWishlistService,
  addToCartService,
  changeCartQuantityService,
} from "../../services";
import { itemInCartWishlist } from "../../helper";
import "./wishlist-card.css";

const WishlistCard = ({ item }) => {
  const { cartWishlist, cartWishlistDispatch } = useCartWishlist();
  const { cart } = cartWishlist;
  const { itemname, brand, rating, information, price, source, _id } = item;
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <div className="card card-vert ">
      <div className="card-img card-header-with-badge">
        <img className="responsive-img" src={source} alt={information} />
        <span
          className="card-badge card-top-right-badge cursor"
          onClick={() =>
            deleteFromWishlistService(cartWishlistDispatch, encodedToken, _id)
          }
        >
          <i className="fas fa-times"></i>
        </span>
        <span className="card-badge card-bottom-left-badge">
          {rating}
          <i className="fas fa-star text-danger"></i>
        </span>
      </div>
      <div className="card-body">
        <h5 className="card-header">{brand}</h5>
        <p className="card-para">
          {itemname}
          <br />
          Rs. {price}
        </p>
        <div className="card-buttons">
          <button
            className="btn-card bg-secondary btn-block"
            onClick={() => {
              itemInCartWishlist(_id, cart)
                ? changeCartQuantityService(
                    cartWishlistDispatch,
                    encodedToken,
                    { type: "increment" },
                    _id
                  )
                : addToCartService(cartWishlistDispatch, encodedToken, item);
              deleteFromWishlistService(
                cartWishlistDispatch,
                encodedToken,
                _id
              );
            }}
          >
            Move to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { WishlistCard };
