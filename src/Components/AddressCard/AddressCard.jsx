import "./address-card.css";
import { deleteAddressService } from "../../services";
import { CLEAR_CURRENT_DELIVERY_ADDRESS } from "../../helper/constants";

const AddressCard = ({ address, dispatch, token, edit, cartDispatch }) => {
  const { _id, fullname, mobile, pincode, state, locality, city } = address;

  return (
    <div className="card card-vert address_card">
      <p className="txt-bold address_name">{fullname}</p>
      <p>{locality}</p>
      <p>
        {city} - {pincode}
      </p>
      <p>{state}</p>
      <p>{mobile}</p>
      <div className="address_btn_section">
        <button
          className="btn address_btn card-btn-second"
          onClick={() => {
            edit(address);
          }}
        >
          Edit
        </button>
        <span className="separator"></span>
        <button
          className="btn address_btn card-btn-second"
          onClick={() => {
            deleteAddressService(dispatch, token, _id);
            cartDispatch({ type: CLEAR_CURRENT_DELIVERY_ADDRESS });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { AddressCard };
