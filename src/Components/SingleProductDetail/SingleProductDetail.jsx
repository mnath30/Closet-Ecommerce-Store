import { Link, useNavigate } from "react-router-dom";
import "./single-product-detail.css";
import {
  addToCartService,
  addToWishlistService,
  deleteFromWishlistService,
} from "../../services";

const SingleProductDetail = ({
  product,
  productInBag = false,
  productInFav = false,
  encodedToken = "",
  cartWishlistDispatch,
}) => {
  const { _id, brand, itemname, rating, price, description } = product;
  const navigate = useNavigate();

  return (
    <div className="singleproduct__details">
      <h4 className="heading-h4">{brand}</h4>
      <p className="txt-md padding">{itemname}</p>
      <span className="singleproduct__rating">
        {rating}
        <i className="fas fa-star"></i>
      </span>
      <div className="hr"></div>
      <p className="heading-h4">Rs. {price}</p>
      <p className="padding singlepage__text txt-bold">
        Inclusive of all taxes
      </p>
      <span className="flex padding">
        {productInBag ? (
          <Link to="/cart">
            <button
              className="btn-card bg-secondary card-btn-main
            singleproduct__btn"
            >
              Go to Cart
            </button>
          </Link>
        ) : (
          <button
            className="btn-card bg-secondary card-btn-main singleproduct__btn"
            onClick={() => {
              encodedToken
                ? addToCartService(cartWishlistDispatch, encodedToken, product)
                : navigate("/login");
            }}
          >
            Add to Cart
          </button>
        )}
        {productInFav ? (
          <button
            className="btn-card card-btn-second singleproduct__btn"
            onClick={() =>
              deleteFromWishlistService(cartWishlistDispatch, encodedToken, _id)
            }
          >
            Remove from Wishlist
          </button>
        ) : (
          <button
            className="btn-card card-btn-second singleproduct__btn"
            onClick={() => {
              encodedToken
                ? addToWishlistService(
                    cartWishlistDispatch,
                    encodedToken,
                    product
                  )
                : navigate("/login");
            }}
          >
            Add to wishlist
          </button>
        )}
      </span>
      <div className="hr"></div>
      <h4 className="padding">Product details</h4>
      <p className="padding txt-left">{description}</p>
      <span className="padding">100% Original Products</span>
    </div>
  );
};

export { SingleProductDetail };
