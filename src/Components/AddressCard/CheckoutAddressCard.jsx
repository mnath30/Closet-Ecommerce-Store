const CheckoutAddressCard = ({ address }) => {
  const { _id, fullname, mobile, pincode, state, locality, city } = address;

  return (
    <div className="horizontal__address_card">
      <label htmlFor={_id} className="address__label">
        <span className="flex address__inp_container">
          <input
            type="radio"
            name="address-selection"
            id={_id}
            className="address__inp"
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
