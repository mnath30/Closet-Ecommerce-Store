import "./cart.css";
import { EmptyPage, TotalPrice, CartCard } from "../../Components";
import { emptycart } from "../../asset";
import { useCartWishlist } from "../../context/CartWishlistContext";
import { useEffect } from "react";

const emptydata = {
  source: emptycart,
  information: "empty-cart",
  message: "Your Cart is Empty",
};

const DisplayCart = ({ cartItems }) => {
  return (
    <div className="grid">
      <TotalPrice />
      <div className="main-product">
        {cartItems.map((element) => (
          <CartCard key={element._id} item={element} />
        ))}
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartWishlist, cartWishlistDispatch } = useCartWishlist();
  const { cart } = cartWishlist;

  useEffect(() => {
    const price = cart.reduce((prev, curr) => prev + curr.price * curr.qty, 0);
    cartWishlistDispatch({ type: "TOTAL_PRICE", payload: price });
  }, [cartWishlistDispatch, cart]);
  return (
    <>
      <h4 className="heading-h4 txt-center txt-lg">My Shopping Bag</h4>
      <div className=" padding-lg">
        {cart.length === 0 ? (
          <EmptyPage item={emptydata} />
        ) : (
          <DisplayCart cartItems={cart} />
        )}
      </div>
    </>
  );
};

export { Cart };
