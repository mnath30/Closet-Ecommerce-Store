import { useCartWishlist } from "../../context";

const CheckoutAddressCard = ({ address, checkoutAddressSelector }) => {
  const { _id, fullname, mobile, pincode, state, locality, city } = address;
  const {
    cartWishlist: { currentDeliveryAddress },
  } = useCartWishlist();

  return (
    <div className="horizontal__address_card">
      <label htmlFor={_id} className="address__label">
        <span className="flex address__inp_container">
          <input
            type="radio"
            name="address-selection"
            id={_id}
            className="address__inp"
            onChange={() => checkoutAddressSelector(address)}
            checked={currentDeliveryAddress?._id === _id}
          />
          <span>
            <p className="txt-bold address_name">{fullname}</p>
            <p>{locality}</p>
            <p>
              {city} - {pincode}
            </p>
            <p>{state}</p>
            <p>{mobile}</p>
          </span>
        </span>
      </label>
    </div>
  );
};

export { CheckoutAddressCard };
