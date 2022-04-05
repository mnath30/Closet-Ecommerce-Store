import "./cart-card.css";
import { useCartWishlist } from "../../context/CartWishlistContext";

const CartCard = ({ item }) => {
  const { cartWishlistDispatch } = useCartWishlist();
  const { itemname, brand, qty, information, price, source } = item;
  return (
    <div className="card cart-card card-horiz">
      <div className="card-img-horiz">
        <img className="responsive-img" src={source} alt={information} />
      </div>
      <div className="card-body">
        <h5 className="card-header">{brand}</h5>
        <p className="card-para">
          {itemname}
          <br />
          Rs. {price}
        </p>
        <div className="qty padding-sm">
          Quantity:
          <button
            className="rounded-btn"
            onClick={() =>
              cartWishlistDispatch({ type: "DECREASE_QTY", payload: item })
            }
          >
            -
          </button>
          <span className="qty-box padding-sm">{qty}</span>
          <button
            className="rounded-btn"
            onClick={() =>
              cartWishlistDispatch({ type: "INCREASE_QTY", payload: item })
            }
          >
            +
          </button>
        </div>
        <div className="card-horiz-btn">
          <button
            className="btn-card cart-main-btn"
            onClick={() =>
              cartWishlistDispatch({ type: "MOVE_TO_WISHLIST", payload: item })
            }
          >
            Add to Wishlist
          </button>
          <button
            className="btn-card btn-card-second"
            onClick={() =>
              cartWishlistDispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
