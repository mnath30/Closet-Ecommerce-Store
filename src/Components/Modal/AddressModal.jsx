import "./modal.css";
import { useState } from "react";
import { addAddressService, updateAddressService } from "../../services";
import { initialAddress } from "../../helper";
import { CURRENT_UPDATING_ADDRESS } from "../../helper/constants";

const AddressModal = ({
  userAddress = initialAddress,
  closeModal,
  dispatch,
  token,
  edit,
}) => {
  const [addressDetails, setAddressDetails] = useState({
    fullname: userAddress.fullname,
    mobile: userAddress.mobile,
    locality: userAddress.locality,
    pincode: userAddress.pincode,
    state: userAddress.state,
    city: userAddress.city,
    error: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const { fullname, mobile, locality, pincode, state, city } = addressDetails;
    if (fullname && mobile && locality && pincode && state && city) {
      if (mobile.length === 10 && pincode.length === 6) {
        edit
          ? updateAddressService(
              dispatch,
              token,
              { fullname, mobile, locality, pincode, state, city },
              userAddress?._id
            )
          : addAddressService(dispatch, token, {
              fullname,
              mobile,
              locality,
              pincode,
              state,
              city,
            });
        closeModal();
        dispatch({
          type: CURRENT_UPDATING_ADDRESS,
          payload: {},
          editing: false,
        });
      } else if (mobile.length < 10) {
        setAddressDetails({
          ...addressDetails,
          error: "Mobile should be 10 digit number",
        });
      } else if (pincode.length < 10) {
        setAddressDetails({
          ...addressDetails,
          error: "Pincode should be 6 digit number",
        });
      }
    } else {
      setAddressDetails({
        ...addressDetails,
        error: "Fill all details",
      });
    }
  };

  return (
    <div className="mobile-overlay modal-container">
      <div className="modal-content">
        <h3 className="modal-heading">
          {!edit ? "Add New Address" : "Edit Address"}
        </h3>
        <div>
          <div>
            <label className="modal-label" htmlFor="fullname">
              Name
            </label>
            <input
              className="modal-inp"
              type="text"
              placeholder="Name"
              maxLength="20"
              value={addressDetails.fullname}
              required
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  fullname: e.target.value,
                  error: "",
                })
              }
              id="fullname"
            />
            <label className="modal-label" htmlFor="mobile">
              Mobile
            </label>
            <input
              className="modal-inp"
              type="number"
              placeholder="Mobile Number"
              value={addressDetails.mobile}
              required
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  mobile: e.target.value.slice(0, 10),
                  error: "",
                })
              }
              id="mobile"
            />
            <label className="modal-label" htmlFor="locality">
              Address
            </label>
            <input
              className="modal-inp"
              type="text"
              placeholder="Address (House No, Building, Street, Area)"
              maxLength="150"
              value={addressDetails.locality}
              required
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  locality: e.target.value,
                  error: "",
                })
              }
              id="locality"
            />
            <label className="modal-label" htmlFor="pincode">
              Pincode
            </label>
            <input
              className="modal-inp"
              placeholder="Pincode"
              type="number"
              title="Enter 6 digit pincode"
              value={addressDetails.pincode}
              required
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  pincode: e.target.value.slice(0, 6),
                  error: "",
                })
              }
              id="pincode"
            />
            <label className="modal-label" htmlFor="city">
              City/District
            </label>
            <input
              className="modal-inp"
              type="text"
              placeholder="City/District"
              maxLength="20"
              value={addressDetails.city}
              required
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  city: e.target.value,
                  error: "",
                })
              }
              id="city"
            />
            <label className="modal-label" htmlFor="state">
              State
            </label>
            <input
              className="modal-inp"
              type="text"
              placeholder="State"
              maxLength="20"
              value={addressDetails.state}
              required
              onChange={(e) =>
                setAddressDetails({
                  ...addressDetails,
                  state: e.target.value,
                  error: "",
                })
              }
              id="state"
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={submitHandler}>
            Save
          </button>
          <button
            className="modal-btn"
            onClick={() => {
              closeModal();
              dispatch({
                type: CURRENT_UPDATING_ADDRESS,
                payload: {},
                editing: false,
              });
            }}
          >
            Close
          </button>
        </div>
        {addressDetails.error && (
          <p className="error-msg txt-bold">{addressDetails.error}</p>
        )}
      </div>
    </div>
  );
};

export { AddressModal };
