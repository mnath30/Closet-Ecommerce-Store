import "./product-card.css";
import { useCartWishlist } from "../../context/CartWishlistContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cartWishlist, cartWishlistDispatch } = useCartWishlist();
  const { source, information, brand, itemname, price, rating, _id } = product;
  const isInCart = cartWishlist.cart.some((element) => element._id === _id);
  const isInWishlist = cartWishlist.wishlist.some(
    (element) => element._id === _id
  );
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
                cartWishlistDispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to Cart
            </button>
          )}
          {isInWishlist ? (
            <button
              className="btn-card card-btn-second"
              onClick={() =>
                cartWishlistDispatch({
                  type: "REMOVE_FROM_WISHLIST",
                  payload: product,
                })
              }
            >
              Remove from Wishlist
            </button>
          ) : (
            <button
              className="btn-card card-btn-second"
              onClick={() =>
                cartWishlistDispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: product,
                })
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
