import "./product-card.css";
import { useCartWishlist } from "../../context";
import { Link } from "react-router-dom";
import {
  addToCartService,
  addToWishlistService,
  deleteFromWishlistService,
} from "../../services";

const ProductCard = ({ product }) => {
  const { cartWishlist, cartWishlistDispatch } = useCartWishlist();
  const { source, information, brand, itemname, price, rating, _id } = product;
  const isInCart = cartWishlist?.cart.some((element) => element._id === _id);
  const isInWishlist = cartWishlist?.wishlist.some(
    (element) => element._id === _id
  );
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <div className="card card-vert ">
      <div className="card-img card-header-with-badge">
        <img className="responsive-img" src={source} alt={information} />
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
          {isInCart ? (
            <Link to="/cart">
              <button className="btn-card bg-secondary card-btn-main">
                Go to Cart
              </button>
            </Link>
          ) : (
            <button
              className="btn-card bg-secondary card-btn-main"
              onClick={() =>
                addToCartService(cartWishlistDispatch, encodedToken, product)
              }
            >
              Add to Cart
            </button>
          )}
          {isInWishlist ? (
            <button
              className="btn-card card-btn-second"
              onClick={() =>
                deleteFromWishlistService(
                  cartWishlistDispatch,
                  encodedToken,
                  _id
                )
              }
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              className="btn-card card-btn-second"
              onClick={() =>
                addToWishlistService(
                  cartWishlistDispatch,
                  encodedToken,
                  product
                )
              }
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
