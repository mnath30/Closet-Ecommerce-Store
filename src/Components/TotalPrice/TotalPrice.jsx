import { useCartWishlist } from "../../context";
import { useNavigate } from "react-router-dom";
import "./total-price.css";

const TotalPrice = ({ discount = 200, deliverycharges = 100, btn, path }) => {
  const { cartWishlist } = useCartWishlist();
  const navigate = useNavigate();
  const { totalPrice, cart, currentDeliveryAddress } = cartWishlist;
  discount = totalPrice === 0 ? 0 : discount;
  deliverycharges = totalPrice === 0 ? 0 : deliverycharges;
  return (
    <div className="card card-vert sticky-pricing main-pricing">
      <div className="card-body">
        <h4 className="card-header">Price Details</h4>
        <hr className="line" />
        <div className="card-para">
          <div className="flex pricing-details padding-sm">
            <span>
              Price ({cart.length} {cart.length === 1 ? "item" : "items"})
            </span>
            <span>Rs. {Number(totalPrice)}</span>
          </div>
          <div className="flex pricing-details padding-sm">
            <span>Discount</span>
            <span>- Rs. {discount}</span>
          </div>
          <div className="flex pricing-details padding-sm">
            <span>Delivery Charges</span>
            <span>Rs. {deliverycharges}</span>
          </div>
          <hr className="line" />
          <div className="flex pricing-details txt-bold padding-sm">
            <span>Total Amount</span>
            <span>
              Rs.{" "}
              {Number(totalPrice) -
                (Number(discount) - Number(deliverycharges))}
            </span>
          </div>
        </div>
        <div className="card-buttons">
          <button
            className={`btn-card main-btn btn-block txt-md ${
              btn !== "Place Order" &&
              Object.keys(currentDeliveryAddress).length === 0
                ? "btn-disabled"
                : ""
            }`}
            disabled={
              btn !== "Place Order" &&
              Object.keys(currentDeliveryAddress).length === 0
            }
            onClick={(e) =>
              btn === "Place Order"
                ? navigate(path)
                : path(
                    Number(totalPrice) -
                      (Number(discount) - Number(deliverycharges))
                  )
            }
          >
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export { TotalPrice };
