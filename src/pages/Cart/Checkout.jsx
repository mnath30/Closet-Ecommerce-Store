import "./cart.css";
import { useAddress, useAuth, useCartWishlist } from "../../context";
import {
  TotalPrice,
  AddressModal,
  Modal,
  CheckoutAddressCard,
} from "../../Components";
import { useDisplayModal } from "../../hooks";
import { loadRazorpay } from "../../helper";
import logo from "../../asset/_Logo.png";
import {
  SET_CURRENT_ADDRESS,
  SET_LATEST_ORDER,
  TOTAL_PRICE,
} from "../../helper/constants";
import { clearCartService } from "../../services";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const {
    addressState: { userAddressList },
    addressDispatch,
  } = useAddress();
  const { cartWishlistDispatch } = useCartWishlist();
  const {
    cartWishlist: { currentDeliveryAddress, cart },
  } = useCartWishlist();
  const { displayModal, hideModal, showModal } = useDisplayModal();
  const {
    authState: { encodedToken, email },
  } = useAuth();
  const navigate = useNavigate();

  const checkoutAddressHandler = (addressSelected) => {
    cartWishlistDispatch({
      type: SET_CURRENT_ADDRESS,
      payload: addressSelected,
    });
  };

  useEffect(() => {
    if (cart.length === 0) navigate("/cart");
  });

  const displayRazorPay = async (cartAmount) => {
    const response = await loadRazorpay();
    if (!response) {
      alert("There was some error in processing your request");
      return;
    }
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: cartAmount * 100,
      currency: "INR",
      name: "Closet",
      description: "Thankyou for shopping. Do visit again!!",
      image: logo,
      handler: function (res) {
        if (res.razorpay_payment_id) {
          cartWishlistDispatch({
            type: SET_LATEST_ORDER,
            payload: res.razorpay_payment_id,
          });
          clearCartService(cartWishlistDispatch, encodedToken);
          cartWishlistDispatch({ type: TOTAL_PRICE, payload: 0 });
          navigate("/summary");
        }
      },

      prefill: {
        name: currentDeliveryAddress.fullname,
        email: email,
        contact: currentDeliveryAddress.mobile,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      alert("Something went wrong", response.error.code);
    });
  };

  return (
    <>
      <div className="padding-lg">
        <h4 className="heading-h4 txt-center txt-lg">Address</h4>
        <div className="grid">
          <div className="checkout__summary_section">
            <TotalPrice btn="Continue" path={displayRazorPay} />
          </div>
          <div className="address__selector_container">
            <span className="profile-address-header">
              <p className="heading-h5 profile-name">Select Delivery Address</p>
              <button
                className="btn-card card-btn-second singleproduct__btn"
                onClick={showModal}
              >
                Add New Address
              </button>
            </span>
            {userAddressList.length === 0 && (
              <p>You have not added any address yet</p>
            )}
            {userAddressList.length !== 0 &&
              userAddressList.map((item) => (
                <CheckoutAddressCard
                  address={item}
                  checkoutAddressSelector={checkoutAddressHandler}
                  key={item._id}
                />
              ))}
          </div>
        </div>
      </div>
      {displayModal && (
        <Modal displayModal={displayModal}>
          <AddressModal
            closeModal={hideModal}
            dispatch={addressDispatch}
            token={encodedToken}
          />
        </Modal>
      )}
    </>
  );
};

export { Checkout };
