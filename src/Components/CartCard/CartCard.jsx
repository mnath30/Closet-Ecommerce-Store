import "./cart-card.css";
import { useCartWishlist } from "../../context";
import {
  changeCartQuantityService,
  addToWishlistService,
  deleteFromCartService,
} from "../../services";
import { itemInCartWishlist } from "../../helper";

const CartCard = ({ item }) => {
  const { cartWishlist, cartWishlistDispatch } = useCartWishlist();
  const { wishlist } = cartWishlist;
  const { itemname, brand, qty, information, price, source, _id } = item;
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <div className="card cart-card card-horiz">
      <div className="card-img-horiz">
        <img className="responsive-img" src={source} alt={information} />
      </div>
      <div className="card-body">
        <h5 className="card-header">{brand}</h5>
        <p className="card-para">
          {itemname}
          <p>Rs. {price}</p>
        </p>
        <div className="qty padding-sm">
          Quantity:
          <button
            className="rounded-btn"
            onClick={() =>
              qty > 1
                ? changeCartQuantityService(
                    cartWishlistDispatch,
                    encodedToken,
                    { type: "decrement" },
                    _id
                  )
                : deleteFromCartService(cartWishlistDispatch, encodedToken, _id)
            }
          >
            -
          </button>
          <span className="qty-box padding-sm">{qty}</span>
          <button
            className="rounded-btn"
            onClick={() =>
              changeCartQuantityService(
                cartWishlistDispatch,
                encodedToken,
                { type: "increment" },
                _id
              )
            }
          >
            +
          </button>
        </div>
        <div className="card-horiz-btn">
          <button
            className="btn-card cart-main-btn"
            onClick={() => {
              !itemInCartWishlist(_id, wishlist) &&
                addToWishlistService(cartWishlistDispatch, encodedToken, item);
              deleteFromCartService(cartWishlistDispatch, encodedToken, _id);
            }}
          >
            Move to Wishlist
          </button>
          <button
            className="btn-card btn-card-second"
            onClick={() =>
              deleteFromCartService(cartWishlistDispatch, encodedToken, _id)
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
